import User from "../models/userModel.js";

export const findUser = async (req, res) => {
    try {
        // Getting the userId from the auth.js middleware
        const userId = req.dataFromMiddleware

        const user = await User.findById(userId);
        res.status(201).json({
            success: true,
            message: "User Found",
            user
        })
    } catch (error) {
        console.log(error.message)
    }
}