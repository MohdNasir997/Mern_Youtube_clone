import { createError } from '../Error.js';
import Video from '../Models/Video.js';
import User from '../Models/User.js'

export const addVideo = async (req,res,next) => {
    const newVideo = await new Video({userId:req.user.id,...req.body})
    try {
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo)
    } catch (error) {
        next(error)
    }
}

export const DeleteVideo = async (req,res,next) => {
    try {
        const video = await Video.findById(rea.params.id);
        if(!video) return next(createError(404,'No Video Found'))
        if(req.user.id === video.userId){
            await Video.findByIdAndDelete(req.params.id)
            res.status(200).json('Video Deleted')
        }
    } catch (error) {
        next(error)
    }
}

export const UpdateVideo = async (req,res,next) => {
    try {
        const video = await Video.findById(rea.params.id);
        if(!video) return next(createError(404,'No Video Found'))
        if(req.user.id === video.userId){
            const updatedvideo = await Video.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            res.status(200).json(updatedvideo)
        }else return next(createError(403,'You can only update video'))
    } catch (error) {
        next(error)
    }
}

export const getVideo = async (req,res,next) => {
    try {
        const video = await Video.findById(req.params.id);
        res.status(200).json(video)
    } catch (error) {
        next(error)
    }
};

export const viewVideo = async (req,res,next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id,{$inc:{views: 1}});
        res.status(200).json('View added')
    } catch (error) {
        next(error)
    }
};

export const trend = async (req,res,next) => {
    try {
        const videos = await Video.find().sort({views: -1});
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
};

export const random = async (req,res,next) => {
    try {
        const videos = await Video.aggregate([{$sample:{size:40}}]);
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
};

export const sub = async (req,res,next) => {
    try {
        const user = await User.findById(req.user.id);
        const subscribedChannels = user.subscribedUsers;
    
        const list = await Promise.all(
          subscribedChannels.map(async (channelId) => {
            return await Video.find({ userId: channelId });
          })
        );
    
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    } catch (error) {
        next(error)
    }
};
export const getByTag = async (req,res,next) => {
    const tags = req.query.tags.split(',');
    try {
        const videos = await Video.find({tags: { $in : tags }}).limit(20)
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
};
export const search = async (req,res,next) => {
    const query = req.query.query
    try {
        const videos = await Video.find({
            title: { $regex: query, $options: "i" },
          }).limit(40);
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
};