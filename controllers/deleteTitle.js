import User from "../models/userModel.js";

export const deleteTitle = async (req, res) => {
    try {
        const resp = await User.findById(req.params.id);
        resp.title.splice(req.params.index, 1);
        await resp.save();
        res.status(201).json({
            success: true,
            message: "Title deleted successfully"
        })
    } catch (error) {
        console.log(error.message)
    }
}