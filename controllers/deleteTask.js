import User from "../models/userModel.js";

export const deleteTask = async (req, res) => {
    try {
        const resp = await User.findById(req.params.id);
        const title = resp.title.find(obj => obj._id == req.params.titleId)
        title.tasks.splice(req.params.index, 1);
        await resp.save();
        res.status(201).json({
            success: true,
            message: "Task deleted successfully"
        })
    } catch (error) {
        console.log(error.message)
    }

}