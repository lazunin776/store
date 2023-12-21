import mongoose from 'mongoose'

const SubCategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel'
    }]
})

export const SubCategoryModel = mongoose.model('subCategory', SubCategorySchema);