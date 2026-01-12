// export default function About() {
//   return <div>About page (coming soon)</div>;
// }

import LanaImg from '../../assets/Lana.png';
import CloudineImg from '../../assets/Cloudine.png';
import EinBarImg from '../../assets/Ein-Bar.png';
    //missionText: 'BigSis נוצרה במהלך האקתון במטרה אחת וברורה: לתת לבנות נוער מקום בטוח, תומך וללא שיפוטיות. אנחנו מאמינות שטכנולוגיה יכולה להעצים, להגן ולהנחות - כשהיא בנויה עם הבנה בלב.';
import { useContext } from 'react';
import { BigSisContext } from '../../context/BigSisContext';
// export default function About() {
//   return <div>About page (coming soon)</div>;
// }

//import { useContext } from 'react';
// import LanaImg from '../../assets/Lana.png';
// import CloudineImg from '../../assets/Cloudine.png';
// import EinBarImg from '../../assets/Ein-Bar.png';
import ShakedImg from '../../assets/Shaked.png';
// import { BigSisContext } from '../../context/BigSisContext';
import { LANG } from '../../constants/languages';

const TRANSLATIONS = {
  he: {
    title: 'אודות BigSis',
    subtitle: 'מקום בטוח שנבנה בהבנה ואחריות',
    missionTitle: 'המשימה שלנו',
    missionText: 'BigSis נוצרה במהלך האקתון במטרה אחת וברורה: לתת לבנות נוער מקום בטוח, תומך וללא שיפוטיות. אנחנו מאמינות שטכנולוגיה יכולה להעצים, להגן ולהנחות - כשהיא בנויה עם הבנה בלב.',
    teamTitle: 'הצוות שלנו',
    safetyTitle: 'בטיחות ואתיקה',
    safetyPoints: [
      { emoji: '🧠', text: 'תומך והבנה - לא עצות רפואיות או משפטיות.' },
      { emoji: '📚', text: 'התשובות מבוססות על ידע מובטח ומאושר בלבד.' },
      { emoji: '🧭', text: 'אם משהו חורג מהתחום שלנו, אנחנו מעודדות לפנות לעזרה מקצועית.' },
      { emoji: '🔒', text: 'עיצוב ראשון בפרטיות עם אימות בטוח וטיפול בנתונים.' },
    ],
    builtWithCareTitle: 'נבנתה באהבה ובאחריות',
    builtWithCareText: 'BigSis תוכננה להרגיש חמה ותומכת תוך שמירה על אחריות. אם מצב דורש יותר ממה שאנחנו יכולות לתת, אנחנו מעודדות פנייה לאנשים מהימנים ומשאבים מקצועיים.',
  },
  en: {
    title: 'About BigSis',
    subtitle: 'A supportive space built with empathy and responsibility',
    missionTitle: 'Our Mission',
    missionText: "BigSis was created during a hackathon with one clear goal: to provide teenage girls with a safe, supportive, and non-judgmental space. We believe technology can empower, protect, and guide — when it's built with empathy at its core.",
    teamTitle: 'Our Team',
    safetyTitle: 'Safety & Ethics',
    safetyPoints: [
      { emoji: '🧠', text: 'Supportive & empathetic — not medical or legal advice.' },
      { emoji: '📚', text: 'Responses rely on trusted, pre-approved knowledge only.' },
      { emoji: '🧭', text: 'If something is out of scope, we encourage seeking trusted help.' },
      { emoji: '🔒', text: 'Privacy-first design with secure authentication & data handling.' },
    ],
    builtWithCareTitle: 'Built with care',
    builtWithCareText: 'BigSis is designed to feel warm and supportive while staying responsible. If a situation requires more than we can provide, we encourage reaching out to trusted people and professional resources.',
  },
};

