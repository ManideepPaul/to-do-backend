import User from "../models/userModel.js";

export const findUser = async (req, res) => {

    const { id } = req.params;
    
    try {
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