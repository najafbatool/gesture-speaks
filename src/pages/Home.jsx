import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Languages, Handshake, Users, BookOpen, TrendingUp, ShieldCheck, Target, Eye } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  { icon: <Camera size={32} className="text-sky-300 mb-4" />, title: 'Real-Time Recognition', desc: 'Perform PSL gestures in front of your webcam. Our AI instantly translates them into Urdu and English text.' },
  { icon: <Languages size={32} className="text-sky-300 mb-4" />, title: 'Urdu & English Support', desc: 'Native Urdu output with English as a reference — accessible across Pakistan\'s linguistically diverse population.' },
  { icon: <Handshake size={32} className="text-sky-300 mb-4" />, title: 'Two-Way Communication', desc: 'Type text and see it converted into PSL gestures — a true two-way bridge between deaf and hearing communities.' },
];

const stats = [
  { value: '7M+', label: 'Deaf individuals in Pakistan' },
  { value: '0', label: 'Web-based PSL tools before us' },
  { value: '2', label: 'Languages supported' },
  { value: '100%', label: 'Web-based — no install needed' },
];

const audience = [
  { icon: <Users size={24} />, title: 'Deaf & Hard-of-Hearing', desc: 'Communicate freely using PSL gestures translated instantly into text.' },
  { icon: <BookOpen size={24} />, title: 'Educators & Caregivers', desc: 'Support deaf students with an accessible, easy-to-use translation tool.' },
  { icon: <TrendingUp size={24} />, title: 'NGOs & Organizations', desc: 'Integrate or license the platform for your institution.' },
  { icon: <ShieldCheck size={24} />, title: 'Developers via API', desc: 'Embed PSL translation into your own apps with our developer API.' },
];

const plans = [
  { name: 'Free', price: 'PKR 0', period: '/month', features: ['Basic gesture-to-text', 'Urdu & English output', 'Web camera support'], cta: 'Get Started', highlight: false },
  { name: 'Pro', price: 'PKR 999', period: '/month', features: ['Everything in Free', 'Text-to-sign animation', 'Sentence-level translation', 'Priority support'], cta: 'Start Free Trial', highlight: true },
  { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited users', 'API access', 'Custom integration', 'Dedicated support'], cta: 'Contact Us', highlight: false },
];

// ─── Animated word cycler ─────────────────────────────────────────────────────
const WORDS = ['Pakistani Sign Language', 'Real-Time Gestures', 'Urdu Translation', 'Two-Way Communication', 'AI-Powered Recognition'];

function useWordCycle(words, interval = 2800) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIndex(i => (i + 1) % words.length); setVisible(true); }, 380);
    }, interval);
    return () => clearInterval(t);
  }, [words, interval]);
  return { word: words[index], visible };
}

