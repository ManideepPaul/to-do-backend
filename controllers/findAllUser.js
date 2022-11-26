import User from "../models/userModel.js";

export const findAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(201).json({
            success: true,
            message: "All user found",
            users
        })
    } catch (error) {
        console.log(error.message)
    }
}