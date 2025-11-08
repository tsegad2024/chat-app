// import jwt from "jsonwebtoken";

// export const generateToken = (userId, res) => {
//     try {
//         const token = jwt.sign({userId}, process.env.JWT_SECRET, {
//             expiresIn: '1d'
//         })

//         res.cookie('jwt', token, {
//             maxAge: 7*24*60*60, //ms
//             httpOnly: true, 
//             sameSite: "strict",
//             secure: process.env.NODE_ENV != "development",
//         })

//         return token;
//     } catch (error) {
//         return res.status(400).json({message: "Error while generating jwt token: ", token})
//     }
// }

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const generateToken =  (userId, res) => {
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {
                expiresIn: "7d"
        })

        res.cookie("jwt", token, {
            maxAge: 7*24*60*60, //ms
            httpOnly: true, // Prevent XSS attacks cross-site scripting atacks
            sameSite: "strict",
            secure: process.env.NODE_ENV != "development",

        })
        return token;
    } catch (error) {
        return res.status(400).json({message: "Error while generatin jwt token"})
    }
}