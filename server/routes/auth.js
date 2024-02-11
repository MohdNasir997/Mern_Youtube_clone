import express from 'express'
import { googleAuth, signOut, signin, signup } from '../controllers/auth.js';

const router = express.Router();

//Create a User
router.post('/signup',signup)
//Sign In
router.post('/signin',signin)
// Sign-out
router.get('/signout',signOut)
// GOOGLE AUTH
router.post('/google',googleAuth)
export default router;