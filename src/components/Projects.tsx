import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'Frontend' | 'UI/UX' | 'Full Stack';
  image: string;
  links: {
    demo?: string;
    github?: string;
  };
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "CraveIt - Food Delivery App",
      description: "Modern food delivery interface with vibrant orange design and smooth user experience. Features menu browsing, ordering system, and responsive layout.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "UI/UX Design"],
      category: "Frontend",
      image: "https://plus.unsplash.com/premium_photo-1743169049314-0666e8e35ca3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      links: {
        demo: "https://mycraeveit.netlify.app/",
        // github: "#"
      }
    },
    {
      title: "EduVerse - Education Platform",
      description: "Comprehensive educational platform with clean design and intuitive navigation. Features course management, student portal, and responsive design.",
      technologies: ["React.js", "Javascript", "Tailwind CSS", "UI/UX Design"],
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      links: {
        demo: "https://eduverse001.netlify.app/",
        // github: "#"
      }
    },
    {
      title: "FinTech Mobile App UI",
      description: "Modern banking and financial app interface with glassmorphic design, animated interactions, and premium user experience.",
      technologies: ["Figma", "Sketch", "Prototyping", "UI/UX Design" , "React Native"],
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      links: {
        demo: "https://www.figma.com/proto/1e2W60OuBNwwSBKJm7rJDm/Transferme-Banking-Financial-App?t=cGmgd6VK3XnghSJY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=0-689"
      }
    },
    {
      title: "Corporate Consulting Website",
      description: "Professional consulting website with modern design, service showcases, and lead generation forms. Built for enterprise clients.",
      technologies: ["React.js", "Tailwind CSS", "Design System" , "JavaScript" , "MYSQL"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      links: {
        demo: "https://www.talentnestpeopleservices.com/",
        // github: "#"
      }
    },
    {
      title: "HBR Pay - Finance App UI",
      description: "Sleek financial application with green branding, mobile-first design, and intuitive payment flows. Emphasizes security and ease of use.",
      technologies: ["React Native", "UI/UX Design", "Prototyping", "Figma"],
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      links: {
        demo: "https://www.figma.com/proto/LglEpDFkj9rfHZSycaMCXT/HBA-PAY?node-id=0-1&t=AKnpXWZJjCsYVvpx-1"
      }
    },
    {
      title: "Talent Management Dashboard",
      description: "Professional talent management platform with data visualization, user profiles, and comprehensive analytics for HR teams.",
      technologies: ["React.js", "Node.js", "JavaScript", "REST API" , "Mongo DB"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      links: {
        demo: "https://app.unigrowtalent.com/",
        // github: "#"
      }
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    const cards = grid.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
      gsap.set(card, { opacity: 0, y: 50, scale: 0.9 });
      
      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'text-blue-400 border-blue-400/30';
      case 'UI/UX': return 'text-purple-400 border-purple-400/30';
      case 'Full Stack': return 'text-green-400 border-green-400/30';
      default: return 'text-primary border-primary/30';
    }
  };

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
          Featured Projects
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A showcase of my best work combining{' '}
          <span className="text-primary">development expertise</span> and{' '}
          <span className="text-primary">design creativity</span>
        </p>
      </div>

      {/* Projects Grid */}
      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card glass-panel group hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 text-xs rounded-full border ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-glow group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                {project.links.demo && (
                  <Button 
                    size="sm"
                    className="neon-button flex-1"
                    onClick={() => window.open(project.links.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button 
                    size="sm"
                    variant="outline"
                    className="glass-panel border-primary/30 text-foreground hover:border-primary"
                    onClick={() => window.open(project.links.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="glass-panel p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-glow">
            Want to see more?
          </h3>
          <p className="text-muted-foreground mb-6">
            These are just a few highlights. I have many more projects showcasing different 
            technologies and design approaches.
          </p>
          <Button 
            className="neon-button"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="floating-orb w-20 h-20 top-10 right-10" />
      <div className="floating-orb w-14 h-14 bottom-20 left-20" style={{ animationDelay: '-5s' }} />
    </section>
  );
};

export default Projects;