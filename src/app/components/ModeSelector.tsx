import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { GraduationCap, Trophy, ArrowLeft } from 'lucide-react';
import { PixelCloud, PixelGrass, PixelTree, PixelFlower } from '@/app/components/PixelArt';
import type { Platform, GameMode } from '@/app/components/ShortcutGame';

interface ModeSelectorProps {
  platform: Platform;
  onSelectMode: (mode: GameMode) => void;
  onBack: () => void;
}

export function ModeSelector({ platform, onSelectMode, onBack }: ModeSelectorProps) {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#2B1B3D' }}>
      {/* Decorative Pixel Art */}
      <PixelCloud className="absolute top-8 left-8 pointer-events-none" />
      <PixelCloud className="absolute top-16 right-16 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
      <PixelCloud className="absolute top-32 left-1/4 pointer-events-none" />
      
      <PixelTree className="absolute bottom-0 left-8 pointer-events-none" />
      <PixelTree className="absolute bottom-0 right-8 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
      
      <PixelFlower className="absolute bottom-20 left-48 pointer-events-none" />
      <PixelFlower className="absolute bottom-20 right-48 pointer-events-none" />
      
      <PixelGrass className="absolute bottom-0 left-0 right-0 w-full pointer-events-none" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-3xl w-full p-8 space-y-8 bg-[rgba(43,27,61,0.95)] rounded border-4 border-white/20" style={{ imageRendering: 'pixelated' }}>
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-pixel)', lineHeight: '1.6' }}>
              VELG SPILLMODUS
            </h1>
            <p className="text-white/90" style={{ fontFamily: 'var(--font-pixel)', fontSize: '12px', lineHeight: '1.8' }}>
              {platform === 'pc' ? '💻 Windows/PC' : '🍎 macOS'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              type="button"
              onPointerDown={() => onSelectMode('learning')}
              className="p-6 border-4 border-white/30 rounded bg-[rgba(255,255,255,0.05)] hover:border-[#4DA860] hover:bg-[rgba(77,168,96,0.1)] transition-all group text-left cursor-pointer"
            >
              <div className="space-y-4 pointer-events-none">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-12 h-12 text-[#4DA860] group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '14px' }}>
                    DEL 1: LÆRING
                  </h3>
                </div>
                <div className="space-y-2 text-white/80" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', lineHeight: '1.8' }}>
                  <p className="text-[#4DA860]">✓ FOR NYBEGYNNERE</p>
                  <p>• Du ser tastene</p>
                  <p>• Lær steg for steg</p>
                  <p>• Visuell feedback</p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onPointerDown={() => onSelectMode('challenge')}
              className="p-6 border-4 border-white/30 rounded bg-[rgba(255,255,255,0.05)] hover:border-[#FF6B9D] hover:bg-[rgba(255,107,157,0.1)] transition-all group text-left cursor-pointer"
            >
              <div className="space-y-4 pointer-events-none">
                <div className="flex items-center gap-3">
                  <Trophy className="w-12 h-12 text-[#FF6B9D] group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '14px' }}>
                    DEL 2: UTFORDRING
                  </h3>
                </div>
                <div className="space-y-2 text-white/80" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', lineHeight: '1.8' }}>
                  <p className="text-[#FF6B9D]">🔥 FOR EKSPERTER</p>
                  <p>• Kun beskrivelse</p>
                  <p>• Finn tastene selv</p>
                  <p>• Doble poeng! 2x</p>
                </div>
              </div>
            </button>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] rounded border-2 border-white/20 p-4 space-y-3 text-left">
            <h3 className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
              📌 SPILLREGLER:
            </h3>
            <ul className="space-y-2 text-white/80" style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', lineHeight: '1.8' }}>
              <li>• 3 liv - over når alle er tapt</li>
              <li>• Gradvis vanskeligere</li>
              <li>• 2x poeng i utfordring!</li>
            </ul>
          </div>

          <button
            type="button"
            onPointerDown={onBack}
            className="w-full p-4 border-4 border-white/30 rounded bg-[rgba(255,255,255,0.05)] hover:border-white/50 hover:bg-[rgba(255,255,255,0.1)] transition-all text-white flex items-center justify-center gap-2 cursor-pointer"
            style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}
          >
            <ArrowLeft className="w-4 h-4" />
            TILBAKE
          </button>
        </div>
      </div>
    </div>
  );
}