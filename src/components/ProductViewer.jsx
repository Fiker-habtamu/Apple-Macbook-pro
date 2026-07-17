import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { useMacBookStore } from "../store";
import clsx from "clsx";
import MacBookModel14 from "./models/Macbook-14";
import StudioLight from "./Three/StudioLight";
import ModelSwitcher from "./Three/ModelSwitcher";
import {useMediaQuery} from 'react-responsive'

function ProductViewer() {
  const { color, scale, setColor, setScale } = useMacBookStore();
const isMobile = useMediaQuery({ query: '(max-width:720px)' })
console.log(isMobile)
  return (
    // Base layout: Dark background, fixed/screen height, relative positioning
    <section
      id="product-viewer"
      className="relative w-full h-[85vh] bg-black text-white flex flex-col justify-between p-6 overflow-hidden select-none"
    >
      {/* 1. Top Section: Heading */}
      <div className="z-10 mt-4">
        <h2 className="text-3xl font-medium tracking-tight text-zinc-100">
          Take a closer look.
        </h2>
      </div>

      {/* 2. Middle Section: The 3D Canvas Background layer */}
      <div className="absolute inset-0 w-[full] h-full z-0 mt-7 flex justify-center items-center">
        <Canvas
          shadows
          id="canvas"
          camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        >
          <StudioLight />

          <ModelSwitcher scale={isMobile ? scale - 0.03: scale} isMobile={isMobile}/>
        </Canvas>
      </div>

      {/* 3. Bottom Section: Stacked Info String & Controls */}
      <div className="z-10 flex flex-col items-center gap-4 mb-6">
        {/* Detail string */}
        <p className="text-xs font-normal tracking-wide text-zinc-400">
          MacbookPro {scale === 0.06 ? '14"' : '16"'} in{" "}
          {color === "#adb5bd" ? "Silver" : "Space Gray"}
        </p>

        {/* Action Controls Container */}
        <div className="flex items-center gap-4">
          {/* Color Pills Container */}
          <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 backdrop-blur-md px-4 py-2.5 rounded-full">
            <button
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "w-6 h-6 rounded-full transition-all bg-neutral-300 ring-offset-2 ring-offset-black",
                color === "#adb5bd"
                  ? "ring-2 ring-white scale-105"
                  : "opacity-50 hover:opacity-100",
              )}
              aria-label="Select Silver"
            />
            <button
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "w-6 h-6 rounded-full transition-all bg-neutral-800 border border-zinc-700 ring-offset-2 ring-offset-black",
                color === "#2e2c2e"
                  ? "ring-2 ring-white scale-105"
                  : "opacity-50 hover:opacity-100",
              )}
              aria-label="Select Space Gray"
            />
          </div>

          {/* Size Pills Container */}
          <div className="flex items-center bg-zinc-900/80 border border-zinc-800 backdrop-blur-md p-1 rounded-full">
            <button
              className={clsx(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                scale === 0.06
                  ? "bg-white text-black font-semibold"
                  : "bg-transparent text-zinc-400 hover:text-white",
              )}
              onClick={() => setScale(0.06)}
            >
              14"
            </button>
            <button
              className={clsx(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                scale === 0.08
                  ? "bg-white text-black font-semibold"
                  : "bg-transparent text-zinc-400 hover:text-white",
              )}
              onClick={() => setScale(0.08)}
            >
              16"
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductViewer;
