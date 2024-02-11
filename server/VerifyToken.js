import jwt from 'jsonwebtoken';
import {createError} from './Error.js'

export const verifytoken= (req,res,next) => {
    const token = req.cookies.access_token;

    if(!token) return next(createError(401,'you are not authorized'));

    jwt.verify(token,process.env.JWT,(err,user) => {
        if(err) return next(createError(403,'invalid token'));

        req.user = user;
        next()
    })
}