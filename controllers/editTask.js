import User from "../models/userModel.js";

export const editTask = async (req, res) => {
    const { id, titleId, index } = req.params;
    const { task } = req.body;
    try {
        const user = await User.findById(id)
        const title = user.title.find(obj => obj._id == titleId);
        title.tasks.splice(index, 1, task)
        await user.save()
        res.status(201).json({
            success: true,
            message: "Task modified",
            task
        })
    } catch (error) {
        console.log(error.message)
    }
}