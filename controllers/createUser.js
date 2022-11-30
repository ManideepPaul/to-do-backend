import User from "../models/userModel.js";
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
    try {
        const { name, password, email } = req.body;
        const lowerEmail = email.toLowerCase()
        
        // Checking if name exist
        if(!(name && password && email)) res.send("All fields are required")

        // Check is email exist
        const emailExist = await User.findOne({email: lowerEmail});

        if(emailExist) res.json({
            success: false,
            message: "User already exist"
        })

        // Hashing the password
        const hashPassword = await bcrypt.hash(password, 10)

        // Inserting data into database
        const user = await User.create({
            name,
            email: lowerEmail,
            password: hashPassword
        })
        res.status(201).json({
            success: true,
            message: "User name added successfully",
            user
        })
    } catch (error) {console.log(error)}
}