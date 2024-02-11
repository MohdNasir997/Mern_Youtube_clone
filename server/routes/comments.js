import express from 'express'
import { verifytoken } from '../VerifyToken.js';
import { AddComment, DeleteComment, GetComment } from '../controllers/comments.js';


const router = express.Router();

router.post('/',verifytoken,AddComment);
router.delete('/:id',verifytoken,DeleteComment);
router.get('/:videoId',GetComment);

export default router;