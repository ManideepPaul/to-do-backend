import User from "../models/userModel.js";

export const deleteTitle = async (req, res) => {

    const { id, titleId } = req.params;
    try {
        const resp = await User.findById(id);

        // getting the title to be deleted
        const toDel = resp.title.find(ele => ele._id == titleId)

        // getting the index of the title which will be deleted
        const index = resp.title.indexOf(toDel)
        
        // removing the title from the array
        resp.title.splice(index, 1);
        
        await resp.save();
        res.status(201).json({
            success: true,
            message: "Title deleted successfully"
        })
    } catch (error) {
        console.log(error.message)
    }
}