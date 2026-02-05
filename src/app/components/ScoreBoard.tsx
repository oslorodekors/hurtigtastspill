import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Trophy, Flame, Target, Award, Monitor, Apple, PixelCoin } from 'lucide-react';
import { PixelCoin as Coin } from '@/app/components/PixelArt';
import type { Platform } from '@/app/components/ShortcutGame';

interface ScoreBoardProps {
  score: number;
  streak: number;
  totalAttempts: number;
  level: number;
  platform: Platform;
  onReset: () => void;
}

export function ScoreBoard({ score, streak, totalAttempts, level, platform, onReset }: ScoreBoardProps) {
  const accuracy = totalAttempts > 0 ? Math.round((score / (totalAttempts * 10)) * 100) : 0;

  return (
    <div className="p-6 bg-[rgba(43,27,61,0.9)] rounded border-4 border-white/20 text-white" style={{ imageRendering: 'pixelated' }}>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-[#FFD700]" />
            <div>
              <p className="text-white/80" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px' }}>POENG</p>
              <p className="text-xl text-white" style={{ fontFamily: 'var(--font-pixel)' }}>{score}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Flame className={`w-6 h-6 text-[#FF6B9D] ${streak > 0 ? 'animate-pulse' : ''}`} />
            <div>
              <p className="text-white/80" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px' }}>STREAK</p>
              <p className="text-xl text-white" style={{ fontFamily: 'var(--font-pixel)' }}>{streak}x</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-[#9B59B6]" />
            <div>
              <p className="text-white/80" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px' }}>NIVÅ</p>
              <p className="text-xl text-white" style={{ fontFamily: 'var(--font-pixel)' }}>{level}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="bg-white/10 text-white px-3 py-1 rounded border-2 border-white/30 flex items-center gap-1" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
              {platform === 'pc' ? (
                <>
                  <Monitor className="w-4 h-4" />
                  PC
                </>
              ) : (
                <>
                  <Apple className="w-4 h-4" />
                  MAC
                </>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={onReset}
          className="px-4 py-2 bg-white/10 text-white border-4 border-white/30 rounded hover:bg-white/20 hover:border-white/50 transition-all"
          style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}
        >
          AVSLUTT
        </button>
      </div>

      {streak >= 3 && (
        <div className="mt-4 bg-[rgba(255,107,157,0.2)] rounded border-2 border-[#FF6B9D] px-4 py-2 text-center animate-pulse">
          <p className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', lineHeight: '1.8' }}>
            🔥 FANTASTISK! {streak} PÅ RAD! +{streak * 10} BONUS!
          </p>
        </div>
      )}
    </div>
  );
}