import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* 
    Steps
    - Get email and password from the body
    - If email and password not found throw error
    - Find user using the email
    - Match the password with DB
    - If both found create a JWT token
    - Clear user password and send token in cookie

*/

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!(email && password)) res.status(401).json({
            success: false,
            message: "email and password required"
        })

        const user = await User.findOne({email});
        const matchPassword = await bcrypt.compare(password, user.password);

        if(user && matchPassword){
            const token = jwt.sign(
                {userId: user._id},
                process.env.SECRET_KEY,
                {expiresIn: '2h'}
            )
                console.log(token)
            user.password = undefined;

            // Cookie options
            const options = {
                expires: new Date(Date.now() + (7 * (60 * 60 * 24 * 1000)/* Miliseconds in a day * 7days */)),
                httpOnly: true /* Cookie can only accessed by backend */
            }
            res.status(201).cookie('token', token, options).json({
                success: true,
                message: `Welcome ${user.name}`
            })
        }
        else {
            res.status(401).json({
                success: false,
                message: "Email or password incorrect"
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}