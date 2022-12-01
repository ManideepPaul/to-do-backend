import User from "../models/userModel.js";

export const findUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(201).json({
            success: true,
            message: "User Found",
            user
        })
    } catch (error) {
        console.log(error.message)
    }
}