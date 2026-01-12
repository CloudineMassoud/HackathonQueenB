/* eslint-disable n/no-unsupported-features/node-builtins */
/* eslint-disable import/no-unresolved */
/* eslint-disable n/no-missing-import */
/**
 * RAG Knowledge Base - Data Insertion Script
 * 
 * Use the addDocument function to insert your data.
 * Documents are indexed by TAGS for easy retrieval.
 * 
 * Run with: node scripts/seedKnowledgeBase.js
 */

import dotenv from 'dotenv';
dotenv.config();

// Use dynamic import for node-fetch (or native fetch in Node 21+)
const fetchFn = globalThis.fetch || (await import('node-fetch')).default;

const API_URL = process.env.SERVER_URL || 'http://localhost:5000';

/**
 * Add a document to the knowledge base
 * @param {string[]} tags - Array of tags for retrieval (e.g., ['אכילה', 'תזונה', 'בריאות'])
 * @param {string} topic - Main topic category (e.g., 'nutrition', 'body-positivity')
 * @param {string} content - The actual content/knowledge
 */
async function addDocument(tags, topic, content) {
    try {
        const response = await fetchFn(`${API_URL}/api/rag/documents`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                tags: tags,
                topic: topic,
                content: content
            })
        });

        const data = await response.json();

        if (response.ok) {
            console.log(`✅ Added [${topic}]: ${tags.slice(0, 3).join(', ')}...`);
        } else {
            console.error(`❌ Failed [${topic}]: ${data.error || data.details}`);
        }
        return data;
    } catch (error) {
        console.error(`❌ Error [${topic}]: ${error.message}`);
    }
}

// ============================================================
// ADD YOUR DATA HERE
// Use: await addDocument(tags, topic, content)
// ============================================================

async function seedKnowledgeBase() {
    console.log('🌱 Starting to seed knowledge base...\n');
    console.log(`📍 API URL: ${API_URL}\n`);

    // Example usage:
    // await addDocument(
    //   ['אכילה', 'תזונה', 'בריאות'],   // tags
    //   'nutrition',                      // topic
    //   'Your content here...'            // content
    // );

    // ADD YOUR DOCUMENTS BELOW:
    // ---------------------------




    // ---------------------------

    console.log('\n✨ Seeding complete!');
}

// Run the seeder
seedKnowledgeBase();

// Export the function for use in other files
export { addDocument };
