import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hand, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { label: 'Home',      to: '/'         },
  { label: 'Features',  to: '/#features'},
  { label: 'About Us',  to: '/#about'   },
  { label: 'Dashboard', to: '/dashboard'},
];

export default function Navbar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    /* ── Glass Navbar ── */
    <nav className="fixed w-full z-50 glass-navbar">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(125,211,252,0.15)', border: '1px solid rgba(125,211,252,0.35)', boxShadow: '0 0 12px rgba(125,211,252,0.30)' }}>
              <Hand className="h-4 w-4 text-sky-300" />
            </div>
            <span className="font-extrabold text-lg text-white tracking-wide"
              style={{ textShadow: '0 0 20px rgba(125,211,252,0.40)' }}>
              Gesture Speaks
            </span>
          </Link>

          {/* Desktop links */}
          {!isDashboard && (
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => {
                const isActive = location.pathname === link.to;
                return (
                  <a key={link.label} href={link.to}
                    className={`px-4 py-2 rounded-lg text-sm font-medium text-white/85 hover:text-white transition-all duration-200 hover:bg-white/10 ${isActive ? 'nav-link-active text-sky-200' : ''}`}>
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-white/70">Hi, <span className="text-sky-300 font-semibold">{user.name}</span></span>
                <button onClick={logout} className="btn-outline text-sm px-4 py-2">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-outline text-sm px-5 py-2">Login</Link>
                <Link to="/signup" className="btn-cta text-sm px-5 py-2">Sign Up Free</Link>
              </>
            )}
          </div>

          {/* Hamburger */}
          <button className="md:hidden text-white/80 p-2 hover:text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-5 pb-5 pt-2 space-y-1" style={{ background: 'rgba(0,5,20,0.85)', backdropFilter: 'blur(20px)' }}>
          {!isDashboard && navLinks.map(link => (
            <a key={link.label} href={link.to} onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3">
            {user ? (
              <button onClick={() => { logout(); setOpen(false); }} className="btn-neon flex-1">Logout</button>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="btn-outline flex-1 justify-center text-sm py-2">Login</Link>
                <Link to="/signup" onClick={() => setOpen(false)} className="btn-cta flex-1 justify-center text-sm py-2">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}