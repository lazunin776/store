import mongoose from 'mongoose'

const ProductShcema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
       type: String,
       required: true
    },
    subCategory: {
       type: String,
       required: true
    },
    description: {
       type: String,
       default: ''
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    rate: {
        type: Number,
        default: 0
    },
    phoneNumber: {
       type: String,
       required: true
    },
    images: {
       type: Array, 
       default: []
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
})


export const ProductModel = mongoose.model('ProductModel', ProductShcema)