import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    sold: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    deletedAt: {
        type: Date
    }
});

const Product = model('product', productSchema);

export default Product;