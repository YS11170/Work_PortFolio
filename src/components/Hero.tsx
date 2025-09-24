import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (!hero || !title || !subtitle || !cta) return;

    // Initial states
    gsap.set([title, subtitle, cta], { opacity: 0, y: 50 });

    // Animation timeline
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    })
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(cta, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 cosmic-grid opacity-30" />
      
      {/* Floating orbs */}
      <div className="floating-orb w-32 h-32 top-20 left-20" />
      <div className="floating-orb w-24 h-24 top-40 right-32" style={{ animationDelay: '-2s' }} />
      <div className="floating-orb w-20 h-20 bottom-32 left-1/4" style={{ animationDelay: '-4s' }} />
      <div className="floating-orb w-28 h-28 bottom-20 right-20" style={{ animationDelay: '-6s' }} />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Yash Sharma
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 font-light max-w-3xl mx-auto"
        >
          Developer & Designer{' '}
          <span className="text-primary">—</span>{' '}
          Blending Creativity with Code
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <Button 
            className="neon-button text-lg px-8 py-4 group"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
            <div className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </div>
          </Button>
          
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="glass-panel w-12 h-12 hover:scale-110 transition-transform"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="glass-panel w-12 h-12 hover:scale-110 transition-transform"
              onClick={() => window.open('https://linkedin.com', '_yashsharma3001')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="glass-panel w-12 h-12 hover:scale-110 transition-transform"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          className="glass-panel"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
    </section>
  );
};

export default Hero;