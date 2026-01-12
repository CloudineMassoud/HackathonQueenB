import express from 'express';
import {
    addDocument,
    searchDocuments,
    getAllDocuments,
    deleteDocument,
    ragChat
} from '../controllers/ragController.js';

const router = express.Router();

// Add a document to the knowledge base
// POST /api/rag/documents
router.post('/documents', addDocument);

// Get all documents
// GET /api/rag/documents
router.get('/documents', getAllDocuments);

// Delete a document
// DELETE /api/rag/documents/:id
router.delete('/documents/:id', deleteDocument);

// Search for similar documents
// POST /api/rag/search
router.post('/search', searchDocuments);

// RAG-enhanced chat
// POST /api/rag/chat
router.post('/chat', ragChat);

export default router;
