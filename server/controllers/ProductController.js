const Product = require("../models/Product");
const jwt = require("jsonwebtoken");

module.exports = {
  createProduct: async function (req, res) {
    const { originalname, path } = req.file;
    const parts = originalname.split(`.`);
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    try {
      const { token } = req.cookies;
      jwt.verify(token, secret, {}, async (err, info) => {
        const { productname, description, image, category, quantity, price } = req.body;
        const product = await Product.create({
          productname,
          description,
          image,
          category,
          quantity,
          price,
        });
        res.json({ Message: "Product Created Successfully: ", product});
      });

    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  getProducts: async function (req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getProductById: async function (req, res) {
    try {
      const id = req.params.id;
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ Message: "Product Not Found" });
      }
      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  updateProduct: async function (req, res) {
    try {
      const id = req.params.id;
      const { category, quantity, price, image } = req.body;
      const product = await Product.findByIdAndUpdate(
        id,
        { category, quantity, price, image },
        { new: true }
      );
      res.json({ Message: "Product Updated Successfully", product });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  deleteProduct: async function (req, res) {
    try {
      const id = req.params.id;
      await Product.findByIdAndRemove(id);
      res.json({ Message: "Product Deleted Successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
