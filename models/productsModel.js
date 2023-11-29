import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    descripcion: {
        type: String
    },
    precio: {
        type: Number
    },
    imagen: {
        type: String
    },
    vendido: {
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