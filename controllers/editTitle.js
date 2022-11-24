import User from "../models/userModel.js";

export const editTitle = async (req, res) => {
    const { id, titleId } = req.params;
    const { titleName } = req.body;
    try {
        const user = await User.findById(id)
        const title = user.title.find(obj => obj._id == titleId)
        title.titleName = titleName;
        await user.save()
        res.status(201).json({
            success: true,
            message: "Title edited",
            titleName
        })
    } catch (error) {
        console.log(error.message)
    }
}