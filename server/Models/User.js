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
    dateOfBirth: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: null
    },
    images: {
        type: Array,
        default: []
    },
    autorized: {
        type: Boolean,
        default: false
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel'
    }]
})

export const UserModel = mongoose.model('UserModel', UserSchema);