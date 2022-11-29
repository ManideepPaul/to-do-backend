import User from "../models/userModel.js";

export const deleteTask = async (req, res) => {

    const {id, titleId, index} = req.params;
    
    try {
        const resp = await User.findById(id);
        const title = resp.title.find(obj => obj._id == titleId)
        title.tasks.splice(index, 1);
        await resp.save();
        res.status(201).json({
            success: true,
            message: "Task deleted successfully"
        })
    } catch (error) {
        console.log(error.message)
    }

}