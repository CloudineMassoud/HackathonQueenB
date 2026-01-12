import { useEffect, useRef, useState, useContext } from "react";
import sendUserInput from "../../services/chatService.js";
import { QUICK_TOPICS } from "../../config/quickTopics.js";
import { BigSisContext } from "../../context/BigSisContext";
import { LANG } from "../../constants/languages";
import styles from "./BigSisHome.module.css";

console.log("BigSisHome styles keys:", Object.keys(styles));

const TRANSLATIONS = {
  he: {
    initialMessage: "היי! 💜 אני כאן בשבילך. אפשר לדבר על כל מה שעל הלב - בלי שיפוטיות, בלי לחץ. מה קורה איתך היום?",
    heroSubtitle: "מקום בטוח לדבר על כל מה שעל הלב. אני כאן להקשיב, לתמוך ולעזור - בלי שיפוטיות.",
    quickTopicsLabel: "או בחרי נושא:",
    inputPlaceholder: "כתוב/י משהו...",
    disclaimer: "🔒 השיחה שלך פרטית ובטוחה",
    safetyNote: "במצב חירום ?  ",
    safetyNoteText: "אם את במצוקה או מחשבות על פגיעה עצמית, פני לער\"ן - קו הסיוע הארצי: ",
    errorMessage: "לא הצלחתי לענות כרגע 😕 נסי שוב רגע 💜",
    errorRetry: "סליחה, קרתה שגיאה. אנא נסי שוב מאוחר יותר.",
  },
  en: {
    initialMessage: "Hey! 💜 I'm here for you. You can talk about anything on your mind - no judgment, no pressure. What's going on with you today?",
    heroSubtitle: "A safe place to talk about everything on your mind. I'm here to listen, support, and help - without judgment.",
    quickTopicsLabel: "Or choose a topic:",
    inputPlaceholder: "Type something...",
    disclaimer: "🔒 Your conversation is private and secure",
    safetyNote: "In an emergency? ",
    safetyNoteText: "If you're in distress or thinking about self-harm, reach out to the national crisis hotline: ",
    errorMessage: "I couldn't answer right now 😕 Please try again in a moment 💜",
    errorRetry: "Sorry, an error occurred. Please try again later.",
  }
};

const BigSisHome = () => {
  const { language } = useContext(BigSisContext);
  const lang = language === LANG.EN ? 'en' : 'he';
  const t = TRANSLATIONS[lang];
  const quickTopics = QUICK_TOPICS[lang];

  const [messageId, setMessageId] = useState(2);
  const [rawMessages, setRawMessages] = useState(() => [
    {
      id: 1,
      sender: "bigsis",
      isInitial: true,
      time: null,
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Derive messages with current language translations
  const messages = rawMessages.map((msg) => {
    if (msg.isInitial) {
      return { ...msg, text: t.initialMessage };
    }
    return msg;
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (text = input) => {
    const trimmed = (text ?? "").trim();
    if (!trimmed) return;

    const newId = messageId;

    setRawMessages((prev) => [
      ...prev,
      { id: newId, sender: "user", text: trimmed, time: null },
    ]);

    setMessageId((prev) => prev + 2);
    setInput("");
    setIsTyping(true);

    try {
      const data = await sendUserInput(trimmed);
      const aiText = data?.reply ?? data?.response ?? "";

      setIsTyping(false);
      setRawMessages((prev) => [
        ...prev,
        {
          id: newId + 1,
          sender: "bigsis",
          text: aiText || t.errorMessage,
          time: null,
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsTyping(false);
      setRawMessages((prev) => [
        ...prev,
        {
          id: newId + 1,
          sender: "bigsis",
          text: t.errorRetry,
          time: null,
        },
      ]);
    }
  };

  return (
    <div className={styles.container}>
      {/* Decorative background elements */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />

      

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <span className={styles.avatarEmoji}>👩‍🦰</span>
            </div>
            <div className={styles.onlineIndicator} />
          </div>

          <h1 className={styles.heroTitle}>Big Sis</h1>
          <p className={styles.heroSubtitle}>
            {t.heroSubtitle}
          </p>
        </div>

        {/* Chat Container */}
        <div className={styles.chatWrapper}>
          <div className={styles.chatContainer}>
            {/* Messages Area */}
            <div className={styles.messagesArea}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.messageRow} ${
                    msg.sender === "user" ? styles.rowUser : styles.rowSis
                  }`}
                >
                  {msg.sender === "bigsis" && (
                    <div className={styles.messageAvatar}>👩‍🦰</div>
                  )}

                  <div
                    className={`${styles.messageBubble} ${
                      msg.sender === "user" ? styles.userBubble : styles.sisBubble
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className={`${styles.messageRow} ${styles.rowSis}`}>
                  <div className={styles.messageAvatar}>👩‍🦰</div>
                  <div className={`${styles.messageBubble} ${styles.sisBubble}`}>
                    <div className={styles.typingIndicator}>
                      <span className={styles.typingDot} />
                      <span className={`${styles.typingDot} ${styles.typingDot2}`} />
                      <span className={`${styles.typingDot} ${styles.typingDot3}`} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Topics */}
            {messages.length <= 1 && (
              <div className={styles.quickTopics}>
                <p className={styles.quickTopicsLabel}>{t.quickTopicsLabel}</p>

                <div className={styles.quickTopicsGrid}>
                  {quickTopics.map((topic, index) => (
                    <button
                      key={index}
                      className={styles.quickTopicBtn}
                      onClick={() => handleSend(topic.message)}
                    >
                      <span className={styles.quickTopicEmoji}>{topic.emoji}</span>
                      <span className={styles.quickTopicLabelText}>{topic.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className={styles.inputArea}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={t.inputPlaceholder}
                  className={styles.input}
                  dir={lang === 'he' ? 'rtl' : 'ltr'}
                />

                <button
                  type="button"
                  onClick={() => handleSend()}
                  className={styles.sendBtn}
                  disabled={!input.trim()}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>

              <p className={styles.disclaimer}>{t.disclaimer}</p>
            </div>
          </div>
        </div>

        {/* Safety Note */}
        <div className={styles.safetyNote}>
          <div className={styles.safetyIcon}>🛡️</div>
          <p className={styles.safetyText}>
            <strong>{t.safetyNote}</strong> {t.safetyNoteText}
            <a href="tel:1201" className={styles.safetyLink}>
              1201
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default BigSisHome;