export default function About() {
  const { language } = useContext(BigSisContext);
  const lang = language === LANG.EN ? 'en' : 'he';
  const t = TRANSLATIONS[lang];

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #fdf4ff 0%, #fff 100%)',
      overflow: 'hidden',
    },
    bgOrb1: {
      position: 'absolute',
      top: '-100px',
      right: '-100px',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12), transparent 70%)',
      pointerEvents: 'none',
      animation: 'float 20s ease-in-out infinite',
    },
    bgOrb2: {
      position: 'absolute',
      bottom: '-150px',
      left: '-150px',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08), transparent 70%)',
      pointerEvents: 'none',
      animation: 'float 25s ease-in-out infinite reverse',
    },
    bgOrb3: {
      position: 'absolute',
      top: '50%',
      right: '10%',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(244, 114, 182, 0.06), transparent 70%)',
      pointerEvents: 'none',
      animation: 'float 30s ease-in-out infinite',
    },
    content: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '60px 24px 80px',
      zIndex: 1,
    },
    header: {
      textAlign: 'center',
      marginBottom: '48px',
    },
    emoji: {
      fontSize: '64px',
      display: 'block',
      marginBottom: '16px',
      animation: 'float 3s ease-in-out infinite',
    },
    title: {
      fontSize: '42px',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #ec4899, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '16px',
      color: '#6b7280',
      fontWeight: 600,
    },
    articleContent: {
      background: 'white',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 10px 40px rgba(236, 72, 153, 0.08)',
      marginBottom: '32px',
      border: '1px solid rgba(236, 72, 153, 0.1)',
    },
    sectionTitle: {
      fontSize: '22px',
      fontWeight: '800',
      color: '#111827',
      marginBottom: '14px',
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: '1.8',
      color: '#374151',
      marginBottom: '24px',
      textAlign: 'justify',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      marginTop: '12px',
    },
    teamCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      padding: '0',
      borderRadius: '0',
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
    avatar: {
      width: '100%',
      height: '220px',
      borderRadius: '0',
      objectFit: 'contain',
      border: 'none',
      background: 'transparent',
      padding: '0',
    },
    name: {
      fontSize: '16px',
      fontWeight: '800',
      color: '#374151',
      lineHeight: 1.2,
      textAlign: 'center',
    },
    keyPointsCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '32px',
      border: '1px solid #e5e7eb',
    },
    keyPointsTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '24px',
      textAlign: 'center',
    },
    keyPointsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
    },
    keyPoint: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px',
      background: '#f9fafb',
      borderRadius: '12px',
      boxShadow: 'none',
      border: '1px solid #f0f0f0',
    },
    keyPointEmoji: {
      fontSize: '28px',
      flexShrink: 0,
    },
    keyPointText: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#4b5563',
      lineHeight: '1.4',
    },
    safeSpaceCard: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(236, 72, 153, 0.08))',
      borderRadius: '20px',
      padding: '28px',
      marginBottom: '40px',
      border: '2px solid rgba(168, 85, 247, 0.2)',
    },
    safeSpaceIcon: {
      fontSize: '40px',
      flexShrink: 0,
    },
    safeSpaceContent: {
      flex: 1,
    },
    safeSpaceTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#6b21a8',
      marginBottom: '8px',
    },
    safeSpaceText: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#4b5563',
    },
  };

  const team = [
    { name: 'לנא אבו רומי', nameEn: 'Lana Abu Romi', avatar: LanaImg },
    { name: 'קלודין מסעוד', nameEn: 'Cloudine Massoud', avatar: CloudineImg },
    { name: 'עין-בר סוריא', nameEn: 'Ein-Bar Surie', avatar: EinBarImg },
    { name: 'שקד נוטמן', nameEn: 'Shaked Nuttman', avatar: ShakedImg },
  ];

  const safetyPoints = t.safetyPoints;

  return (
    <div style={styles.container}>
      <div style={styles.bgOrb1} />
      <div style={styles.bgOrb2} />
      <div style={styles.bgOrb3} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(18px); }
        }
      `}</style>

      <div style={styles.content}>
        <div style={styles.header}>
          <span style={styles.emoji}>💗</span>
          <h1 style={styles.title}>{t.title}</h1>
          <div style={styles.subtitle}>{t.subtitle}</div>
        </div>

        <div style={styles.articleContent}>
          <h2 style={styles.sectionTitle}>{t.missionTitle}</h2>
          <p style={styles.paragraph}>{t.missionText}</p>

          <h2 style={styles.sectionTitle}>{t.teamTitle}</h2>
          <div style={styles.teamGrid}>
            {team.map((m) => (
              <div key={m.nameEn} style={styles.teamCard}>
                <img
                  src={m.avatar}
                  alt={m.nameEn}
                  style={styles.avatar}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div style={styles.name}>{lang === 'he' ? m.name : m.nameEn}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.keyPointsCard}>
          <div style={styles.keyPointsTitle}>{t.safetyTitle}</div>
          <div style={styles.keyPointsGrid}>
            {safetyPoints.map((p) => (
              <div key={p.text} style={styles.keyPoint}>
                <div style={styles.keyPointEmoji}>{p.emoji}</div>
                <div style={styles.keyPointText}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.safeSpaceCard}>
          <div style={styles.safeSpaceIcon}>🛡️</div>
          <div style={styles.safeSpaceContent}>
            <div style={styles.safeSpaceTitle}>{t.builtWithCareTitle}</div>
            <div style={styles.safeSpaceText}>{t.builtWithCareText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}