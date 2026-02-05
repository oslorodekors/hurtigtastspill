import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';
import type { Shortcut, Platform, GameMode } from '@/app/components/ShortcutGame';
import { Keyboard, CheckCircle2, XCircle, Clock } from 'lucide-react';

interface ShortcutDisplayProps {
  shortcut: Shortcut;
  pressedKeys: Set<string>;
  feedback: 'correct' | 'incorrect' | 'timeout' | null;
  platform: Platform;
  timeLeft: number;
  maxTime: number;
  gameMode?: GameMode;
}

export function ShortcutDisplay({ shortcut, pressedKeys, feedback, platform, timeLeft, maxTime, gameMode = 'learning' }: ShortcutDisplayProps) {
  const keys = platform === 'pc' ? shortcut.pcKeys : shortcut.macKeys;
  
  const formatKey = (key: string): string => {
    const keyMap: { [key: string]: string } = {
      'Control': platform === 'pc' ? 'Ctrl' : '⌃',
      'Meta': '⌘',
      'Alt': platform === 'pc' ? 'Alt' : '⌥',
      'Shift': '⇧',
    };
    return keyMap[key] || key.toUpperCase();
  };

  const isKeyPressed = (key: string): boolean => {
    return pressedKeys.has(key);
  };

  const progressPercentage = (timeLeft / maxTime) * 100;
  const progressColor = progressPercentage > 50 ? '#4DA860' : progressPercentage > 25 ? '#FFD700' : '#FF4757';

  return (
    <div className="p-6 bg-[rgba(43,27,61,0.9)] rounded border-4 border-white/20 space-y-6" style={{ imageRendering: 'pixelated' }}>
      {/* Timer */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
              TID: {timeLeft.toFixed(1)}s
            </span>
          </div>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden border-2 border-white/30">
          <div
            className="h-full transition-all duration-100"
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: progressColor,
            }}
          />
        </div>
      </div>

      {/* Task */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Keyboard className="w-6 h-6 text-[#FFD700]" />
          <h3 className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '12px' }}>UTFØR:</h3>
        </div>
        <p className="text-3xl text-white" style={{ fontFamily: 'var(--font-pixel)', lineHeight: '1.6' }}>
          {shortcut.description.toUpperCase()}
        </p>
      </div>

      <div className="space-y-4">
        {gameMode === 'learning' ? (
          <>
            <p className="text-white/80 text-center" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px' }}>
              TRYKK TASTENE SAMTIDIG:
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {keys.map((key, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`px-6 py-3 text-xl font-mono transition-all rounded border-4 ${ 
                      isKeyPressed(key)
                        ? 'bg-[#4DA860] text-white border-[#4DA860] scale-110'
                        : 'bg-white/10 text-white border-white/30'
                    }`}
                    style={{ fontFamily: 'var(--font-pixel)', imageRendering: 'pixelated' }}
                  >
                    {formatKey(key)}
                  </div>
                  {index < keys.length - 1 && (
                    <span className="text-2xl text-white/50">+</span>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-[rgba(255,107,157,0.2)] rounded border-4 border-[#FF6B9D] p-6 text-center">
            <p className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '12px' }}>
              🔥 UTFORDRINGSMODUS
            </p>
            <p className="text-white/80 mt-2" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', lineHeight: '1.8' }}>
              FINN DEN RIKTIGE HURTIGTASTEN SELV!
            </p>
            <p className="text-[#FFD700] mt-1" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px' }}>
              2X POENG MULTIPLIER
            </p>
          </div>
        )}
      </div>

      {/* Feedback */}
      {feedback === 'correct' && (
        <div className="flex items-center justify-center gap-2 bg-[rgba(77,168,96,0.3)] rounded border-2 border-[#4DA860] p-4 animate-pulse">
          <CheckCircle2 className="w-6 h-6 text-[#4DA860]" />
          <span className="text-[#4DA860]" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>RIKTIG!</span>
        </div>
      )}
      {feedback === 'incorrect' && (
        <div className="flex items-center justify-center gap-2 bg-[rgba(255,71,87,0.3)] rounded border-2 border-[#FF4757] p-4 animate-pulse">
          <XCircle className="w-6 h-6 text-[#FF4757]" />
          <span className="text-[#FF4757]" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>FEIL!</span>
        </div>
      )}
    </div>
  );
}