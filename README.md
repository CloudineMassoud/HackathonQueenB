# 🌸 BeSafe – Your Digital Big Sister  
### QueenB x AppsFlyer BeSafe Hackathon 2026

BeSafe is an AI-powered support platform developed during the QueenB x AppsFlyer BeSafe Hackathon 2026.  
The platform provides a safe, supportive, and educational digital space for teens to discuss topics such as body positivity, relationships, intimacy, and nutrition.

Built using the MERN stack and enhanced with Retrieval-Augmented Generation (RAG), BeSafe delivers context-aware, grounded AI responses using a curated knowledge base.

---

## 🌟 Project Vision

To create a supportive AI “Big Sister” that:
- Encourages healthy digital conversations  
- Provides reliable, educational content  
- Reduces misinformation and AI hallucinations  
- Promotes safe and confident decision-making  

---

## ✨ Features

### 🤖 AI-Powered Chat Support
- Conversational AI assistant (“Big Sis”)
- Context-aware responses using RAG architecture
- Multi-language support (Hebrew & English)
- Quick topic buttons for guided conversations

### 📚 Curated Educational Content
Organized into key categories:
- 💪 Body Positivity  
- 💕 Relationships  
- 🌹 Intimacy  
- 🥗 Nutrition  

### 🧠 Retrieval-Augmented Generation (RAG)
- Vector-based semantic search
- Knowledge grounding before generation
- Tag-based document organization
- Reduced hallucinations via contextual injection

### 🎨 Customizable UI
- Fully responsive design
- Clean and intuitive interface

---

## 🛠️ Tech Stack

### Frontend
- React (v19) with Vite
- React Router
- Axios
- CSS Modules with dynamic theming

### Backend
- Node.js
- Express (v5)
- OpenAI API
- Supabase (with pgvector)
- CORS configuration

### AI & Data Layer
- OpenAI `text-embedding-3-small`
- Supabase vector database (pgvector)
- Semantic similarity search
- Custom RAG pipeline

---

## 🧠 RAG Architecture Overview

The system follows this pipeline:

1. User submits a question
2. The question is converted into an embedding
3. Semantic similarity search retrieves relevant documents
4. Retrieved context is injected into the LLM prompt
5. The final grounded response is generated

This approach improves response accuracy and reduces hallucinations compared to standalone LLM usage.

---

## 👩‍💻 Team

Developed during the QueenB x AppsFlyer BeSafe Hackathon 2026.

Team Members:
- Ein-Bar Surie
- Lana Abu Romi
- Shaked Nuttman
- Cloudine Massoud

---

## 🚀 My Contribution

- Researched and implemented Retrieval-Augmented Generation (RAG) from scratch  
- Designed and structured the AI knowledge base  
- Manually curated and validated educational content from reliable online sources  
- Integrated and configured Supabase as a vector database  
- Generated embeddings and optimized semantic similarity search  
- Organized documents using tag-based classification for accurate retrieval  

---

## 📦 Installation

### Prerequisites
- Node.js v20+
- npm v10+
- OpenAI API key
- Supabase project with pgvector enabled

### Clone the Repository

```bash
git clone 
cd HackathonQueenB

