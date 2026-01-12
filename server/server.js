import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // load env var

import chatRoutes from './routes/chat.js';
import ragRoutes from './routes/rag.js';

const app = express();

// CORS configuration
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:4000',
      'http://localhost:4001',
      'http://localhost:5173',
      'http://127.0.0.1:3000',
      process.env.CLIENT_URL
    ].filter(Boolean);

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use('/api/chat', chatRoutes);  // mount chat routes
app.use('/api/rag', ragRoutes);    // mount RAG routes


// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`BeSafe Server is running on port ${PORT}`);
});
