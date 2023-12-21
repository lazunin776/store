import mongoose from 'mongoose'


const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        reguired: true,
        unique: true
    },
    subCategories: [{
       type: mongoose.Schema.Types.ObjectId,
       default: []
    }],
})

export const CategoryModel = mongoose.model('CategoryModel', CategorySchema);