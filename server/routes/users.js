import express from 'express'
import { Dislike, Like, Subscribe, Unsubscribe, deleteUser, getUser, updateUser } from '../controllers/users.js';
import { verifytoken } from '../VerifyToken.js';

const router = express.Router();

// Update a User
router.put('/:id',verifytoken,updateUser)
// Delete a User
router.delete('/:id',verifytoken,deleteUser)
// GET a User
router.get('/find/:id',getUser)
// Subscribe
router.put('/sub/:videoId',verifytoken,Subscribe)
// Unsubscribe
router.put('/unsub/:videoId',verifytoken,Unsubscribe)
//Like a Video
router.put('/like/:videoId',verifytoken,Like)
//Dislike a Video
router.put('/dislike/:videoId',verifytoken,Dislike)

export default router;