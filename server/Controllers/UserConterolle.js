import { UserModel } from '../Models/User.js'


export default {
    getAllUsers: async (req, res) => {
        try {
            const users = await UserModel.find();
            return res.status(200).json(users);

        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' })
        }
    },
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await UserModel.findById(id);

            if (user) {
                return res.status(200).json(user);
            }

            return res.status(400).json({ msn: 'User not found!' })

        } catch (err) {
            return res.status(500).json({ msn: "Server Error" })
        }
    },
    createNewUser: async (req, res) => {
        try {
            
        } catch (err) {

        }
    },
    updateUser: async (req, res) => {
        try {

        } catch (err) {

        }
    },
    deleteUser: async (req, res) => {
        try {

        } catch (err) {

        }
    }
}

