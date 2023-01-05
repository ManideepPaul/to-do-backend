import User from "../models/userModel.js";

export const findUser = async (req, res) => {
    try {
        // Getting the userId from the auth.js middleware
        const userId = req.dataFromMiddleware

        // Arranging the title array according to updatedAt
        const user = await User.findByIdAndUpdate(userId, {
            $push: {
                title: {
                    $each: [],
                    $sort: { updatedAt: -1 }
                }
            }
        });
        user.password = undefined;

        res.status(201).json({
            success: true,
            message: "User Found",
            user
        })
    } catch (error) {
        console.log(error.message)
    }
}