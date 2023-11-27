import mongoose from 'mongoose'

const ProductShcema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    information: {
        type: String,
        default: ''
    },
    profileImg: {
        type: String,
        default: ''
    },
    images: {
       type: Array, 
       default: []
    }
})


export const ProductModel = mongoose.model('ProductModel', ProductShcema)