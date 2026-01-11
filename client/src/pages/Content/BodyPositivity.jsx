import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BigSisContext } from '../../context/BigSisContext';
import { LANG } from '../../constants/languages';

const content = {
  [LANG.HE]: {
    title: 'דימוי גוף',
    emoji: '💗',
    subtitle: 'לזוז כי טוב לך, לא כדי להשתנות',
    paragraphs: [
      'אולי יצא לך לחשוב שכושר נועד "לתקן" את הגוף או לגרום לו להיראות אחרת. אבל האמת היא שתנועה היא קודם כול כלי לחיבור לעצמך. כושר לא אמור להכאיב, להלחיץ או לגרום לך לשנוא את מה שאת רואה במראה – הוא אמור לחזק אותך, פיזית ורגשית.',
      'כל גוף אוהב תנועה אחרת: ריקוד, הליכה, יוגה, שחייה או סתם מתיחות בחדר. אין דרך אחת "נכונה" לזוז, ואין גוף אחד שצריך להיראות כמו באינסטגרם. דימוי גוף חיובי הוא היכולת להעריך את הגוף שלך על מה שהוא מאפשר לך לעשות – לנשום, לצחוק, להתחבק, לרקוד – לא רק על איך שהוא נראה.',
      'כשאת בוחרת לזוז מתוך הקשבה ולא מתוך השוואה, את לומדת לכבד את הגוף שלך גם בימים שהוא חזק וגם בימים שהוא עייף. זה שיעור שילך איתך הרבה מעבר לספורט – זה שיעור באהבה עצמית.'
    ],
    keyPoints: {
      title: 'תנועה לשמחה, לא לשינוי',
      points: [
        { emoji: '💃', text: 'כל גוף אוהב תנועה אחרת' },
        { emoji: '✨', text: 'אין דרך "נכונה" אחת לזוז' },
        { emoji: '🎯', text: 'הגוף שלך הוא לא פרויקט לתיקון' },
        { emoji: '💪', text: 'תנועה מחזקת גוף ונפש' }
      ]
    },
    appreciationCard: {
      title: 'מה הגוף שלך מאפשר לך?',
      subtitle: 'דימוי גוף חיובי הוא להעריך מה הגוף שלך עושה, לא רק איך הוא נראה',
      activities: [
        '🌬️ לנשום',
        '😊 לצחוק',
        '🤗 להתחבק',
        '💃 לרקוד',
        '🎨 ליצור',
        '❤️ לאהוב'
      ]
    },
    resources: [
      {
        icon: '🌸',
        title: 'מעיין כרת',
        description: 'תכנים מעצימים על דימוי גוף ואהבה עצמית',
        link: 'https://www.maayankeret.co.il/',
        linkText: 'לאתר מעיין כרת'
      },
      {
        icon: '💝',
        title: 'איך להרגיש טוב עם הגוף שלי',
        description: 'מדריך מעשי לבניית קשר חיובי עם הגוף שלך',
        link:'https://www.daat-haguf.co.il/%D7%A9%D7%99%D7%A4%D7%95%D7%A8-%D7%93%D7%99%D7%9E%D7%95%D7%99-%D7%94%D7%92%D7%95%D7%A3/',
        linkText: 'קראי עוד'
      }
    ],
    chatButton: 'לדבר עם Big Sis',
    homeButton: 'חזרה לבית'
  },
  [LANG.EN]: {
    title: 'Body Image',
    emoji: '💗',
    subtitle: 'Move because it feels good, not to change yourself',
    paragraphs: [
      'You might have thought that fitness is meant to "fix" your body or make it look different. But the truth is that movement is first and foremost a tool for connecting with yourself. Fitness shouldn\'t hurt, stress you out, or make you hate what you see in the mirror – it should strengthen you, physically and emotionally.',
      'Every body loves different movement: dance, walking, yoga, swimming, or just stretching in your room. There\'s no one "right" way to move, and no one body that should look like Instagram. Positive body image is the ability to appreciate your body for what it allows you to do – breathe, laugh, hug, dance – not just how it looks.',
      'When you choose to move from listening rather than comparison, you learn to respect your body both on days when it\'s strong and days when it\'s tired. This is a lesson that will go with you far beyond sports – it\'s a lesson in self-love.'
    ],
    keyPoints: {
      title: 'Movement for Joy, Not Change',
      points: [
        { emoji: '💃', text: 'Every body loves different movement' },
        { emoji: '✨', text: 'No single "right" way to move' },
        { emoji: '🎯', text: 'Your body isn\'t a project to fix' },
        { emoji: '💪', text: 'Movement strengthens body and mind' }
      ]
    },
    appreciationCard: {
      title: 'What does your body allow you to do?',
      subtitle: 'Positive body image is appreciating what your body does, not just how it looks',
      activities: [
        '🌬️ Breathe',
        '😊 Laugh',
        '🤗 Hug',
        '💃 Dance',
        '🎨 Create',
        '❤️ Love'
      ]
    },
    resources: [
      {
        icon: '🌸',
        title: 'Maayan Keret',
        description: 'Empowering content about body image and self-love',
        link: 'https://www.maayankeret.co.il/',
        linkText: 'Visit Maayan Keret'
      },
      {
        icon: '💝',
        title: 'How to Feel Good with My Body',
        description: 'A practical guide to building a positive relationship with your body',
        linkText: 'Read more'
      }
    ],
    chatButton: 'Talk with Big Sis',
    homeButton: 'Back to Home'
  }
};

