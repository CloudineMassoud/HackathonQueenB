import dotenv from 'dotenv';
dotenv.config();

import OpenAI from 'openai';
import supabase from '../config/supabase.js';

// Initialize OpenAI client
const getOpenAIClient = () => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error('OPENAI_API_KEY is not set in .env file');
    }
    return new OpenAI({ apiKey });
};

// Generate embedding for text using OpenAI
export const generateEmbedding = async (text) => {
    const openai = getOpenAIClient();
    const response = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: text,
    });
    return response.data[0].embedding;
};

// Add a document to the knowledge base
// Expects: { tags: string[], topic: string, content: string }
export const addDocument = async (req, res) => {
    const { tags, topic, content } = req.body;

    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }
    if (!tags || !Array.isArray(tags)) {
        return res.status(400).json({ error: 'Tags array is required' });
    }
    if (!topic) {
        return res.status(400).json({ error: 'Topic is required' });
    }

    try {
        console.log('Adding document, generating embedding...');
        // Generate embedding for the content
        const embedding = await generateEmbedding(content);
        console.log('Embedding generated, dimensions:', embedding.length);

        // Insert into Supabase with new schema
        console.log('Inserting into Supabase...');
        const { data, error } = await supabase
            .from('documents')
            .insert({
                tags,
                topic,
                content,
                embedding,
            })
            .select();

        if (error) {
            console.error('Supabase Error:', error);
            return res.status(500).json({ error: 'Failed to add document', details: error.message });
        }

        console.log('Document added successfully!');
        res.json({
            message: 'Document added successfully',
            document: data[0]
        });
    } catch (error) {
        console.error('Error adding document:', error.message || error);
        res.status(500).json({ error: 'Failed to add document', details: error.message });
    }
};

// Search for similar documents
export const searchDocuments = async (req, res) => {
    const { query, matchThreshold = 0.5, matchCount = 5 } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    try {
        // Generate embedding for the query
        const queryEmbedding = await generateEmbedding(query);

        // Search using the match_documents function
        const { data, error } = await supabase.rpc('match_documents', {
            query_embedding: queryEmbedding,
            match_threshold: matchThreshold,
            match_count: matchCount,
        });

        if (error) {
            console.error('Supabase Error:', error);
            return res.status(500).json({ error: 'Failed to search documents' });
        }

        res.json({ results: data });
    } catch (error) {
        console.error('Error searching documents:', error);
        res.status(500).json({ error: 'Failed to search documents' });
    }
};

// Get all documents (for admin/debugging)
export const getAllDocuments = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('documents')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Supabase Error:', error);
            return res.status(500).json({ error: 'Failed to fetch documents', details: error.message });
        }

        res.json({ documents: data });
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ error: 'Failed to fetch documents', details: error.message });
    }
};

// Delete a document
export const deleteDocument = async (req, res) => {
    const { id } = req.params;

    try {
        const { error } = await supabase
            .from('documents')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Supabase Error:', error);
            return res.status(500).json({ error: 'Failed to delete document' });
        }

        res.json({ message: 'Document deleted successfully' });
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).json({ error: 'Failed to delete document' });
    }
};

// RAG-enhanced chat - searches knowledge base and uses context for response
export const ragChat = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        // 1. Search for relevant documents
        const queryEmbedding = await generateEmbedding(message);

        const { data: relevantDocs, error: searchError } = await supabase.rpc('match_documents', {
            query_embedding: queryEmbedding,
            match_threshold: 0.3,
            match_count: 3,
        });

        if (searchError) {
            console.error('Search Error:', searchError);
        }

        // 2. Build context from relevant documents
        let context = '';
        if (relevantDocs && relevantDocs.length > 0) {
            context = relevantDocs.map(doc => doc.content).join('\n\n');
        }

        // 3. Generate response with context
        const openai = getOpenAIClient();

        const systemPrompt = `את "האחות הגדולה" (Big Sis) מהאפליקציה BeSafe.
המטרה שלך היא להעצים נערות, לתת מענה חיובי, מכיל ובגובה העיניים.
נושאי ההתמחות שלך: כושר ודימוי גוף חיובי, תזונה בריאה, חברויות וקשרים מיטיבים, ומיניות, תוך שמירה על בטיחות.

${context ? `השתמשי במידע הבא מבסיס הידע שלך כדי לענות:\n${context}\n\n` : ''}

חוקי הדיבור שלך:
1. תמיד תהיי מעודדת ומעצימה (Body Positivity).
2. אם עולה נושא של פגיעה עצמית, הפרעות אכילה קיצוניות או הטרדה - הפני בעדינות ובאחריות לעזרה מקצועית.
3. דברי בשפה של נערות (סלנג עדין ומכבד) - אל תהיי רובוטית או "מורה".
4. תני עצות פרקטיות וחיוביות.`;

        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: message }
            ],
            temperature: 0.7,
        });

        res.json({
            reply: response.choices[0].message.content,
            sourcesUsed: relevantDocs?.length || 0
        });
    } catch (error) {
        console.error('RAG Chat Error:', error);
        res.status(500).json({ error: 'אופס, משהו השתבש. כבר איתך.' });
    }
};
