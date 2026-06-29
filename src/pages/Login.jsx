import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, AlertCircle, Hand, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleGoogle = async () => {
    setError('');
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <Link to="/" className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-white/60 hover:text-white transition-colors z-20 font-medium text-sm">
        <ArrowLeft size={18} /> Back to Home
      </Link>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7dd3fc, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #818cf8, transparent)' }} />
      </div>

      <div className="glass-panel w-full max-w-md p-8 relative z-10">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: 'rgba(125,211,252,0.12)', border: '1px solid rgba(125,211,252,0.30)', boxShadow: '0 0 20px rgba(125,211,252,0.30)' }}>
            <Hand size={28} className="text-sky-300" />
          </div>
          <h1 className="text-2xl font-extrabold text-white text-shadow">Welcome Back</h1>
          <p className="mt-1 text-sm text-white/60">Sign in to your Gesture Speaks account</p>
        </div>

        {message && (
          <div className="mb-5 flex items-center gap-2 text-amber-200 text-sm px-4 py-3 rounded-xl"
            style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.30)' }}>
            <AlertCircle size={15} className="shrink-0" /> {message}
          </div>
        )}

        {error && (
          <div className="mb-5 flex items-center gap-2 text-red-300 text-sm px-4 py-3 rounded-xl"
            style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.30)' }}>
            <AlertCircle size={15} className="shrink-0" /> {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5 tracking-wider uppercase">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)}
              type="email" className="glass-input" placeholder="you@example.com" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-semibold text-white/70 tracking-wider uppercase">Password</label>
              <a href="#" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">Forgot password?</a>
            </div>
            <input value={password} onChange={e => setPassword(e.target.value)}
              type="password" className="glass-input" placeholder="••••••••" />
          </div>

          <button type="submit" className="btn-cta w-full justify-center mt-2" style={{ padding: '0.75rem 1rem' }}>
            <LogIn size={17} /> Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-white/40">or</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Google Button */}
        <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-semibold text-sm transition-all"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-white/50">
          Don't have an account?{' '}
          <Link to="/signup" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">Sign up free</Link>
        </p>
      </div>
    </div>
  );
}