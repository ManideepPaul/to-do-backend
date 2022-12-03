import jwt from 'jsonwebtoken';

/* 
    Steps
    - Get the token from cookies
    - If token is not present then throw error
    - verify the token
    - then use next()
*/

export const auth = async (req, res, next) => {
    const token =  req.body.token || req.cookies.token;
    try {
        if(!token) res.status(401).json({
            success: false,
            message: 'Token missing'
        })
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        req.dataFromMiddleware = verifyToken.userId
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        })
    }

    return next()
}