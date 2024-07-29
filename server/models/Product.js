const mongoose = require("mongoose");
const {model, Schema} = mongoose;

const productSchema = new Schema({
    productname: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        enum: ['mobile', 'headphone', 'computer', 'laptop', 'charger', 'pc'],
    },
    quantity:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
},{timestamps:true});

const Product = model('Product', productSchema);
module.exports = Product;