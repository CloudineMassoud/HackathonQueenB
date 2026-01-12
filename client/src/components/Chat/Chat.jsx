import { useState } from "react";
import styles from "./Chat.module.css";
import sendUserInput from "../../services/chatService";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "היי! 💜 אני כאן בשבילך. אפשר לדבר על כל מה שעל הלב - בלי שיפוטיות.. בנחת. מה קורה איתך היום?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg = { role: "user", text: trimmed };
    setMessages(prev => [...prev, userMsg]);

    setInput("");
    setIsLoading(true);

    try {
      const data = await sendUserInput(trimmed);
      console.log("API payload:", data);  // just to verify response structure
      const aiText =
        data?.reply ??
        data?.response ?? /* fallback if backend returns "response" */
        "";

      setMessages(prev => [
        ...prev,
        { role: "ai", text: aiText || "לא הצלחתי לענות כרגע 😕 נסי שוב רגע 💜" }
      ]);
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages(prev => [
        ...prev,
        { role: "ai", text: "אופס, משהו השתבש... נסי שוב" }
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.answerArea}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.role === "user" ? styles.userBubble : styles.aiBubble}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && <div className={styles.loading}>Big Sis is writing... ✍️</div>}
      </div>

      <div className={styles.inputArea}>
        <textarea
          className={styles.inputTextArea}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="כתבי כאן..."
          disabled={isLoading}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <button
          className={styles.button}
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? "..." : "שלחי"}
        </button>
      </div>
    </div>
  );
}
