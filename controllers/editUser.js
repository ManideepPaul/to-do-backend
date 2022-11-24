import User from "../models/userModel.js";

export const editUser = async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    try {
        const user = await User.findByIdAndUpdate(id, {name})
        res.status(201).json({
            success: true,
            message: "User name edited",
            name
        })
    } catch (error) {
        console.log(error.message)
    }
}