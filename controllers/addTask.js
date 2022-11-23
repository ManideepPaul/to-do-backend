import User from "../models/userModel.js";

export const addTask = async (req, res) => {
    try {
        // getting user from the DB
        const resp = await User.findById(req.params.id)

        // getting title using titleId 
        const reqTitle = resp.title.find(ele => ele._id == req.params.titleId)
        
        // pushing task inside the tasks array
        reqTitle.tasks.push(req.body.task)

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