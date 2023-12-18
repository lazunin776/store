import mongoose from 'mongoose'


const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        reguired: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel'
    }]
})

export const CategoryModel = mongoose.model('CategoryModel', CategorySchema);