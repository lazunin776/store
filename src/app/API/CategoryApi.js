import instance from "../Services/instance";

export const GetAllCategories = () => {
    return instance.get('/api/categories/get-all-categories');
}


export const GetCategoryById = (id) => {
    return instance.get(`/api/categories/get-category-by-id/${id}`)
}


export const CreateNewCategory = (categorName) => {
    return instance.post('/api/categories/create-new-category', {
        categorName: categorName
    })
}


export const UpdateCategory = (category) => {
    return instance.put('/api/categories/update-category', {
        category: category
    })
}


export const DeleteCategory = (id) => {
    return instance.delete(`/api/categories/delete-category/${id}`)
}