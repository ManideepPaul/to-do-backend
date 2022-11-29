import User from "../models/userModel.js";

export const addTitle = async (req, res) => {

    // getting the id from params
    const { id } = req.params;

    // getting the title from the body
    const { title } = req.body;
    try {
        // fetching the user using id
        const resp = await User.findById(id)

        // Pushing the title as titleName inside the title array 
        resp.title.push({
            titleName: title
        })

        // Saving the resp object in DB after updating it
        await resp.save()
        res.status(201).json({
            success: true,
            message: "Title name saved successfully",
            resp,
            // To get the id of newly created title
            // id: (resp.title[title.length - 1])._id
        })
    } catch (error) {
        console.log(error.message)
    }
}