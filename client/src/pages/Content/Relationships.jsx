import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BigSisContext } from '../../context/BigSisContext';
import { LANG } from '../../constants/languages';

const content = {
  [LANG.HE]: {
    title: 'מערכות יחסים',
    emoji: '🤝',
    paragraphs: [
      'למה זה כל כך חשוב לך עכשיו? חברות טובה יכולה להרגיש כמו הדבר הכי טוב בעולם, אבל לפעמים קשרים יכולים גם להתיש או להכאיב. בגיל שלך, את מתחילה לבנות את "המעגל הקרוב" שלך. ללמוד על מערכות יחסים בריאות זה להבין שחברה טובה באמת היא כזו שמעצימה אותך, שמקשיבה לך ושמכבדת את המרחב שלך.',
      'גבולות הם לא "חומות", הם הדרך שלך להגיד לעולם איך נכון להתייחס אלייך. זה בסדר להגיד "לא מתאים לי", זה בסדר לרצות קצת זמן לעצמך, וזה בסדר להתרחק מקשר שעושה לך רע. כשאת מפתחת מודעות לזה עכשיו, את בונה לעצמך קשרים בריאים שילוו אותך שנים קדימה - קשרים שמבוססים על כבוד, צחוק ובטחון.',
      'מראה מול מראה: מי אני בלי האישור שלהן? לפעמים אנחנו מוצאות את עצמנו עושות דברים רק כדי "להתאים" או כדי לקבל לייק/אישור מהסביבה. תשאלי את עצמך רגע: איך אני מרגישה אחרי בילוי עם החברות האלו? האם אני מרגישה מלאה באנרגיה, או מרוקנת ועייפה מלהתאמץ להיות מישהי שאני לא?',
      'חברות בריאה היא כזו שלא דורשת ממך לוותר על עצמך כדי להיות חלק מהקבוצה. אם את מוצאת את עצמך מחפשת אישור חיצוני כל הזמן, זה סימן לעצור ולבדוק איפה הקול האישי שלך הלך לאיבוד. את לא צריכה "תעודת כשרות" מאף אחת כדי להיות שווה. מי שבאמת אוהבת אותך, תאהב אותך גם כשאת לא מסכימה איתה וגם כשאת מציבה גבול ברור - אל תפחדי להיות את!'
    ],
    reflectionCard: {
      title: 'שאלות להרהור',
      subtitle: 'קחי רגע לחשוב על הקשרים שלך',
      questions: [
        'איך אני מרגישה אחרי שאני מבלה עם החברות שלי?',
        'האם אני יכולה להיות עצמי באמת איתן?',
        'האם הקשרים האלה מעצימים אותי או מרוקנים אותי?',
        'מתי בפעם האחרונה הצבתי גבול ברור?'
      ]
    },
    keyPoints: {
      title: 'סימנים לקשר בריא',
      points: [
        { emoji: '✨', text: 'מרגישה חופשית להיות עצמך' },
        { emoji: '🎯', text: 'גבולות שלך מכובדים' },
        { emoji: '💬', text: 'תקשורת פתוחה והקשבה אמיתית' },
        { emoji: '🌟', text: 'מרגישה מלאת אנרגיה, לא מרוקנת' }
      ]
    },
    chatButton: 'לדבר עם Big Sis',
    homeButton: 'חזרה לבית'
  },
  [LANG.EN]: {
    title: 'Relationships',
    emoji: '🤝',
    paragraphs: [
      'Why is this so important to you now? Good friendship can feel like the best thing in the world, but sometimes relationships can also be exhausting or hurtful. At your age, you\'re starting to build your "inner circle." Learning about healthy relationships means understanding that a truly good friend is one who empowers you, listens to you, and respects your space.',
      'Boundaries aren\'t "walls" - they\'re your way of telling the world how to treat you properly. It\'s okay to say "this doesn\'t work for me," it\'s okay to want some time for yourself, and it\'s okay to distance yourself from a relationship that\'s hurting you. When you develop this awareness now, you\'re building healthy relationships that will be with you for years to come - relationships based on respect, laughter, and security.',
      'Mirror vs mirror: Who am I without their approval? Sometimes we find ourselves doing things just to "fit in" or to get likes/approval from our surroundings. Ask yourself for a moment: How do I feel after hanging out with these friends? Do I feel full of energy, or drained and tired from trying to be someone I\'m not?',
      'Healthy friendship is one that doesn\'t require you to give up yourself to be part of the group. If you find yourself constantly seeking external approval, that\'s a sign to stop and check where your personal voice got lost. You don\'t need a "certificate of approval" from anyone to be worthy. Someone who truly loves you will love you even when you don\'t agree with them and when you set a clear boundary - don\'t be afraid to be yourself!'
    ],
    reflectionCard: {
      title: 'Questions for Reflection',
      subtitle: 'Take a moment to think about your relationships',
      questions: [
        'How do I feel after spending time with my friends?',
        'Can I truly be myself with them?',
        'Do these relationships empower or drain me?',
        'When was the last time I set a clear boundary?'
      ]
    },
    keyPoints: {
      title: 'Signs of a Healthy Relationship',
      points: [
        { emoji: '✨', text: 'Feel free to be yourself' },
        { emoji: '🎯', text: 'Your boundaries are respected' },
        { emoji: '💬', text: 'Open communication and real listening' },
        { emoji: '🌟', text: 'Feel energized, not drained' }
      ]
    },
    chatButton: 'Talk with Big Sis',
    homeButton: 'Back to Home'
  }
};

