import { useContext } from "react";
import { BigSisContext } from "../../context/BigSisContext";
import { LANG } from "../../constants/languages";
import styles from "./BigSisHome.module.css";

const TRANSLATIONS = {
  he: {
    heroSubtitle: "מקום בטוח לדבר על כל מה שעל הלב. אני כאן להקשיב, לתמוך ולעזור - בלי שיפוטיות.",
    safetyNote: "במצב חירום ?  ",
    safetyNoteText: "אם את במצוקה או מחשבות על פגיעה עצמית, פני לער\"ן - קו הסיוע הארצי: ",
  },
  en: {
    heroSubtitle: "A safe place to talk about everything on your mind. I'm here to listen, support, and help - without judgment.",
    safetyNote: "In an emergency? ",
    safetyNoteText: "If you're in distress or thinking about self-harm, reach out to the national crisis hotline: ",
  }
};

const BigSisHome = () => {
  const { language } = useContext(BigSisContext);
  const lang = language === LANG.EN ? 'en' : 'he';
  const t = TRANSLATIONS[lang];

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
