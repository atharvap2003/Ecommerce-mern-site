const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");

const multer = require('multer');
const uploadMiddleware = multer({dest: "uploads/"});

//middlewares:
// const {isAdmin} = require("./middleware/AuthMiddleware.js");

const router = express.Router();

router.post("/create", uploadMiddleware.single("file"), createProduct);
router.get("/all", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
