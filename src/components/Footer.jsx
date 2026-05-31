import React from 'react';
import { Link } from 'react-router-dom';
import { Hand, Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

// ─── Footer link groups ───────────────────────────────────────────────────────
const links = {
  Product: [
    { label: 'Home', to: '/' },
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Pricing', to: '/#pricing' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Careers', to: '/careers' },
  ],
  Support: [
    { label: 'Documentation', to: '/docs' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
  ],
};

const socials = [
  { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
  { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  { icon: <Github size={18} />, href: '#', label: 'GitHub' },
  { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
];

// ═══════════════════════════════════════════════════════════════════════════════
export default function Footer() {
  return (
    /* ══════════════════════════════
       PROFESSIONAL FOOTER
       Dark navy glass over gradient
       ══════════════════════════════ */
    <footer className="relative z-20 mt-10" style={{ background: 'rgba(0, 30, 70, 0.75)', backdropFilter: 'blur(14px)', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* ── Top Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Hand className="h-7 w-7 text-white" />
              <span className="text-xl font-extrabold text-white tracking-wide">Gesture Speaks</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Pakistan's first AI-powered Pakistani Sign Language translation platform — bridging communication for 7 million+ deaf individuals.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/25 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Contact row ── */}
        <div className="flex flex-col sm:flex-row gap-5 mb-10 text-sm text-white/70">
          <span className="flex items-center gap-2"><Mail size={15} /> gestures@gesturesponline.pk</span>
          <span className="flex items-center gap-2"><Phone size={15} /> +92 300 0000000</span>
          <span className="flex items-center gap-2"><MapPin size={15} /> Lahore, Pakistan</span>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} Gesture Speaks. All rights reserved.</span>
          <span>Built with ❤️ for Pakistan's Deaf Community</span>
        </div>

      </div>
    </footer>
  );
}