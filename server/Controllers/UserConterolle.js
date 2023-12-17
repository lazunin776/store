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
            const { firstName, lastName, middleName, dateOfBirth, phoneNumber, email,
                password, profileImage } = req.body;
            const user = await UserModel.findOne({ email });

            if (!user) {
                const newUser = await UserModel.create({
                    firstName, lastName, middleName, dateOfBirth, phoneNumber, email,
                    password, profileImage
                });

                newUser.save();
            }

            return req.status(400).json({ msn: 'User Alredy Exist' });

        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' })
        }
    },
    updateUser: async (req, res) => {
        try {
            const { user } = req.body;
            const updatedUser = await UserModel.findById(user.id);

            if (updatedUser) {
                const newUpdadedUser = await UserModel.findOneAndUpdate(user._id, user, {
                    new: true,
                    upsert: true
                })

                return res.status(200).json(newUpdadedUser);
            }

            return res.status(400).json({ msn: "User not found" })

        } catch (err) {
            return res.status(500).json({ msn: 'Server Error' });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { _id } = req.params;
            const user = await UserModel.findById(_id);
            
            if(user){
                await UserModel.findByIdAndDelete(_id);
                return res.status(200).json({msn: 'Successfuly deleted'})
            }

            return res.status(400).json({msn: "User Not Found"});

        } catch (err) {
           return res.status(500).json({msn: 'Server Error'});
        }
    }
}