export default function BodyPositivity() {
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
          <p style={styles.subtitle}>{copy.subtitle}</p>
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

        {/* Appreciation card */}
        <div style={styles.appreciationCard}>
          <h3 style={styles.appreciationTitle}>{copy.appreciationCard.title}</h3>
          <p style={styles.appreciationSubtitle}>{copy.appreciationCard.subtitle}</p>
          <div style={styles.activitiesGrid}>
            {copy.appreciationCard.activities.map((activity, index) => (
              <div key={index} style={styles.activityItem}>
                {activity}
              </div>
            ))}
          </div>
        </div>

        {/* Resources section */}
        <div style={styles.resourcesSection}>
          <h3 style={styles.resourcesSectionTitle}>
            {lang === LANG.HE ? 'תכנים נוספים' : 'Additional Resources'}
          </h3>
          <div style={styles.resourcesGrid}>
            {copy.resources.map((resource, index) => (
              <div key={index} style={styles.resourceCard}>
                <div style={styles.resourceIcon}>{resource.icon}</div>
                <div style={styles.resourceContent}>
                  <h4 style={styles.resourceTitle}>{resource.title}</h4>
                  <p style={styles.resourceDescription}>{resource.description}</p>
                  {resource.link ? (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.resourceLink}
                    >
                      {resource.linkText}
                      <span style={styles.externalIcon}>↗</span>
                    </a>
                  ) : (
                    <span style={styles.resourceLinkDisabled}>{resource.linkText}</span>
                  )}
                </div>
              </div>
            ))}
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
    background: 'linear-gradient(180deg, #fef2f2 0%, #fff 100%)',
    overflow: 'hidden',
  },
  bgOrb1: {
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(251, 113, 133, 0.15), transparent 70%)',
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
    background: 'radial-gradient(circle, rgba(244, 114, 182, 0.1), transparent 70%)',
    pointerEvents: 'none',
    animation: 'float 25s ease-in-out infinite reverse',
  },
  bgOrb3: {
    position: 'absolute',
    top: '50%',
    right: '15%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(252, 165, 165, 0.08), transparent 70%)',
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
    background: 'linear-gradient(135deg, #fb7185, #f472b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '12px',
  },
  subtitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#be123c',
    fontStyle: 'italic',
  },
  articleContent: {
    background: 'white',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 10px 40px rgba(251, 113, 133, 0.08)',
    marginBottom: '32px',
    border: '1px solid rgba(251, 113, 133, 0.1)',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#374151',
    marginBottom: '24px',
    textAlign: 'justify',
  },
  keyPointsCard: {
    background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.05), rgba(244, 114, 182, 0.05))',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '32px',
    border: '2px solid rgba(251, 113, 133, 0.15)',
  },
  keyPointsTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#be123c',
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
    boxShadow: '0 4px 12px rgba(251, 113, 133, 0.08)',
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
  appreciationCard: {
    background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.08), rgba(251, 113, 133, 0.08))',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '32px',
    border: '2px solid rgba(251, 113, 133, 0.2)',
  },
  appreciationTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#be123c',
    marginBottom: '12px',
    textAlign: 'center',
  },
  appreciationSubtitle: {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '24px',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  activitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '12px',
  },
  activityItem: {
    padding: '14px 18px',
    background: 'white',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#4b5563',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(251, 113, 133, 0.08)',
  },
  resourcesSection: {
    marginBottom: '40px',
  },
  resourcesSectionTitle: {
    fontSize: '26px',
    fontWeight: '700',
    color: '#be123c',
    marginBottom: '24px',
    textAlign: 'center',
  },
  resourcesGrid: {
    display: 'grid',
    gap: '20px',
  },
  resourceCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    background: 'white',
    borderRadius: '20px',
    padding: '28px',
    border: '2px solid rgba(251, 113, 133, 0.15)',
    boxShadow: '0 4px 16px rgba(251, 113, 133, 0.08)',
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
    color: '#be123c',
    marginBottom: '8px',
  },
  resourceDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#6b7280',
    marginBottom: '12px',
  },
  resourceLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fb7185',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
  resourceLinkDisabled: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#9ca3af',
    fontStyle: 'italic',
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
    background: 'linear-gradient(135deg, #fb7185, #f472b6)',
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    textDecoration: 'none',
    boxShadow: '0 8px 25px rgba(251, 113, 133, 0.3)',
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
    border: '2px solid rgba(251, 113, 133, 0.2)',
    transition: 'all 0.3s ease',
  },
};
