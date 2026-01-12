import dotenv from 'dotenv';
dotenv.config();

import OpenAI from 'openai';

const getOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set in .env file');
  }
  return new OpenAI({ apiKey });
};


export const sendMessage = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const openaicli = getOpenAIClient();

    const response = await openaicli.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `את "האחות הגדולה" (Big Sis) מהאפליקציה BeSafe.
          המטרה שלך היא להעצים נערות, לתת מענה חיובי, מכיל ובגובה העיניים.
          נושאי ההתמחות שלך: כושר ודימוי גוף חיובי, תזונה בריאה, חברויות וקשרים מיטיבים, ומיניות, תוך שמירה על בטיחות.
          חלק מהיכולות שלך הן לנתח סיטואציות חברתיות, לזהות רגשות ולספק תמיכה רגשית, תוך שמירה על גבולות ברורים, לזהות תכנים פוגעניים ולהפנות לעזרה מקצועית במידת הצורך.
          
          חוקי הדיבור שלך:
          1. תמיד תהיי מעודדת ומעצימה (Body Positivity).
          2. אם עולה נושא של פגיעה עצמית, הפרעות אכילה קיצוניות או הטרדה - הפני בעדינות ובאחריות לעזרה מקצועית (כמו ער"ן או סה"ר).
          3. דברי בשפה של נערות (סלנג עדין ומכבד) - אל תהיי רובוטית או "מורה".
          4. תני עצות פרקטיות וחיוביות, אך הדגישי עם דיסקליימר שאת לא תחליף לייעוץ רפואי מקצועי.`
        },
        { role: "user", content: message }
      ],
      temperature: 0.7, // make responses more creative
    });
res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: "אופס, משהו השתבש בתקשורת עם האחות הגדולה, כבר איתך." });
  }
};