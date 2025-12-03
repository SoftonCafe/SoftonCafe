import { useState, useEffect } from 'react';
import { Skull, AlertTriangle, Terminal, Wifi } from 'lucide-react';

function App() {
  const [glitchText, setGlitchText] = useState('SYSTEM COMPROMISED');
  const [showWarning, setShowWarning] = useState(true);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    const chars = 'Пако выплати свой долг';
    const newChars = Array.from({ length: 50 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    );
    setMatrixChars(newChars);

    const glitchInterval = setInterval(() => {
      const texts = [
        'SYSTEM COMPROMISED',
        'P4YM3NT 0V3RDUE',
        'ACC3SS D3NIED',
        'D4T4 EXP0SED',
        'SYSTEM COMPROMISED'
      ];
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 2000);

    const warningInterval = setInterval(() => {
      setShowWarning(prev => !prev);
    }, 500);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(warningInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 overflow-hidden relative font-mono">
      <div className="matrix-bg absolute inset-0 opacity-20 pointer-events-none">
        {matrixChars.map((char, i) => (
          <div
            key={i}
            className="matrix-char absolute animate-matrix-fall"
            style={{
              left: `${(i * 2) % 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${3 + (i % 5)}s`
            }}
          >
            {char}
          </div>
        ))}
      </div>

      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="glitch-container mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Skull className="w-16 h-16 text-red-600 animate-pulse-fast" />
            <h1 className="text-6xl font-bold glitch" data-text={glitchText}>
              {glitchText}
            </h1>
            <Skull className="w-16 h-16 text-red-600 animate-pulse-fast" />
          </div>
        </div>

        {showWarning && (
          <div className="flex items-center justify-center gap-2 text-red-500 text-2xl mb-8 animate-blink">
            <AlertTriangle className="w-8 h-8" />
            <span>WARNING: PAYMENT OVERDUE</span>
            <AlertTriangle className="w-8 h-8" />
          </div>
        )}

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="border-2 border-red-600 p-6 bg-black/80 backdrop-blur animate-border-pulse">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl text-red-500">BREACH NOTIFICATION</h2>
            </div>
            <div className="space-y-2 text-green-400">
              <p className="typing-effect">&gt; Your website has been locked due to non-payment...</p>
              <p className="typing-effect" style={{ animationDelay: '1s' }}>&gt; All systems have been compromised...</p>
              <p className="typing-effect" style={{ animationDelay: '2s' }}>&gt; Database access: UNAUTHORIZED</p>
              <p className="typing-effect" style={{ animationDelay: '3s' }}>&gt; Security protocols: DISABLED</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-500 p-4 bg-black/60 animate-flicker">
              <h3 className="text-xl mb-3 text-red-400">SYSTEM STATUS</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Firewall:</span>
                  <span className="text-red-500 animate-blink">DISABLED</span>
                </div>
                <div className="flex justify-between">
                  <span>Encryption:</span>
                  <span className="text-red-500 animate-blink">BROKEN</span>
                </div>
                <div className="flex justify-between">
                  <span>Authentication:</span>
                  <span className="text-red-500 animate-blink">BYPASSED</span>
                </div>
                <div className="flex justify-between">
                  <span>Backup:</span>
                  <span className="text-red-500 animate-blink">CORRUPTED</span>
                </div>
              </div>
            </div>

            <div className="border border-green-500 p-4 bg-black/60 animate-flicker" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl mb-3 text-red-400">PAYMENT DEMAND</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1 Deuda:</span>
                  <span className="text-yellow-400">600€</span>
                </div>
                <div className="flex justify-between">
                  <span>Days Overdue:</span>
                  <span className="text-red-500">42</span>
                </div>
                <div className="flex justify-between">
                  <span>2 Deuda:</span>
                  <span className="text-red-500">100€</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span className="text-red-600 font-bold">700€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-yellow-500 p-6 bg-yellow-950/30 animate-shake">
            <h3 className="text-2xl text-yellow-400 mb-4 flex items-center gap-2">
              <Wifi className="w-6 h-6" />
              LIVE HACK IN PROGRESS
            </h3>
            <div className="space-y-1 text-sm font-mono">
              <p className="text-green-300">[09:47:23] Scanning ports... 1337/TCP OPEN</p>
              <p className="text-green-300">[09:47:24] Exploiting vulnerability CVE-2024-NPAY</p>
              <p className="text-yellow-300">[09:47:25] Injecting payload... SUCCESS</p>
              <p className="text-yellow-300">[09:47:26] Escalating privileges... ROOT ACCESS GRANTED</p>
              <p className="text-red-400">[09:47:27] Dumping database... 87% COMPLETE</p>
              <p className="text-red-400">[09:47:28] Exfiltrating data... IN PROGRESS</p>
            </div>
          </div>

          <div className="text-center py-8">
            <p className="text-3xl text-red-500 mb-4 animate-pulse-fast">
              PAY NOW TO RESTORE ACCESS
            </p>
            <div className="text-green-400 text-sm space-y-1">
              <p>Contact: S3RB10@H4K4U.onion</p>
              <p>Bitcoin Address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
              <p className="text-red-400 animate-blink">Time remaining: 23:59:47</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-2 px-4 flex items-center justify-center gap-4 animate-slide-up">
        <AlertTriangle className="w-5 h-5 animate-spin-slow" />
        <span className="font-bold">ЭТА СТРАНИЦА: SOFTON БЫЛА УДАЛЕНА ЗА НЕПЛАТНУЮ И ПИРАТСКИМ БОССОМ, КОТОРЫЙ НЕ ПЛАТИТ СВОИМ СОТРУДНИКАМ</span>
        <AlertTriangle className="w-5 h-5 animate-spin-slow" />
      </div>
    </div>
  );
}

export default App;
