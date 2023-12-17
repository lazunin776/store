import { ProductModel } from "../Models/Product.js";


export default {
    getAllProducts: async (req, res) => {
        try {

            const products = await ProductModel.find();
            return res.status(200).json(products);

        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' });
        }
    },
    getProductById: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await ProductModel.findById(id);

            if (product) {
                return res.status(200).json(product);
            }

            return res.status(400).json({ msn: 'Product Not Found!' });

        } catch (err) {
            return res.status(500).json({ msn: "Server Error" })
        }
    },
    addNewProduct: async (req, res) => {
        try {
            const { productName, quantity, price, information } = req.body;
            const newProduct = {
                productName: productName,
                quantity: quantity,
                price: price,
                information: information
            }

            const addedProduct = await ProductModel(newProduct);

            return res.status(200).json(addedProduct);

        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await ProductModel.findByIdAndDelete(id);

            if (product) {
                return req.status(200).json({ msn: "Success" })
            }

            return res.status(400).json({ msn: 'Product not find' })


        } catch (err) {
            return res.status(500).json({ msn: "Server error" })
        }
    },
    updateProduct: async (req, res) => {
        const { product } = req.body;
        const uptadedProduct = await ProductModel.findById(product._id);

        try {

            if (uptadedProduct) {
                await ProductModel.findByIdAndUpdate(product._id, product, {
                    new: true,
                    upsert: true
                })

            }
            return res.status(400).json({ msn: "Not Found" })

        } catch (err) {
            return res.status(500).json({ msn: "Server Error" })
        }
    }

}