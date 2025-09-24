import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  period: string;
  company: string;
  location: string;
  position: string;
  description: string[];
  technologies?: string[];
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      period: "Oct 2024 – August 2025",
      company: "Talentnest People Services Pvt Ltd",
      location: "Ghaziabad",
      position: "Software Developer Associate",
      description: [
        "Assisted in developing and maintaining web applications (frontend & backend)",
        "Collaborated with senior developers and UI/UX designers to enhance user experiences",
        "Learned and applied new technologies to contribute effectively to projects"
      ],
      technologies: ["React.js", "Node.js", "JavaScript", "UI/UX"]
    },
    {
      period: "Jul 2023 – feb 2024",
      company: "Ramaera Legal Infotech Private Limited",
      location: "Noida",
      position: "Software Developer",
      description: [
        "Built frontends using HTML, CSS, JavaScript, and React.js",
        "Collaborated closely with backend teams",
        "Delivered responsive and interactive user interfaces"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      period: "Jan 2023 – Jun 2023",
      company: "Digikull Private Limited",
      location: "Noida",
      position: "Frontend Developer Intern",
      description: [
        "Built frontends using HTML, CSS, JavaScript, and React.js",
        "Collaborated closely with backend teams",
        "Delivered responsive and interactive user interfaces"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      period: "Dec 2021 – Dec 2022",
      company: "BINATUNES PVT. Ltd",
      location: "Delhi",
      position: "UI / UX Designer & Developer",
      description: [
        "Learned teamwork in a professional environment",
        "Mastered core Photoshop and CorelDRAW",
        "Became familiar with Figma and Canva"
      ],
      technologies: ["Photoshop", "CorelDRAW", "Figma", "Canva"]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (!section || !timeline) return;

    // Animation for timeline items
    const items = timeline.querySelectorAll('.timeline-item');
    
    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, x: index % 2 === 0 ? -50 : 50 });
      
      gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="experience"
      ref={sectionRef}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
          Professional Journey
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          My experience across different companies, learning and growing as a 
          <span className="text-primary"> Developer & Designer</span>
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative">
        {/* Central line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-transparent opacity-50" />
        
        {/* Timeline Items */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background animate-pulse-glow z-10" />
              
              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <div className="glass-panel p-8 group hover:scale-105 transition-all duration-500 hover:bg-primary/5">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-glow mb-2">
                      {exp.position}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-lg font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div>
                      <p className="text-sm font-medium text-primary mb-3">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="floating-orb w-16 h-16 top-20 right-10" />
      <div className="floating-orb w-12 h-12 bottom-20 left-10" style={{ animationDelay: '-4s' }} />
    </section>
  );
};

export default Experience;