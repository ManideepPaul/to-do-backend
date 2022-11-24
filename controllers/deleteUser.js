import User from "../models/userModel.js";

export const deleteUser = async ( req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(201).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        console.log(error.message)
    }
}