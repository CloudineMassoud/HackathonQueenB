import express from 'express';
import { sendMessage } from '../controllers/chatController.js';

const router = express.Router();

// POST a chat message
router.post('/message', sendMessage);

export default router;