// ─── Section heading component ────────────────────────────────────────────────
function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-shadow mb-3">{title}</h2>
      {subtitle && <p className="text-base text-white/75 max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function Home() {
  const { word, visible } = useWordCycle(WORDS);

  return (
    <div className="min-h-screen">

      {/* ══════════════════════════════
          HERO SECTION
          ══════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="text-center max-w-3xl mx-auto">

          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/15 border border-white/25 text-white/90 backdrop-blur-sm">
            🇵🇰 Pakistan's First AI-Powered PSL Platform
          </span>

          {/* Main headline — fixed part */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-shadow leading-tight mb-2">
            Translate
          </h1>

          {/* Animated sliding word */}
          <div className="overflow-hidden h-12 md:h-16 flex items-center justify-center mb-2">
            <span
              className="text-3xl md:text-5xl font-extrabold leading-tight"
              style={{
                background: 'linear-gradient(90deg, #7dd3fc, #bfdbfe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transform: visible ? 'translateY(0)' : 'translateY(56px)',
                opacity: visible ? 1 : 0,
                transition: 'transform 0.38s cubic-bezier(0.22,1,0.36,1), opacity 0.38s ease',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
            >
              {word}
            </span>
          </div>

          {/* Fixed second line */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-shadow leading-tight mb-6">
            Into Text — Instantly.
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Gesture Speaks bridges the communication gap for Pakistan's 7M+ deaf community using real-time AI — no installation required.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/dashboard" className="btn-cta text-base px-7 py-3">Start Translating Free</Link>
            <a href="#features" className="btn-outline text-base px-7 py-3">See How It Works</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS STRIP
          ══════════════════════════════ */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel grid grid-cols-2 md:grid-cols-4 gap-6 p-6 text-center text-white">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-shadow">{s.value}</div>
                <div className="text-xs mt-1 text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FEATURES SECTION
          ══════════════════════════════ */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="What We Offer" subtitle="Purpose-built for the Pakistani deaf community — not an ASL adaptation." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="glass-panel p-7 text-white hover:-translate-y-1 transition-transform duration-300">
                {f.icon}
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHO BENEFITS SECTION
          ══════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Who Benefits?" subtitle="Designed for everyone in the accessibility ecosystem." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map(a => (
              <div key={a.title} className="glass-panel p-6 text-white hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-4 p-2.5 inline-block rounded-xl bg-white/15">{a.icon}</div>
                <h3 className="text-base font-bold mb-2">{a.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRICING SECTION
          ══════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Simple Pricing" subtitle="Start free. Scale when you're ready." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`glass-panel p-7 text-white flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 ${plan.highlight ? 'ring-2 ring-white/50 scale-105' : ''}`}
              >
                {plan.highlight && <span className="text-xs font-bold bg-white text-blue-700 px-3 py-1 rounded-full self-start">Most Popular</span>}
                <h3 className="text-xl font-extrabold">{plan.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-black">{plan.price}</span>
                  <span className="text-white/60 mb-1 text-xs">{plan.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-white/80 flex-grow">
                  {plan.features.map(feat => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-white/25 flex items-center justify-center text-xs shrink-0">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`text-center py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${plan.highlight ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg' : 'border border-white/35 hover:bg-white/15'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ABOUT US SECTION
          ══════════════════════════════ */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="About Gesture Speaks" subtitle="Pakistan's first AI-powered PSL translation platform — built by students, for a community of 7 million." />

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel p-7 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4"><Target size={20} /></div>
              <h3 className="text-lg font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-white/75 leading-relaxed">To build an accessible, AI-powered PSL translation platform that empowers deaf individuals, educators, caregivers, and organizations — enabling real communication in Urdu and English.</p>
            </div>
            <div className="glass-panel p-7 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4"><Eye size={20} /></div>
              <h3 className="text-lg font-bold mb-2">Our Vision</h3>
              <p className="text-sm text-white/75 leading-relaxed">A Pakistan where sign language is no longer a barrier — where deaf individuals communicate freely through technology in Urdu, and PSL tools are available to every school, NGO, and household.</p>
            </div>
          </div>

          {/* Problem */}
          <div className="glass-panel p-8 text-white mb-8">
            <h3 className="text-lg font-bold mb-4 text-center">The Problem We're Solving</h3>
            <div className="space-y-2 text-sm text-white/75 leading-relaxed max-w-2xl mx-auto text-center">
              <p>Pakistan has over <strong className="text-white">7 million deaf and hard-of-hearing individuals</strong>, yet there is no web-based tool that translates PSL into Urdu or English.</p>
              <p>All existing technology focuses on <strong className="text-white">American Sign Language (ASL)</strong> — completely different from PSL. Gesture Speaks was built to fix this.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA BANNER
          ══════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-panel p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-shadow mb-3">Ready to Break the Barrier?</h2>
            <p className="text-sm text-white/75 mb-8 leading-relaxed">
              Join families, educators, and organizations making communication accessible for the deaf community of Pakistan.
            </p>
            <Link to="/signup" className="btn-cta text-base px-7 py-3">Create Free Account</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
