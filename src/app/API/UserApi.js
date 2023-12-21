import instance from "../Services/instance";

export const GetAllUsers = () => {
    return instance.get('/api/users/get-all-users');
}

export const AddNewUser = (user) => {
    return instance.post('/api/users/create-new-user', {
        firstName: user.firstName, 
        lastName: user.lastName, 
        dateOfBirth: user.dateOfBirth, 
        phoneNumber: user.phoneNumber, 
        email: user.email,
        password: user.password, 
        profileImage: user.profileImage
    })
}

export const UpdateUser = (user) => {
    return instance.put('/api/users/uptade-user', {
        firstName: user.firstName, 
        lastName: user.lastName, 
        dateOfBirth: user.dateOfBirth, 
        phoneNumber: user.phoneNumber, 
        email: user.email,
        password: user.password, 
        profileImage: user.profileImage
    })
}


export const DeleteUser = (id) => {
    return instance.delete(`/api/users/delete-user/${id}`)
}

export const GetUserById = (id) => {
    return instance.get(`/api/users/get-user-by-id${id}`)
}