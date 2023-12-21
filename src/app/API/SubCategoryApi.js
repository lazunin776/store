import instance from "../Services/instance";

export const CreateSubCategory = (categoryName) => {
    return instance.post('/api/subcategory/create-new-subcategory', {
        categoryName: categoryName
    })
}

export const GetSubCategoryById = (id) => {
    return instance.get(`/api/subcategories/get-subactegory-by-id/${id}`)
}


export const UpdateSubCategory = (categoryName) => {
    return instance.put('/api/subcategory/update-subcategory', {
        categoryName: categoryName
    })
}

export const DeleteSubCategory = (id) => {
    return instance.delete(`/api/subcategory/delete-subcategory/${id}`)
}

export const GetAllSubCategories = () => {
    return instance.get('/api/subcategory/get-all-subcategories');
}