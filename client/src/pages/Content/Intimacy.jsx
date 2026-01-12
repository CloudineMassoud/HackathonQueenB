import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BigSisContext } from '../../context/BigSisContext';
import { LANG } from '../../constants/languages';

const content = {
  [LANG.HE]: {
    title: 'אינטימיות',
    emoji: '🤍',
    paragraphs: [
      'את בטח מרגישה שהכל משתנה - הגוף, המחשבות, והסקרנות שמתחילה להתעורר. זה לפעמים קצת מבלבל, וזה הכי טבעי בעולם! ללמוד על מיניות בריאה זה לא רק "שיעור ביולוגיה", זה ללמוד על הכוח שיש לך בידיים. זה להבין מה נעים לך, מה הגבולות שלך, ושמותר ואפילו חובה לשאול את כל השאלות, גם אלו שנראות לך "מביכות".',
      'כשאת יודעת מה קורה אצלך, את הופכת להרבה יותר בטוחה בעצמך מול העולם. את לומדת שאף אחד לא יכול להחליט עלייך או על הגוף שלך, ושאת לא צריכה להשוות את עצמך לאף סרטון או תמונה ברשת. הידע הזה הוא המגן שלך - הוא שומר עלייך שמחה, בטוחה ושלמה עם מי שאת.',
      'הקשיבי לסימנים: המסע לגילוי הגוף זה הזמן שלך להתחיל להכיר את עצמך באמת. חקירה של הגוף היא תהליך איטי ועדין שקורה קודם כל בינך לבין עצמך. זה לא מרוץ ואין לאן למהר. המפתח הכי חשוב הוא להקשיב ל"רמזורים" של הגוף שלך: האם המגע הזה נעים לי? האם אני מרגישה בנוח או שמשהו בי מתכווץ?',
      'תלמדי לסמוך על תחושות הבטן שלך. אם את מנסה משהו וזה מרגיש מוזר או לא נעים - זה סימן לעצור. הגוף שלך מדבר אלייך כל הזמן, והתפקיד שלך הוא להיות החברה הכי טובה שלו ולכבד את הקצב שלו. כשאת לומדת מה גורם לך להרגיש טוב עם עצמך, את בונה בסיס איתן לביטחון עצמי שישפיע על כל היבט בחיים שלך.'
    ],
    keyPoints: {
      title: 'נקודות חשובות לזכור',
      points: [
        { emoji: '💪', text: 'הגוף שלך - הבחירות שלך' },
        { emoji: '🛡️', text: 'גבולות הם זכות, לא רשות' },
        { emoji: '💭', text: 'אין שאלות מביכות - רק סקרנות בריאה' },
        { emoji: '🌱', text: 'התהליך שלך בקצב שלך' }
      ]
    },
    chatButton: 'לדבר עם Big Sis',
    homeButton: 'חזרה לבית'
  },
  [LANG.EN]: {
    title: 'Intimacy',
    emoji: '🤍',
    paragraphs: [
      'You probably feel like everything is changing - your body, your thoughts, and the curiosity that\'s starting to emerge. It\'s sometimes a bit confusing, and that\'s the most natural thing in the world! Learning about healthy sexuality isn\'t just a "biology lesson" - it\'s learning about the power you hold in your hands. It\'s understanding what feels good to you, what your boundaries are, and that you\'re allowed and even expected to ask all the questions, even those that seem "embarrassing."',
      'When you know what\'s happening with you, you become much more confident facing the world. You learn that no one can decide for you or about your body, and that you don\'t need to compare yourself to any video or image online. This knowledge is your shield - it keeps you happy, safe, and whole with who you are.',
      'Listen to the signs: The journey of discovering your body is your time to truly start knowing yourself. Exploring your body is a slow and gentle process that happens first and foremost between you and yourself. It\'s not a race and there\'s no rush. The most important key is to listen to your body\'s "traffic lights": Is this touch pleasant for me? Do I feel comfortable or is something in me tensing up?',
      'Learn to trust your gut feelings. If you\'re trying something and it feels strange or uncomfortable - that\'s a sign to stop. Your body is constantly talking to you, and your job is to be its best friend and respect its pace. When you learn what makes you feel good about yourself, you build a solid foundation for self-confidence that will affect every aspect of your life.'
    ],
    keyPoints: {
      title: 'Important Points to Remember',
      points: [
        { emoji: '💪', text: 'Your body - your choices' },
        { emoji: '🛡️', text: 'Boundaries are a right, not permission' },
        { emoji: '💭', text: 'No embarrassing questions - only healthy curiosity' },
        { emoji: '🌱', text: 'Your process at your pace' }
      ]
    },
    chatButton: 'Talk with Big Sis',
    homeButton: 'Back to Home'
  }
};

export default function Intimacy() {
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

        {/* Safe space reminder */}
        <div style={styles.safeSpaceCard}>
          <div style={styles.safeSpaceIcon}>💜</div>
          <div style={styles.safeSpaceContent}>
            <h3 style={styles.safeSpaceTitle}>
              {lang === LANG.HE ? 'זה בטוח לדבר' : 'It\'s Safe to Talk'}
            </h3>
            <p style={styles.safeSpaceText}>
              {lang === LANG.HE
                ? 'יש לך שאלות? רוצה לדבר על משהו שמעסיק אותך? Big Sis כאן בשבילך - בלי שיפוטיות, בלי לחץ.'
                : 'Have questions? Want to talk about something on your mind? Big Sis is here for you - no judgment, no pressure.'}
            </p>
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
  articleContent: {
    background: 'white',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 10px 40px rgba(236, 72, 153, 0.08)',
    marginBottom: '32px',
    border: '1px solid rgba(236, 72, 153, 0.1)',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#374151',
    marginBottom: '24px',
    textAlign: 'justify',
  },
  keyPointsCard: {
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(168, 85, 247, 0.05))',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '32px',
    border: '2px solid rgba(236, 72, 153, 0.15)',
  },
  keyPointsTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#9f1239',
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
    boxShadow: '0 4px 12px rgba(236, 72, 153, 0.08)',
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
    background: 'linear-gradient(135deg, #ec4899, #a855f7)',
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    textDecoration: 'none',
    boxShadow: '0 8px 25px rgba(236, 72, 153, 0.3)',
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
    border: '2px solid rgba(236, 72, 153, 0.2)',
    transition: 'all 0.3s ease',
  },
};
