const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const sendWelcomeEmail = require("./utils/mailer");

//models:
const User = require("./models/user");
const Product = require("./models/Product");

const app = express();
const PORT = 8000;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

const salt = bcrypt.genSaltSync(10);
const secret = "abcdefghijk";

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

mongoose
  .connect(
    "mongodb+srv://atharvapandharikar5:TOIpfctweQDahnKt@cluster0.5a7iolh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((e) => {
    console.log("Mongoose Error", e);
  });

app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    // Send welcome email
    sendWelcomeEmail(email, username);
    return res.json({
      UserData: { username, email },
      Message: "User Created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc == null) {
    return res.status(400).json({ Message: "User not Exist!!", ok: false });
  }
  const passCheck = bcrypt.compareSync(password, userDoc.password);
  if (passCheck) {
    jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      return res.cookie("token", token).json({
        id: userDoc._id,
        email,
        token,
      });
    });
  } else {
    return res.status(400).json("Bad Credentials");
  }
});

app.get("/api/productdata", async (req, res) => {
  try {
    const productdata = await Product.find().sort({ createdAt: -1 }).limit(8);
    res.json(productdata);
  } catch (error) {
    console.log("Error in Fetching Product: ", error);
    res.json({ error: "Error in Fetching Product:" });
  }
});

app.get("/api/product/:id",async(req, res)=>{
  const { id } = req.params;
  try {
    const ProductData = await Product.findById(id);
    res.json(ProductData);
  } catch (error) {
    console.error("Error in fetching Product Data ",error);
    res.json({Error: "Error in Fetching Specific Product:"})
  }
})

//admin product router::
app.use("/api/products/create", upload.single("file"), async (req, res) => {
  const { productname, description, category, quantity, price } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : "";

  const newProduct = new Product({
    productname,
    description,
    image,
    category,
    quantity,
    price,
  });

  try {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
