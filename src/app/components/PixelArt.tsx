export function PixelCloud({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style={{ imageRendering: 'pixelated' }}>
        {/* Cloud shape - pixel by pixel */}
        <rect x="40" y="20" width="10" height="10" fill="#FF9ECE" />
        <rect x="50" y="20" width="10" height="10" fill="#FF9ECE" />
        <rect x="60" y="20" width="10" height="10" fill="#FF9ECE" />
        <rect x="30" y="30" width="10" height="10" fill="#FF9ECE" />
        <rect x="40" y="30" width="10" height="10" fill="#FFAED8" />
        <rect x="50" y="30" width="10" height="10" fill="#FFAED8" />
        <rect x="60" y="30" width="10" height="10" fill="#FFAED8" />
        <rect x="70" y="30" width="10" height="10" fill="#FF9ECE" />
        <rect x="20" y="40" width="10" height="10" fill="#FF9ECE" />
        <rect x="30" y="40" width="10" height="10" fill="#FFAED8" />
        <rect x="40" y="40" width="10" height="10" fill="#FFC4E8" />
        <rect x="50" y="40" width="10" height="10" fill="#FFC4E8" />
        <rect x="60" y="40" width="10" height="10" fill="#FFAED8" />
        <rect x="70" y="40" width="10" height="10" fill="#FF9ECE" />
        <rect x="80" y="40" width="10" height="10" fill="#FF9ECE" />
        
        {/* Purple shading */}
        <rect x="40" y="10" width="10" height="10" fill="#9B87D4" />
        <rect x="50" y="10" width="10" height="10" fill="#9B87D4" />
        <rect x="30" y="20" width="10" height="10" fill="#9B87D4" />
        <rect x="70" y="20" width="10" height="10" fill="#9B87D4" />
      </g>
    </svg>
  );
}

export function PixelGrass({ className = "" }: { className?: string }) {
  return (
    <div className={className} style={{ 
      height: '80px', 
      background: 'linear-gradient(to bottom, #3D8B52 0%, #2D6B3F 50%, #1D4B2F 100%)',
      position: 'relative',
      overflow: 'hidden',
      imageRendering: 'pixelated'
    }}>
      {/* Grass pattern */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: Math.random() * 20,
            left: `${i * 3.5}%`,
            width: '8px',
            height: `${10 + Math.random() * 15}px`,
            background: i % 3 === 0 ? '#4DA860' : i % 3 === 1 ? '#3D8B52' : '#5DBF73',
            imageRendering: 'pixelated'
          }}
        />
      ))}
    </div>
  );
}

export function PixelTree({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style={{ imageRendering: 'pixelated' }}>
        {/* Tree trunk */}
        <rect x="40" y="80" width="10" height="10" fill="#5C4033" />
        <rect x="50" y="80" width="10" height="10" fill="#5C4033" />
        <rect x="40" y="90" width="10" height="10" fill="#6B4E42" />
        <rect x="50" y="90" width="10" height="10" fill="#6B4E42" />
        <rect x="40" y="100" width="10" height="10" fill="#5C4033" />
        <rect x="50" y="100" width="10" height="10" fill="#5C4033" />
        
        {/* Leaves - dark green */}
        <rect x="30" y="30" width="10" height="10" fill="#2D6B3F" />
        <rect x="40" y="30" width="10" height="10" fill="#3D8B52" />
        <rect x="50" y="30" width="10" height="10" fill="#3D8B52" />
        <rect x="60" y="30" width="10" height="10" fill="#2D6B3F" />
        
        <rect x="20" y="40" width="10" height="10" fill="#3D8B52" />
        <rect x="30" y="40" width="10" height="10" fill="#4DA860" />
        <rect x="40" y="40" width="10" height="10" fill="#5DBF73" />
        <rect x="50" y="40" width="10" height="10" fill="#4DA860" />
        <rect x="60" y="40" width="10" height="10" fill="#3D8B52" />
        <rect x="70" y="40" width="10" height="10" fill="#2D6B3F" />
        
        <rect x="20" y="50" width="10" height="10" fill="#4DA860" />
        <rect x="30" y="50" width="10" height="10" fill="#5DBF73" />
        <rect x="40" y="50" width="10" height="10" fill="#5DBF73" />
        <rect x="50" y="50" width="10" height="10" fill="#5DBF73" />
        <rect x="60" y="50" width="10" height="10" fill="#4DA860" />
        <rect x="70" y="50" width="10" height="10" fill="#3D8B52" />
        
        <rect x="30" y="60" width="10" height="10" fill="#4DA860" />
        <rect x="40" y="60" width="10" height="10" fill="#5DBF73" />
        <rect x="50" y="60" width="10" height="10" fill="#4DA860" />
        <rect x="60" y="60" width="10" height="10" fill="#3D8B52" />
        
        <rect x="40" y="70" width="10" height="10" fill="#3D8B52" />
        <rect x="50" y="70" width="10" height="10" fill="#3D8B52" />
      </g>
    </svg>
  );
}

