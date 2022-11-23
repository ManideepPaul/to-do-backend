import User from "../models/userModel.js";

export const addTitle = async (req, res) => {
    try {
        // fetching the user using id
        const resp = await User.findById(req.params.id)

        // getting the title from the body
        const { title } = req.body;

        // Pushing the title as titleName inside the title array 
        resp.title.push({
            titleName: title
        })

        // Saving the resp object in DB after updating it
        await resp.save()
        res.status(201).json({
            success: true,
            message: "Title name saved successfully",
            resp
        })
    } catch (error) {
        console.log(error.message)
    }
}