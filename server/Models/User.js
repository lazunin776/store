import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
    },
    images: {
        type: Array
    },
    autorized: {
        type: Boolean,
        default: false
    }
})

export const UserModel = mongoose.model('UserModel', UserSchema);