export default function Relationships() {
  const { language } = useContext(BigSisContext);
  const lang = language === LANG.EN ? LANG.EN : LANG.HE;
  const copy = content[lang];

  return (
    <div style={styles.container}>
      {/* Background decorations */}
      <div style={styles.bgOrb1}></div>
      <div style={styles.bgOrb2}></div>
      <div style={styles.bgOrb3}></div>

      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.emoji}>{copy.emoji}</span>
          <h1 style={styles.title}>{copy.title}</h1>
        </div>

        {/* Main content */}
        <div style={styles.articleContent}>
          {copy.paragraphs.map((paragraph, index) => (
            <p key={index} style={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key points card */}
        <div style={styles.keyPointsCard}>
          <h3 style={styles.keyPointsTitle}>{copy.keyPoints.title}</h3>
          <div style={styles.keyPointsGrid}>
            {copy.keyPoints.points.map((point, index) => (
              <div key={index} style={styles.keyPoint}>
                <span style={styles.keyPointEmoji}>{point.emoji}</span>
                <span style={styles.keyPointText}>{point.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection card */}
        <div style={styles.reflectionCard}>
          <div style={styles.reflectionIcon}>🤔</div>
          <div style={styles.reflectionContent}>
            <h3 style={styles.reflectionTitle}>{copy.reflectionCard.title}</h3>
            <p style={styles.reflectionSubtitle}>{copy.reflectionCard.subtitle}</p>
            <ul style={styles.questionsList}>
              {copy.reflectionCard.questions.map((question, index) => (
                <li key={index} style={styles.question}>
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action buttons */}
        <div style={styles.actions}>
          <Link to="/chat" style={styles.primaryBtn}>
            <span>💬</span>
            <span>{copy.chatButton}</span>
          </Link>
          <Link to="/" style={styles.secondaryBtn}>
            <span>{copy.homeButton}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #f0fdfa 0%, #fff 100%)',
    overflow: 'hidden',
  },
  bgOrb1: {
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12), transparent 70%)',
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
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%)',
    pointerEvents: 'none',
    animation: 'float 25s ease-in-out infinite reverse',
  },
  bgOrb3: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06), transparent 70%)',
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
    background: 'linear-gradient(135deg, #14b8a6, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '8px',
  },
  articleContent: {
    background: 'white',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 10px 40px rgba(20, 184, 166, 0.08)',
    marginBottom: '32px',
    border: '1px solid rgba(20, 184, 166, 0.1)',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#374151',
    marginBottom: '24px',
    textAlign: 'justify',
  },
  keyPointsCard: {
    background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05), rgba(59, 130, 246, 0.05))',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '32px',
    border: '2px solid rgba(20, 184, 166, 0.15)',
  },
  keyPointsTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f766e',
    marginBottom: '24px',
    textAlign: 'center',
  },
  keyPointsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
  },
  keyPoint: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(20, 184, 166, 0.08)',
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
  reflectionCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(20, 184, 166, 0.05))',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '40px',
    border: '2px solid rgba(59, 130, 246, 0.15)',
  },
  reflectionIcon: {
    fontSize: '48px',
    flexShrink: 0,
  },
  reflectionContent: {
    flex: 1,
  },
  reflectionTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1e40af',
    marginBottom: '8px',
  },
  reflectionSubtitle: {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '20px',
    fontStyle: 'italic',
  },
  questionsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  question: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#374151',
    marginBottom: '12px',
    paddingLeft: '24px',
    position: 'relative',
  },
  actions: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 32px',
    borderRadius: '50px',
    background: 'linear-gradient(135deg, #14b8a6, #3b82f6)',
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    textDecoration: 'none',
    boxShadow: '0 8px 25px rgba(20, 184, 166, 0.3)',
    transition: 'all 0.3s ease',
    border: 'none',
  },
  secondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 32px',
    borderRadius: '50px',
    background: 'white',
    color: '#6b7280',
    fontSize: '16px',
    fontWeight: '700',
    textDecoration: 'none',
    border: '2px solid rgba(20, 184, 166, 0.2)',
    transition: 'all 0.3s ease',
  },
};
