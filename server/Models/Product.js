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
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    information: {
        type: String,
        default: ''
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