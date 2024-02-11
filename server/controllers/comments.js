import Comment from '../Models/Comment.js'
import {createError} from '../Error.js'
import Video from '../Models/Video.js';


export const AddComment = async (req,res,next) => {
    const newComment = new Comment({userId:req.user.id,...req.body})
    try {
        const savedComment = await newComment.save();
        res.status(200).json(savedComment)
    } catch (error) {
        next(error)
    }
}

export const DeleteComment = async (req,res,next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        const video = await Video.findById(req.params.id);
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id);
            res.status(200).json('comment deleted successfully')
        }else return next(createError(403,'You can only delete your comment'))
    } catch (error) {
        next(error)
    }
}

export const GetComment = async (req,res,next) => {
    try {
        const comments = await Comment.find({videoId:req.params.videoId})
        res.status(200).json(comments)
    } catch (error) {
        next(error)
    }
}

