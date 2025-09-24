import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      link: "https://linkedin.com"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:yashsharma11170@gmail.com"
    }
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-primary/20">
      {/* Background elements */}
      <div className="absolute inset-0 cosmic-grid opacity-20" />
      <div className="floating-orb w-32 h-32 top-10 left-10" />
      <div className="floating-orb w-20 h-20 bottom-10 right-20" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-glow">
              Yash Sharma
            </h3>
            <p className="text-muted-foreground">
              Developer & Designer crafting digital experiences that blend 
              <span className="text-primary"> creativity with code</span>.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="glass-panel w-10 h-10 hover:scale-110 hover:border-primary transition-all duration-300"
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    <IconComponent className="w-4 h-4" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">
              Get In Touch
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <p>yashsharma11170@gmail.com</p>
              <p>+91 81789 78434</p>
              <p>Delhi NCR, India</p>
            </div>
            <Button 
              className="neon-button"
              onClick={() => scrollToSection('contact')}
            >
              Start a Project
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © {currentYear} Yash Sharma. All rights reserved.
            </p>
            <p className="text-muted-foreground text-center md:text-right flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and lots of ☕
            </p>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
    </footer>
  );
};

export default Footer;