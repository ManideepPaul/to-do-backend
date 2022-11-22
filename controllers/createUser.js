import User from "../models/userModel.js"

export const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        console.log(name);
        
        // Checking if name exist
        if(!name) res.send("Name required")

        // Inserting data into database
        const user = await User.create({name})
        res.status(201).json({
            success: true,
            message: "User name added successfully",
            user
        })
    } catch (error) {console.log(error)}
}