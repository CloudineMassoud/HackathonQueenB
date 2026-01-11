import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BigSisContext } from '../../context/BigSisContext';
import { LANG } from '../../constants/languages';

const content = {
  [LANG.HE]: {
    title: 'תזונה ואיזון',
    emoji: '🥗',
    paragraphs: [
      'יכול להיות שאת שומעת סביבך בלי סוף דיבורים על אוכל: מה "משמין", מה "אסור", איך צריך להיראות, ומה כדאי להוריד מהצלחת. זה מבלבל, ולפעמים גם מעייף. תזונה בריאה היא לא רשימת חוקים נוקשים – היא דרך להקשיב לגוף שלך ולתת לו את מה שהוא צריך כדי לגדול, להתחזק ולהרגיש טוב.',
      'לאכול בריא זה לא אומר לוותר על הנאה, וזה בטח לא אומר להעניש את עצמך. זה ללמוד לזהות רעב ושובע, להבין שאוכל הוא גם אנרגיה וגם נחמה, ושאין דבר כזה "אוכל רע" – יש הקשר, איזון והקשבה. הגוף שלך משתנה עכשיו, וזה טבעי שהוא צריך יותר אנרגיה, ויטמינים וזמן הסתגלות.',
      'כשאת לומדת להזין את עצמך מתוך כבוד ולא מתוך פחד, את בונה בסיס של ביטחון עצמי. את מבינה שהערך שלך לא נמדד במספר על המשקל או במה שאכלת היום. תזונה בריאה היא מעשה של דאגה עצמית – לא של שליטה.'
    ],
    resourceTitle: 'רוצה לקרוא עוד?',
    resourceLink: 'מדריך תזונה לנערות',
    chatButton: 'לדבר עם Big Sis',
    homeButton: 'חזרה לבית'
  },
  [LANG.EN]: {
    title: 'Nutrition & Balance',
    emoji: '🥗',
    paragraphs: [
      'You might be hearing endless talk about food: what\'s "fattening," what\'s "forbidden," how you should look, and what you should remove from your plate. It\'s confusing, and sometimes exhausting. Healthy nutrition isn\'t a list of rigid rules – it\'s a way to listen to your body and give it what it needs to grow, strengthen, and feel good.',
      'Eating healthy doesn\'t mean giving up pleasure, and it certainly doesn\'t mean punishing yourself. It\'s about learning to recognize hunger and fullness, understanding that food is both energy and comfort, and that there\'s no such thing as "bad food" – there\'s context, balance, and listening. Your body is changing now, and it\'s natural that it needs more energy, vitamins, and time to adjust.',
      'When you learn to nourish yourself from respect rather than fear, you build a foundation of self-confidence. You understand that your worth isn\'t measured by a number on the scale or what you ate today. Healthy nutrition is an act of self-care – not control.'
    ],
    resourceTitle: 'Want to read more?',
    resourceLink: 'Teen Nutrition Guide',
    chatButton: 'Talk with Big Sis',
    homeButton: 'Back to Home'
  }
};

export default function Nutrition() {
  const { language } = useContext(BigSisContext);
  const lang = language === LANG.EN ? LANG.EN : LANG.HE;
  const copy = content[lang];

  return (
    <div style={styles.container}>
      {/* Background decorations */}
      <div style={styles.bgOrb1}></div>
      <div style={styles.bgOrb2}></div>

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

        {/* Resource card */}
        <div style={styles.resourceCard}>
          <div style={styles.resourceIcon}>📖</div>
          <div style={styles.resourceContent}>
            <h3 style={styles.resourceTitle}>{copy.resourceTitle}</h3>
            <a
              href="https://www.kotex.co.il/advice/staying-healthy/teen-nutrition-guide"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.resourceLink}
            >
              {copy.resourceLink}
              <span style={styles.externalIcon}>↗</span>
            </a>
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
    background: 'linear-gradient(180deg, #faf5ff 0%, #fff 100%)',
    overflow: 'hidden',
  },
  bgOrb1: {
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent 70%)',
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
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1), transparent 70%)',
    pointerEvents: 'none',
    animation: 'float 25s ease-in-out infinite reverse',
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
    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '8px',
  },
  articleContent: {
    background: 'white',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 10px 40px rgba(168, 85, 247, 0.08)',
    marginBottom: '32px',
    border: '1px solid rgba(168, 85, 247, 0.1)',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#374151',
    marginBottom: '24px',
    textAlign: 'justify',
  },
  resourceCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))',
    borderRadius: '20px',
    padding: '28px',
    marginBottom: '40px',
    border: '2px solid rgba(168, 85, 247, 0.15)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  resourceIcon: {
    fontSize: '40px',
    flexShrink: 0,
  },
  resourceContent: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#6b21a8',
    marginBottom: '8px',
  },
  resourceLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#a855f7',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
  externalIcon: {
    fontSize: '18px',
    transition: 'transform 0.2s ease',
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
    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    textDecoration: 'none',
    boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)',
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
    border: '2px solid rgba(168, 85, 247, 0.2)',
    transition: 'all 0.3s ease',
  },
};
