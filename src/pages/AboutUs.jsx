import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, Handshake, Zap } from 'lucide-react';

// ─── Team members ──────────────────────────────────────────────────────────────
const team = [
  { name: 'Ahmad Raza',    role: 'AI & ML Engineer',       initials: 'AR' },
  { name: 'Sara Khan',     role: 'Frontend Developer',      initials: 'SK' },
  { name: 'Usman Tariq',   role: 'Backend Developer',       initials: 'UT' },
  { name: 'Nida Fatima',   role: 'UX / Research Lead',      initials: 'NF' },
];

// ─── Values ────────────────────────────────────────────────────────────────────
const values = [
  { icon: <Target size={28} />,    title: 'Mission-Driven',   desc: 'Every feature is built to serve the deaf and hard-of-hearing community of Pakistan.' },
  { icon: <Eye size={28} />,       title: 'Accessible First', desc: 'We believe communication is a right, not a privilege. Our tools are free to start.' },
  { icon: <Handshake size={28} />, title: 'Community-Led',    desc: 'Built with direct feedback from deaf individuals, caregivers, and educators across Pakistan.' },
  { icon: <Zap size={28} />,       title: 'AI-Powered',       desc: 'Generalized AI models trained specifically on PSL — not ported from ASL or other sign languages.' },
];

// ═══════════════════════════════════════════════════════════════════════════════
export default function AboutUs() {
  return (
    <div className="min-h-screen pb-20">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 border border-white/30 text-white">
            🤝 About Gesture Speaks
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.35)' }}>
            Breaking Barriers for<br />Pakistan's Deaf Community
          </h1>
          <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto"
             style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}>
            Gesture Speaks is a Final Year Project developed at a Pakistani university to address the critical communication gap faced by over 7 million deaf and hard-of-hearing individuals in Pakistan. We are building the country's first web-based AI tool for real-time Pakistani Sign Language (PSL) translation.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 text-white">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-white/80 leading-relaxed">
              To build an accessible, AI-powered Pakistani Sign Language translation platform that empowers deaf individuals, educators, caregivers, and organizations — enabling real, meaningful communication in Urdu and English.
            </p>
          </div>
          <div className="glass-panel p-8 text-white">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
              <Eye size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-white/80 leading-relaxed">
              A Pakistan where sign language is no longer a barrier — where deaf individuals can communicate freely through technology in their native language, and where PSL tools are available to every school, NGO, and household.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.35)' }}>
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="glass-panel p-6 text-white hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-4 p-3 inline-block rounded-xl bg-white/20">{v.icon}</div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem We Solve ── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto glass-panel p-10 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">The Problem We're Solving</h2>
          <div className="space-y-4 text-white/85 leading-relaxed">
            <p>Pakistan has over <strong className="text-white">7 million deaf and hard-of-hearing individuals</strong>, yet there is not a single web-based tool that translates Pakistani Sign Language (PSL) into Urdu or English.</p>
            <p>Existing sign language technology is almost entirely focused on <strong className="text-white">American Sign Language (ASL)</strong> — which is a completely different language with different grammar, vocabulary, and gestures than PSL.</p>
            <p>This means millions of deaf Pakistanis are left without accessible communication tools, creating barriers in education, employment, healthcare, and daily life.</p>
            <p><strong className="text-white">Gesture Speaks was built to fix this.</strong></p>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.35)' }}>
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.name} className="glass-panel p-6 text-white text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-white/25 flex items-center justify-center text-xl font-extrabold mx-auto mb-4 border-2 border-white/40">
                  {member.initials}
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-white/70 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto glass-panel p-10 text-white">
          <Award size={40} className="mx-auto mb-4 text-white/80" />
          <h2 className="text-3xl font-bold mb-3">Ready to Experience It?</h2>
          <p className="text-white/80 mb-8">Try our real-time PSL translation platform — free to start, no install required.</p>
          <Link to="/signup" className="btn-cta">Get Started Free</Link>
        </div>
      </section>

    </div>
  );
}
