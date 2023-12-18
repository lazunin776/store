import { CategoryModel } from "../Models/Category.js";


export default {
    getAllCategories: async (req, res) => {
        try {
            const categories = await CategoryModel.find();
            return res.status(200).json(categories);
        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' })
        }
    },

    getCategoryById: async (req, res) => {
        try {
            const { id } = req.params;
            const category = await CategoryModel.findById(id);
            if (category) {
                return res.status(200).json(category);
            }

            return res.status(400).json({ msn: 'Category Not Found' });

        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' })
        }
    },

    createNewCategory: async (req, res) => {
        try {
            const { categoryName } = req.body;
            const category = await CategoryModel.findOne({ categoryName });

            if (!category) {
                const newCategory = await CategoryModel.create({ categoryName });
                newCategory.save();

                return res.status(200).json(newCategory);
            }

            return res.status(400).json({ msn: "Category Alredy Exist" })

        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' })
        }
    },

    updateCategory: async (req, res) => {
        try {
            const { category } = req.body;
            const updatedCategory = await CategoryModel.findById(category._id);

            if (updatedCategory) {
                const newCategory = await CategoryModel.findOneAndUpdate(category._id, category, {
                    new: true,
                    upsert: true
                })

                return res.status(200).json(newCategory)
            }

            return res.status(400).json({msn: 'Product Not Found!'})

        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' })
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const { _id } = req.params;
            const deletedCategory = await CategoryModel.findByIdAndDelete(_id);

            if(deletedCategory){
                return res.status(200).json({msn: 'Category Successfuly Deleted!'})
            }

            return res.status(400).json({msn: 'Category Not Found!'})

        } catch (err) {
            return res.status(500).json({msn: 'Server Error'})
        }
    }
}