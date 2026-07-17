import React from "react";

function StudioLight() {
  return (
    <>
      {/* 1. Ambient Light: Provides a baseline level of soft, uniform light so the shadows aren't pitch black */}
      <ambientLight intensity={0.3} />

      {/* 2. Key Light (Top-Front-Left): Mimics a large softbox to illuminate the main face and keyboard area */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* 3. Fill Light (Right): Softly fills in the harsh shadows created by the key light */}
      <directionalLight 
        position={[-5, 5, 2]} 
        intensity={0.6} 
      />

      {/* 4. Rim/Back Light (Top-Back): Catches the aluminum edges of the lid and screen to make it pop from the dark background */}
      <directionalLight 
        position={[0, 8, -5]} 
        intensity={2.0} 
        color="#ffffff"
      />

      {/* 5. Bottom Bounce Light: Simulates light reflecting off a studio floor back onto the bottom casing */}
      <directionalLight 
        position={[0, -5, 0]} 
        intensity={0.2} 
      />
    </>
  );
}

export default StudioLight;