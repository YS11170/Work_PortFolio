import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'GSAP', category: 'Animation' },
    { name: 'Figma', category: 'Design' },
    { name: 'Photoshop', category: 'Design' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'UI/UX Design', category: 'Design' },
    { name: 'CorelDRAW', category: 'Design' },
    { name: 'Canva', category: 'Design' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Initial states
    gsap.set(image, { opacity: 0, x: -50, rotationY: -15 });
    gsap.set(content, { opacity: 0, x: 50 });

    tl.to(image, {
      opacity: 1,
      x: 0,
      rotationY: 0,
      duration: 1.2,
      ease: "power2.out"
    })
    .to(content, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <div ref={imageRef} className="relative">
          <div className="glass-panel p-8 group hover:scale-105 transition-transform duration-500">
            <div className="relative">
              <img 
                src={profileImage}
                alt="Yash Sharma - Developer & Designer"
                className="w-full max-w-md mx-auto rounded-xl group-hover:rotate-2 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          
          {/* Floating elements around image */}
          <div className="floating-orb w-12 h-12 -top-4 -right-4" />
          <div className="floating-orb w-8 h-8 -bottom-4 -left-4" style={{ animationDelay: '-3s' }} />
        </div>

        {/* Content */}
        <div ref={contentRef} className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate <span className="text-primary font-medium">Developer & UI/UX Designer</span> with 
                a unique blend of technical expertise and creative vision. I specialize in crafting 
                immersive digital experiences that seamlessly merge functionality with aesthetics.
              </p>
              <p>
                My journey spans across frontend development, backend integration, and design thinking. 
                I believe in the power of <span className="text-primary font-medium">clean code</span> and 
                <span className="text-primary font-medium"> beautiful interfaces</span> working together 
                to create memorable user experiences.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring the latest design trends, 
                experimenting with new technologies, and constantly pushing the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill.name}
                  variant="outline"
                  className="glass-panel border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 px-4 py-2 text-sm font-medium"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <div className="glass-panel p-6">
              <p className="text-muted-foreground mb-4">
                Ready to bring your ideas to life? Let's create something amazing together.
              </p>
              <button 
                className="neon-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;