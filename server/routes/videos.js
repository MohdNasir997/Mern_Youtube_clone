import express from 'express'
import { verifytoken } from '../VerifyToken.js';
import { DeleteVideo, UpdateVideo, addVideo, getByTag, getVideo, random, search, sub, trend, viewVideo } from '../controllers/videos.js';

const router = express.Router();

// create a video
router.post('/',verifytoken,addVideo)
router.delete('/:id',verifytoken,DeleteVideo)
router.put('/:id',verifytoken,UpdateVideo)
router.get('/find/:id',getVideo)
router.put('/views.:id',viewVideo)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub",verifytoken, sub)
router.get("/tags", getByTag)
router.get("/search", search)

export default router;