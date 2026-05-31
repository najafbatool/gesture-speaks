import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera, Type, Volume2, Copy, Mic, RefreshCw,
  CheckCircle, AlertCircle, Languages, Zap, Clock, User
} from 'lucide-react';

// ─── Mock recent translations ─────────────────────────────────────────────────
const recentHistory = [
  { id: 1, sign: 'Hello', urdu: 'ہیلو', time: '2 min ago' },
  { id: 2, sign: 'Thank You', urdu: 'شکریہ', time: '5 min ago' },
  { id: 3, sign: 'Water', urdu: 'پانی', time: '12 min ago' },
];

// ─── Stat cards for sidebar ───────────────────────────────────────────────────
const stats = [
  { icon: <Zap size={18} />, label: 'Translations Today', value: '24' },
  { icon: <Clock size={18} />, label: 'Avg. Response', value: '0.3s' },
  { icon: <Languages size={18} />, label: 'Languages', value: '2' },
];

// ═══════════════════════════════════════════════════════════════════════════════
export default function Dashboard() {
  const [activeTab, setActiveTab]     = useState('camera');
  const [outputLang, setOutputLang]   = useState('Urdu');
  const [inputText, setInputText]     = useState('');
  const [result, setResult]           = useState('');
  const [copied, setCopied]           = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);

  // ── Start/stop camera ──────────────────────────────────────────────────────
  const toggleCamera = async () => {
    if (!cameraActive) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
        setCameraActive(true);
      } catch {
        alert('Camera permission denied or not available.');
      }
    } else {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(t => t.stop());
        videoRef.current.srcObject = null;
      }
      setCameraActive(false);
    }
  };

  // ── Mock translate ─────────────────────────────────────────────────────────
  const handleTranslate = () => {
    if (activeTab === 'text' && inputText.trim()) {
      setResult(outputLang === 'Urdu' ? 'ترجمہ یہاں دکھایا جائے گا۔' : 'Translation will appear here.');
    } else if (activeTab === 'camera') {
      setResult(outputLang === 'Urdu' ? 'اشارہ پہچانا جا رہا ہے...' : 'Gesture being recognized...');
    }
  };

  // ── Copy to clipboard ──────────────────────────────────────────────────────
  const handleCopy = () => {
    if (result) { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  return (
    /* ══════════════════════════════
       DASHBOARD PAGE WRAPPER
       Light neumorphic background
       ══════════════════════════════ */
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #e8edf4 0%, #d6e4f7 100%)', minHeight: '100vh' }}>

      <div className="max-w-7xl mx-auto">

        {/* ── Dashboard Header ─────────────────────────────────────── */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#003d75]">Translation Studio</h1>
            <p className="text-sm text-[#4a6fa5] mt-1">Pakistani Sign Language → Urdu / English</p>
          </div>
          <div className="flex items-center gap-3 bg-white/60 border border-white/80 rounded-full px-4 py-2 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#005aa7] flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-[#003d75]">My Account</span>
          </div>
        </div>

        {/* ── Main Layout: Left panel + Right sidebar ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ════════════════════════════════
              LEFT — Main Translation Area
              ════════════════════════════════ */}
          <div className="lg:col-span-2 space-y-5">

            {/* Tab Switcher */}
            <div className="neumorphic-panel p-2 inline-flex gap-2">
              {[{ id: 'camera', icon: <Camera size={16} />, label: 'Sign to Text' },
                { id: 'text',   icon: <Type   size={16} />, label: 'Text to Sign' }].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200"
                  style={activeTab === tab.id
                    ? { background: '#005aa7', color: '#fff', boxShadow: '0 4px 12px rgba(0,90,167,0.35)' }
                    : { color: '#4a6fa5' }}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Input Panel */}
            <div className="neumorphic-panel overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#c8d4e8]">
                <span className="text-sm font-bold text-[#003d75]">
                  {activeTab === 'camera' ? '📷 Camera Input' : '⌨️ Text Input'}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#4a6fa5]">Output:</span>
                  <select
                    value={outputLang}
                    onChange={e => setOutputLang(e.target.value)}
                    className="text-sm font-semibold text-[#005aa7] bg-transparent outline-none cursor-pointer"
                  >
                    <option>Urdu</option>
                    <option>English</option>
                  </select>
                </div>
              </div>

              {/* Camera view */}
              {activeTab === 'camera' && (
                <div className="relative bg-[#1a2e4a] h-72 flex items-center justify-center overflow-hidden">
                  <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                  {!cameraActive && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                        <Camera size={36} className="text-white/60" />
                      </div>
                      <p className="text-white/60 text-sm">Camera is off</p>
                    </div>
                  )}
                  {/* Camera overlay corners */}
                  {cameraActive && (
                    <>
                      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-green-400 rounded-tl" />
                      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-green-400 rounded-tr" />
                      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-green-400 rounded-bl" />
                      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-green-400 rounded-br" />
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Text input */}
              {activeTab === 'text' && (
                <textarea
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                  className="w-full h-72 p-5 bg-transparent resize-none outline-none text-base text-[#1a2e4a] placeholder-[#7a9cc0] leading-relaxed"
                  placeholder="Type your text in English or Urdu here to convert into PSL gesture animation..."
                />
              )}

              {/* Action bar */}
              <div className="flex items-center justify-between px-5 py-3 bg-white/30 border-t border-[#c8d4e8]">
                {activeTab === 'camera' ? (
                  <button onClick={toggleCamera}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all"
                    style={cameraActive
                      ? { background: '#dc2626', color: '#fff', boxShadow: '0 4px 12px rgba(220,38,38,0.35)' }
                      : { background: '#005aa7', color: '#fff', boxShadow: '0 4px 12px rgba(0,90,167,0.35)' }}
                  >
                    <Camera size={15} />
                    {cameraActive ? 'Stop Camera' : 'Start Camera'}
                  </button>
                ) : (
                  <span className="text-xs text-[#7a9cc0]">{inputText.length} characters</span>
                )}
                <button
                  onClick={handleTranslate}
                  className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold text-white transition-all"
                  style={{ background: '#005aa7', boxShadow: '0 4px 12px rgba(0,90,167,0.35)' }}
                >
                  <Zap size={14} /> Translate
                </button>
              </div>
            </div>

            {/* Output Panel */}
            <div className="neumorphic-panel overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#c8d4e8]">
                <span className="text-sm font-bold text-[#003d75]">📝 Translation Result</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => setResult('')} className="neumorphic-button p-2 text-[#4a6fa5]" title="Clear">
                    <RefreshCw size={15} />
                  </button>
                  <button onClick={() => { /* speak */ }} className="neumorphic-button p-2 text-[#4a6fa5]" title="Read Aloud">
                    <Volume2 size={15} />
                  </button>
                  <button onClick={handleCopy} className="neumorphic-button px-4 py-2 text-sm flex items-center gap-1.5 text-[#005aa7]">
                    {copied ? <><CheckCircle size={14} className="text-green-600" /> Copied!</> : <><Copy size={14} /> Copy</>}
                  </button>
                </div>
              </div>
              <div className="min-h-32 p-6">
                {result
                  ? <p className="text-xl leading-relaxed text-[#1a2e4a] font-medium">{result}</p>
                  : <p className="text-[#7a9cc0] text-sm italic flex items-center gap-2"><AlertCircle size={16} /> Translation output will appear here...</p>
                }
              </div>
            </div>
          </div>

          {/* ════════════════════════════════
              RIGHT — Sidebar
              ════════════════════════════════ */}
          <div className="space-y-5">

            {/* Stats */}
            <div className="neumorphic-panel p-5">
              <h3 className="text-sm font-bold text-[#003d75] uppercase tracking-wider mb-4">Session Stats</h3>
              <div className="space-y-3">
                {stats.map(s => (
                  <div key={s.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#4a6fa5] text-sm">
                      <span className="w-7 h-7 bg-[#d6e4f7] rounded-full flex items-center justify-center">{s.icon}</span>
                      {s.label}
                    </div>
                    <span className="font-extrabold text-[#005aa7]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent history */}
            <div className="neumorphic-panel p-5">
              <h3 className="text-sm font-bold text-[#003d75] uppercase tracking-wider mb-4">Recent Translations</h3>
              <div className="space-y-3">
                {recentHistory.map(h => (
                  <div key={h.id} className="p-3 rounded-xl bg-white/50 border border-white hover:bg-white/80 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-bold text-[#1a2e4a]">{h.sign}</span>
                      <span className="text-xs text-[#7a9cc0]">{h.time}</span>
                    </div>
                    <span className="text-sm text-[#4a6fa5] font-medium">{h.urdu}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick tips */}
            <div className="neumorphic-panel p-5">
              <h3 className="text-sm font-bold text-[#003d75] uppercase tracking-wider mb-3">💡 Quick Tips</h3>
              <ul className="space-y-2 text-xs text-[#4a6fa5] leading-relaxed">
                <li>• Ensure good lighting for accurate recognition</li>
                <li>• Keep your hand within the camera frame</li>
                <li>• Perform gestures at a steady pace</li>
                <li>• Use sentence mode for full conversations</li>
              </ul>
            </div>

            {/* Upgrade banner */}
            <div className="rounded-2xl p-5 text-white" style={{ background: 'linear-gradient(135deg, #005aa7 0%, #1a7fd4 100%)', boxShadow: '0 8px 24px rgba(0,90,167,0.35)' }}>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={18} className="text-yellow-300" />
                <span className="font-bold text-sm">Upgrade to Pro</span>
              </div>
              <p className="text-xs text-white/80 mb-4 leading-relaxed">Unlock sentence-level translation, offline mode, and advanced features.</p>
              <Link to="/signup" className="block text-center text-sm font-bold py-2 rounded-full bg-white text-[#005aa7] hover:bg-blue-50 transition-colors">
                Start Free Trial
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
