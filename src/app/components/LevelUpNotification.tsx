interface LevelUpNotificationProps {
  level: number;
  timeLimit: number;
}

export function LevelUpNotification({ level, timeLimit }: LevelUpNotificationProps) {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
      style={{ 
        animation: 'fadeInOut 2s ease-in-out',
      }}
    >
      <div 
        className="bg-[rgba(0,0,0,0.8)] border-8 border-[#FFD700] rounded-lg p-12 text-center"
        style={{ 
          imageRendering: 'pixelated',
          animation: 'scaleUp 0.5s ease-out',
        }}
      >
        <div className="space-y-6">
          <div 
            className="text-8xl font-bold text-[#FFD700]" 
            style={{ 
              fontFamily: 'var(--font-pixel)',
              textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 4px 4px 0 rgba(0,0,0,0.5)',
              animation: 'pulse 0.5s ease-in-out infinite',
            }}
          >
            LEVEL UP!
          </div>
          
          <div className="space-y-3">
            <div 
              className="text-6xl font-bold text-white" 
              style={{ 
                fontFamily: 'var(--font-pixel)',
                textShadow: '3px 3px 0 rgba(0,0,0,0.5)',
              }}
            >
              NIVÅ {level}
            </div>
            
            <div 
              className="text-2xl text-[#4DA860]" 
              style={{ 
                fontFamily: 'var(--font-pixel)',
                fontSize: '16px',
              }}
            >
              ⚡ Ny tidsbegrensning: {timeLimit.toFixed(1)}s
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes scaleUp {
          0% { transform: scale(0.5); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
