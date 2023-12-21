import { SubCategoryModel } from "../Models/SubCategory.js";
import { CategoryModel } from "../Models/Category.js";


export default {
    getAllSubCategoryes: async (req, res) => {
        try {
            const subCategories = await SubCategoryModel.find();
            return res.status(200).json(subCategories)
        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' })
        }
    },
    getSubCategoryById: async (req, res) => {
        try {

            const { id } = req.params;
            const subCategory = await SubCategoryModel.findById(id);
            return res.status(200).json(subCategory);

        } catch (err) {
            return res.status(500).json({ msn: "Server Error" })
        }
    },
    createNewSubCategory: async (req, res) => {
        try {
            const { id, categoryName } = req.body;
            const categoryId = await CategoryModel.findById(id)

            if (categoryId) {

                const subCategory = await SubCategoryModel.findOne({ categoryName });

                if (!subCategory) {

                    const newSubCategory = await SubCategoryModel.create({ categoryName });
                    categoryId.subCategories.push(newSubCategory._id)
                    return res.status(200).json(newSubCategory);

                }

                return res.status(400).json({ msn: 'Subcategory Already Exist' })
            }

            return res.status(400).json({ msn: "Category Not Found" })

        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' })
        }
    },
    updateSubCategory: async (req, res) => {
        try {
            const { subCategory } = req.body;
            const subCategoryResult = await SubCategoryModel.findById(subCategory._id);

            if (subCategoryResult) {
                const newSubCategory = await SubCategoryModel.findByIdAndUpdate(subCategory._id, subCategory, {
                    new: true,
                    upsert: true
                });

                return res.status(200).json(newSubCategory);
            }
        } catch (err) {
            return res.status(500).json({ msn: "Server Error" })
        }

    },
    deleteSubCategory: async (req, res) => {
        try {
            const { id } = req.params;
            await SubCategoryModel.findByIdAndDelete(id);

            return res.status(200).json({ msn: "Subcategory successfuly deleted" });

        } catch (err) {
            return res.status(500).json({ msn: "server Error" })
        }
    }
}