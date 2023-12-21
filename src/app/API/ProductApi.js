import instance from "../Services/instance"

export const GetAllProducts = () => {
    return instance.get('/api/product/get-all-products');
}

export const CreateNewProduct = (product) => {
    return instance.post('/api/product/create-new-product', {
        productName: product.productName,
        quantity: product.quantity,
        category: product.category,
        subCategory: product.subCategory,
        price: product.price,
        description: product.description,
        phoneNumber: product.phoneNumber,
        images: product.images,
        postedBy: product.postedBy
    })
}


export const GetProductById = (id) => {
    return instance.get(`/api/product/get-product-by-id/${id}`)
}


export const UpdateProduct = () => {
    return instance.put('/api/product/uptade-product', {
        productName: product.productName,
        quantity: product.quantity,
        category: product.category,
        subCategory: product.subCategory,
        price: product.price,
        description: product.description,
        phoneNumber: product.phoneNumber,
        images: product.images,
        postedBy: product.postedBy
    })    
}


export const DeleteProduct = (id) => {
   return instance.delete(`/api/product/delete-product/${id}`)   
}

