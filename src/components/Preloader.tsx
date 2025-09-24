import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const progressBar = progressBarRef.current;
    const text = textRef.current;

    if (!preloader || !progressBar || !text) return;

    // Initial states
    gsap.set(progressBar, { width: "0%" });
    gsap.set(text, { opacity: 0, y: 20 });

    // Animation timeline
    const tl = gsap.timeline();

    // Text fade in
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    })
    // Progress bar animation
    .to(progressBar, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out"
    }, "-=0.5")
    // Preloader fade out
    .to(preloader, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
        if (preloader) preloader.style.display = "none";
      }
    }, "+=0.5");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-30" />
      
      {/* Floating orbs */}
      <div className="floating-orb w-20 h-20 top-1/4 left-1/4" />
      <div className="floating-orb w-12 h-12 top-3/4 right-1/4" style={{ animationDelay: '-2s' }} />
      <div className="floating-orb w-16 h-16 bottom-1/4 left-1/2" style={{ animationDelay: '-4s' }} />

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo/Name */}
        <div ref={textRef} className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-glow">
            Yash Sharma
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Developer <span className="text-primary">|</span> Designer
          </p>
        </div>

        {/* Progress bar container */}
        <div className="w-80 mx-auto">
          <div className="glass-panel p-2">
            <div 
              ref={progressBarRef}
              className="progress-bar"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 font-light">
            Loading Experience...
          </p>
        </div>
      </div>

      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
    </div>
  );
};

export default Preloader;