export function PixelFlower({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style={{ imageRendering: 'pixelated' }}>
        {/* Flower petals - yellow */}
        <rect x="5" y="5" width="5" height="5" fill="#FFD700" />
        <rect x="20" y="5" width="5" height="5" fill="#FFD700" />
        <rect x="0" y="10" width="5" height="5" fill="#FFD700" />
        <rect x="25" y="10" width="5" height="5" fill="#FFD700" />
        <rect x="5" y="15" width="5" height="5" fill="#FFD700" />
        <rect x="20" y="15" width="5" height="5" fill="#FFD700" />
        
        {/* Center */}
        <rect x="10" y="10" width="5" height="5" fill="#FF8C00" />
        <rect x="15" y="10" width="5" height="5" fill="#FF8C00" />
        
        {/* Stem */}
        <rect x="12" y="20" width="5" height="5" fill="#3D8B52" />
        <rect x="12" y="25" width="5" height="5" fill="#3D8B52" />
        <rect x="12" y="30" width="5" height="5" fill="#3D8B52" />
        
        {/* Leaf */}
        <rect x="7" y="28" width="5" height="5" fill="#4DA860" />
      </g>
    </svg>
  );
}

export function PixelSun({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style={{ imageRendering: 'pixelated' }}>
        {/* Sun core */}
        <rect x="20" y="20" width="8" height="8" fill="#FFD700" />
        <rect x="28" y="20" width="8" height="8" fill="#FFD700" />
        <rect x="36" y="20" width="8" height="8" fill="#FFD700" />
        <rect x="20" y="28" width="8" height="8" fill="#FFA500" />
        <rect x="28" y="28" width="8" height="8" fill="#FFA500" />
        <rect x="36" y="28" width="8" height="8" fill="#FFA500" />
        <rect x="20" y="36" width="8" height="8" fill="#FFD700" />
        <rect x="28" y="36" width="8" height="8" fill="#FFD700" />
        <rect x="36" y="36" width="8" height="8" fill="#FFD700" />
        
        {/* Sun rays */}
        <rect x="28" y="4" width="8" height="8" fill="#FFD700" />
        <rect x="28" y="52" width="8" height="8" fill="#FFD700" />
        <rect x="4" y="28" width="8" height="8" fill="#FFD700" />
        <rect x="52" y="28" width="8" height="8" fill="#FFD700" />
        <rect x="12" y="12" width="8" height="8" fill="#FFD700" />
        <rect x="44" y="12" width="8" height="8" fill="#FFD700" />
        <rect x="12" y="44" width="8" height="8" fill="#FFD700" />
        <rect x="44" y="44" width="8" height="8" fill="#FFD700" />
      </g>
    </svg>
  );
}

export function PixelCoin({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style={{ imageRendering: 'pixelated' }}>
        {/* Coin outline */}
        <rect x="8" y="8" width="6" height="6" fill="#FFD700" />
        <rect x="14" y="8" width="6" height="6" fill="#FFD700" />
        <rect x="20" y="8" width="6" height="6" fill="#FFD700" />
        <rect x="8" y="14" width="6" height="6" fill="#FFA500" />
        <rect x="14" y="14" width="6" height="6" fill="#FFA500" />
        <rect x="20" y="14" width="6" height="6" fill="#FFA500" />
        <rect x="8" y="20" width="6" height="6" fill="#FFD700" />
        <rect x="14" y="20" width="6" height="6" fill="#FFD700" />
        <rect x="20" y="20" width="6" height="6" fill="#FFD700" />
      </g>
    </svg>
  );
}
