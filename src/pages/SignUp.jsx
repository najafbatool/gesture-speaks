import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Hand, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && email && password) { login(name); navigate('/dashboard'); }
  };

  return (
    /* ── Full-screen glassmorphism signup page ── */
    <div className="min-h-screen flex items-center justify-center px-4 py-24">

      {/* Back button */}
      <Link to="/" className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-white/60 hover:text-white transition-colors z-20 font-medium text-sm">
        <ArrowLeft size={18} /> Back to Home
      </Link>

      {/* Ambient neon orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7dd3fc, transparent)' }} />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
      </div>

      <div className="glass-panel w-full max-w-md p-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: 'rgba(125,211,252,0.12)', border: '1px solid rgba(125,211,252,0.30)', boxShadow: '0 0 20px rgba(125,211,252,0.30)' }}>
            <UserPlus size={26} className="text-sky-300" />
          </div>
          <h1 className="text-2xl font-extrabold text-white text-shadow">Create Account</h1>
          <p className="mt-1 text-sm text-white/60">Join Gesture Speaks and start translating</p>
        </div>

        <form className="space-y-5" onSubmit={handleSignUp}>
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5 tracking-wider uppercase">Full Name</label>
            <input value={name} onChange={e => setName(e.target.value)}
              type="text" className="glass-input" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5 tracking-wider uppercase">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)}
              type="email" className="glass-input" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5 tracking-wider uppercase">Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)}
              type="password" className="glass-input" placeholder="••••••••" />
          </div>

          <button type="submit" className="btn-cta w-full justify-center mt-2" style={{ padding: '0.75rem 1rem' }}>
            <Hand size={17} /> Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          Already have an account?{' '}
          <Link to="/login" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
