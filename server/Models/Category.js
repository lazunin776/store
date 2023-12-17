import mongoose from 'mongoose'


const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        reguired: true
    }
})

export const CategoryModel = mongoose.model('caretories', CategorySchema);