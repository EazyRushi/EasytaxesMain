import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { user, loading, signUp, signIn } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Redirect if already logged in
  useEffect(() => {
    if (!loading && user) {
      window.location.href = "/dashboard";
    }
  }, [user, loading]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(formData.email, formData.password);
    } catch (error) {
      // Error handled in useAuth hook
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    try {
      await signUp(formData.email, formData.password);
    } catch (error) {
      // Error handled in useAuth hook
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Montserrat', sans-serif;
        }

        .auth-page {
          background: #f6f5f7;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
          padding: 20px;
        }

        .auth-container {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          position: relative;
          overflow: hidden;
          width: 768px;
          max-width: 100%;
          min-height: 480px;
        }

        .form-container {
          position: absolute;
          top: 0;
          height: 100%;
          transition: all 0.6s ease-in-out;
        }

        .sign-in-container {
          left: 0;
          width: 50%;
          z-index: 2;
        }

        .auth-container.right-panel-active .sign-in-container {
          transform: translateX(100%);
        }

        .sign-up-container {
          left: 0;
          width: 50%;
          opacity: 0;
          z-index: 1;
        }

        .auth-container.right-panel-active .sign-up-container {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: show 0.6s;
        }

        @keyframes show {
          0%, 49.99% {
            opacity: 0;
            z-index: 1;
          }
          50%, 100% {
            opacity: 1;
            z-index: 5;
          }
        }

        .overlay-container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
          transition: transform 0.6s ease-in-out;
          z-index: 100;
        }

        .auth-container.right-panel-active .overlay-container {
          transform: translateX(-100%);
        }

        .overlay {
          background: linear-gradient(135deg, #3FB9CB 0%, #34a0b0 100%);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 0 0;
          color: #FFFFFF;
          position: relative;
          left: -100%;
          height: 100%;
          width: 200%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }

        .auth-container.right-panel-active .overlay {
          transform: translateX(50%);
        }

        .overlay-panel {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 40px;
          text-align: center;
          top: 0;
          height: 100%;
          width: 50%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }

        .overlay-left {
          transform: translateX(-20%);
        }

        .auth-container.right-panel-active .overlay-left {
          transform: translateX(0);
        }

        .overlay-right {
          right: 0;
          transform: translateX(0);
        }

        .auth-container.right-panel-active .overlay-right {
          transform: translateX(20%);
        }

        .auth-form {
          background-color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 50px;
          height: 100%;
          text-align: center;
        }

        .auth-form h1 {
          font-weight: bold;
          margin: 0;
          margin-bottom: 20px;
        }

        .auth-form span {
          font-size: 12px;
          margin: 10px 0;
        }

        .auth-form a {
          color: #333;
          font-size: 14px;
          text-decoration: none;
          margin: 15px 0;
        }

        .auth-form a:hover {
          color: #3FB9CB;
        }

        .auth-input {
          background-color: #eee;
          border: none;
          padding: 12px 15px;
          margin: 8px 0;
          width: 100%;
          border-radius: 4px;
          font-family: 'Montserrat', sans-serif;
        }

        .auth-button {
          border-radius: 20px;
          border: 1px solid #3FB9CB;
          background-color: #3FB9CB;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: bold;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: transform 80ms ease-in;
          cursor: pointer;
          margin-top: 10px;
        }

        .auth-button:active {
          transform: scale(0.95);
        }

        .auth-button:focus {
          outline: none;
        }

        .auth-button.ghost {
          background-color: transparent;
          border-color: #FFFFFF;
        }

        .social-container {
          margin: 20px 0;
        }

        .social-container a {
          border: 1px solid #DDDDDD;
          border-radius: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 0 5px;
          height: 40px;
          width: 40px;
        }

        .overlay-panel h1 {
          font-weight: bold;
          margin: 0;
        }

        .overlay-panel p {
          font-size: 14px;
          font-weight: 100;
          line-height: 20px;
          letter-spacing: 0.5px;
          margin: 20px 0 30px;
        }

        @media (max-width: 768px) {
          .overlay-container {
            display: none;
          }
          .form-container {
            width: 100% !important;
          }
          .sign-in-container,
          .sign-up-container {
            width: 100%;
          }
      `}</style>

      <div className="auth-page">
        <Link href="/">
          <img
            src="/logo.jpg"
            alt="Eazytaxes"
            style={{
              height: '60px',
              marginBottom: '30px',
              cursor: 'pointer',
              objectFit: 'contain',
              mixBlendMode: 'multiply',
              filter: 'contrast(1.1) brightness(1.05)'
            }}
          />
        </Link>

        <div className={`auth-container ${isSignUp ? 'right-panel-active' : ''}`}>
          <div className="form-container sign-up-container">
            <form className="auth-form" onSubmit={handleRegister}>
              <h1>Create Account</h1>

              <input
                type="email"
                placeholder="Email"
                className="auth-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="auth-input"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
              <button className="auth-button">Sign Up</button>
            </form>
          </div>

          <div className="form-container sign-in-container">
            <form className="auth-form" onSubmit={handleLogin}>
              <h1>Sign in</h1>
              <input
                type="email"
                placeholder="Email"
                className="auth-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <a href="#">Forgot your password?</a>
              <button className="auth-button">Sign In</button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="auth-button ghost" onClick={() => setIsSignUp(false)}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="auth-button ghost" onClick={() => setIsSignUp(true)}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <p style={{ marginTop: '20px', fontSize: '12px', color: '#666', textAlign: 'center' }}>
          By continuing, you agree to our{' '}
          <Link href="/terms-of-service">
            <span style={{ color: '#3FB9CB', cursor: 'pointer' }}>Terms of Service</span>
          </Link>
          {' '}and{' '}
          <Link href="/privacy-policy">
            <span style={{ color: '#3FB9CB', cursor: 'pointer' }}>Privacy Policy</span>
          </Link>
        </p>
      </div>
    </>
  );
}
