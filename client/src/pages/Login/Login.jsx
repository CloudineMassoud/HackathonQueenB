import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { supabase } from "../../services/supabaseClient";


const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  // -------------------- SIGN UP --------------------
  if (isSignUp) {
    if (
      !formData.username ||
      !formData.email ||
      !formData.age ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("נא למלא את כל השדות");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("הסיסמאות אינן תואמות");
      return;
    }

    if (formData.password.length < 6) {
      setError("הסיסמה חייבת להכיל לפחות 6 תווים");
      return;
    }

    const ageNumber = Number(formData.age);
    if (Number.isNaN(ageNumber) || ageNumber < 13 || ageNumber > 120) {
      setError("נא להזין גיל בין 13 ל-120");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          username: formData.username,
          age: ageNumber,
        },
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/chat");
    return;
  }

  // -------------------- SIGN IN --------------------
  if (!formData.email || !formData.password) {
    setError("נא למלא את כל השדות");
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    setError("אימייל או סיסמה שגויים");
    return;
  }

  navigate("/chat");
};



const handleGuestLogin = async () => {
  const { data, error } = await supabase.auth.signInAnonymously();
  if (error) {
    setError(error.message);
    return;
  }
  navigate("/chat");
};


  return (
    <div style={styles.container}>
      {/* Background decorations */}
      <div style={styles.bgOrb1}></div>
      <div style={styles.bgOrb2}></div>
      <div style={styles.bgOrb3}></div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>💜</span>
          <span style={styles.logoText}>Big Sis</span>
        </Link>
        <Link to="/" style={styles.backBtn}>
          ← חזרה לדף הבית
        </Link>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.loginCard}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.avatar}>
              <span style={styles.avatarEmoji}>👩‍🦰</span>
            </div>
            <h1 style={styles.title}>
              {isSignUp ? 'הצטרפי אלינו' : 'שמחים לראות אותך'}
            </h1>
            <p style={styles.subtitle}>
              {isSignUp 
                ? 'צרי חשבון כדי לשמור את השיחות שלך'
                : 'התחברי כדי להמשיך את השיחה'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={styles.form}>
            {error && (
              <div style={styles.errorBox}>
                {error}
              </div>
            )}


            <div style={styles.inputGroup}>
              <label style={styles.label}>
                {isSignUp ? "שם משתמש" : "אימייל"}
              </label>

              <input
                type={isSignUp ? "text" : "email"}
                name={isSignUp ? "username" : "email"}
                value={isSignUp ? formData.username : formData.email}
                onChange={handleInputChange}
                placeholder={isSignUp ? "הזיני שם משתמש" : "name@email.com"}
                style={styles.input}
                dir="rtl"
              />
            </div>


            {isSignUp && (
              <div style={styles.inputGroup}>
                <label style={styles.label}>אימייל</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@email.com"
                  style={styles.input}
                  dir="rtl"
                />
              </div>
            )}

            {isSignUp && (
              <div style={styles.inputGroup}>
                <label style={styles.label}>גיל</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="גילך"
                  min="13"
                  max="120"
                  style={styles.input}
                  dir="rtl"
                />
              </div>
            )}

            <div style={styles.inputGroup}>
              <label style={styles.label}>סיסמה</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="הזיני סיסמה"
                style={styles.input}
                dir="rtl"
              />
            </div>

            {isSignUp && (
              <div style={styles.inputGroup}>
                <label style={styles.label}>אימות סיסמה</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="הזיני סיסמה שוב"
                  style={styles.input}
                  dir="rtl"
                />
              </div>
            )}

            {!isSignUp && (
              <div style={styles.forgotPassword}>
                <a href="#" style={styles.forgotLink}>
                  שכחת סיסמה?
                </a>
              </div>
            )}

            <button 
              type="submit" 
              style={styles.submitBtn}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              {isSignUp ? 'הרשמה' : 'התחברות'}
            </button>
          </form>

          {/* Divider */}
          <div style={styles.divider}>
            <span style={styles.dividerLine}></span>
            <span style={styles.dividerText}>או</span>
            <span style={styles.dividerLine}></span>
          </div>

          {/* Guest Login */}
          <button 
            onClick={handleGuestLogin}
            style={styles.guestBtn}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(168, 85, 247, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(168, 85, 247, 0.05)';
            }}
          >
            <span style={styles.guestIcon}>👤</span>
            <span>המשיכי כאורחת</span>
          </button>

          {/* Toggle Sign Up / Sign In */}
          <div style={styles.toggleSection}>
            <p style={styles.toggleText}>
              {isSignUp ? 'כבר יש לך חשבון?' : 'עדיין אין לך חשבון?'}
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setFormData({ username: '', email: '', age: '', password: '', confirmPassword: '' });
                setError('');
              }}
              style={styles.toggleBtn}
            >
              {isSignUp ? 'התחברי' : 'הירשמי'}
            </button>
          </div>

          {/* Privacy Note */}
          <div style={styles.privacyNote}>
            <span style={styles.lockIcon}>🔒</span>
            <span style={styles.privacyText}>
              הפרטים שלך מאובטחים ופרטיים
            </span>
          </div>
        </div>

        {/* Trust Badges */}
        <div style={styles.trustBadges}>
          <div style={styles.badge}>
            <span>🔒</span>
            <span>מאובטח לחלוטין</span>
          </div>
          <div style={styles.badge}>
            <span>🤫</span>
            <span>פרטיות מלאה</span>
          </div>
          <div style={styles.badge}>
            <span>💜</span>
            <span>בלי שיפוטיות</span>
          </div>
        </div>
      </main>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: 'Heebo', sans-serif;
          direction: rtl;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #f0f9ff 100%)',
    fontFamily: "'Heebo', sans-serif",
    direction: 'rtl',
    position: 'relative',
    overflow: 'hidden',
  },

  // Background elements
  bgOrb1: {
    position: 'fixed',
    top: '-150px',
    right: '-100px',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(244, 114, 182, 0.2) 0%, transparent 70%)',
    animation: 'float 10s ease-in-out infinite',
    pointerEvents: 'none',
  },
  bgOrb2: {
    position: 'fixed',
    bottom: '-100px',
    left: '-150px',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
    animation: 'float 12s ease-in-out infinite reverse',
    pointerEvents: 'none',
  },
  bgOrb3: {
    position: 'fixed',
    top: '40%',
    left: '10%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(251, 207, 232, 0.3) 0%, transparent 70%)',
    animation: 'float 14s ease-in-out infinite',
    pointerEvents: 'none',
  },

  // Navigation
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 40px',
    position: 'relative',
    zIndex: 100,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoIcon: {
    fontSize: '28px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  backBtn: {
    color: '#6b7280',
    fontSize: '15px',
    fontWeight: '500',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(168, 85, 247, 0.2)',
    transition: 'all 0.2s ease',
  },

  // Main Content
  main: {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '40px 20px',
    position: 'relative',
    zIndex: 10,
  },

  // Login Card
  loginCard: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '32px',
    padding: '40px',
    boxShadow: '0 20px 60px rgba(168, 85, 247, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
    animation: 'fadeInUp 0.6s ease-out',
  },

  // Header
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #f9a8d4, #c084fc)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
  },
  avatarEmoji: {
    fontSize: '40px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '15px',
    color: '#6b7280',
    lineHeight: '1.6',
  },

  // Form
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  errorBox: {
    padding: '12px 16px',
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    borderRadius: '12px',
    color: '#dc2626',
    fontSize: '14px',
    textAlign: 'center',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    padding: '14px 18px',
    fontSize: '15px',
    border: '2px solid rgba(168, 85, 247, 0.15)',
    borderRadius: '16px',
    background: 'white',
    color: '#1f2937',
    transition: 'all 0.2s ease',
    outline: 'none',
    fontFamily: "'Heebo', sans-serif",
  },
  forgotPassword: {
    textAlign: 'left',
    marginTop: '-10px',
  },
  forgotLink: {
    color: '#a855f7',
    fontSize: '14px',
    textDecoration: 'none',
    fontWeight: '500',
  },
  submitBtn: {
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    color: 'white',
    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 8px 25px rgba(168, 85, 247, 0.4)',
    marginTop: '8px',
  },

  // Divider
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    margin: '24px 0',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: 'rgba(168, 85, 247, 0.2)',
  },
  dividerText: {
    fontSize: '14px',
    color: '#9ca3af',
  },

  // Guest Button
  guestBtn: {
    width: '100%',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#6b7280',
    background: 'rgba(168, 85, 247, 0.05)',
    border: '2px solid rgba(168, 85, 247, 0.2)',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: "'Heebo', sans-serif",
  },
  guestIcon: {
    fontSize: '20px',
  },

  // Toggle Section
  toggleSection: {
    textAlign: 'center',
    marginTop: '24px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(168, 85, 247, 0.1)',
  },
  toggleText: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '8px',
  },
  toggleBtn: {
    color: '#a855f7',
    fontSize: '15px',
    fontWeight: '600',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontFamily: "'Heebo', sans-serif",
  },

  // Privacy Note
  privacyNote: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '20px',
    padding: '12px',
    background: 'rgba(168, 85, 247, 0.05)',
    borderRadius: '12px',
  },
  lockIcon: {
    fontSize: '16px',
  },
  privacyText: {
    fontSize: '13px',
    color: '#6b7280',
  },

  // Trust Badges
  trustBadges: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    marginTop: '32px',
    flexWrap: 'wrap',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(168, 85, 247, 0.1)',
    fontSize: '13px',
    color: '#6b7280',
  },
};

export default Login;
