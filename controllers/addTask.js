import User from "../models/userModel.js";

export const addTask = async (req, res) => {

    // getting the id and titleId from params
    const { id, titleId } = req.params

    // getting task from the body
    const { task } = req.body
    try {
        // getting user from the DB
        const resp = await User.findById(id)

        // getting title using titleId 
        const reqTitle = resp.title.find(ele => ele._id == titleId)

        // pushing task inside the tasks array
        reqTitle.tasks.push(task)

        // saving the updated user in DB
        await resp.save()

        res.status(201).json({
            success: true,
            message: 'Task added to DB',
            tasks: reqTitle.tasks
        })
    } catch (error) {
        console.log(error.message)
    }
}