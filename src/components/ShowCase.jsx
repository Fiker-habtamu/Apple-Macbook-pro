import React from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ShowCase() {
  const isTablet = useMediaQuery({ query: "(max-width: 800px)" });

  useGSAP(() => {
    if (!isTablet) {
      // 1. Start the black mask overlay massive (scale 60)
      // This positions the transparent cutout over the whole viewport so video is fullscreen
      gsap.set(".mask-overlay", {
        scale: 60,
        transformOrigin: "center center",
      });

      // 2. Pin and scrub the zoom
      const timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        },
      });

      timeLine
        // Zoom down to scale 1 (normal size framing the video)
        .to(".mask-overlay", {
          scale: 1,
          ease: "power1.inOut",
        })
        // Fade up the text content once the mask lands
        .to(
          ".content",
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
          },
          "-=0.2"
        );
    }
  }, [isTablet]);

  return (
    <section id="showcase" className="relative w-full bg-black overflow-hidden">
      
      {/* Media Wrapper */}
      <div className="media relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
        
        {/* Layer 1: Fullscreen Video (Bottom) */}
        <video
          src="/videos/game.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Layer 2: Mask Image Overlay (Top - Animated by GSAP) */}
        <div className="mask-overlay absolute inset-0 w-full h-full z-10 pointer-events-none flex items-center justify-center">
          <img
            src="/mask-logo.svg"
            alt="Mask Logo"
            className="w-full h-full object-contain"
          />
        </div>

      </div>

      {/* Layer 3: Text Content */}
      <div className="content relative z-20">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple’s silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that's
                unbelievably thin and light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness.
              </p>
              <p className="text-primary cursor-pointer hover:underline">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-3">
              <p>Up to</p>
              <h3>4x FASTER</h3>
              <p>Pro rendering performance than M2</p>
            </div>
            <div className="space-y-3">
              <p>Up to</p>
              <h3>1.5x FASTER</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowCase;