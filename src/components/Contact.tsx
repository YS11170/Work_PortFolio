import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (!section || !form || !info) return;

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Initial states
    gsap.set(form, { opacity: 0, x: 50 });
    gsap.set(info, { opacity: 0, x: -50 });

    tl.to(info, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out"
    })
    .to(form, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashsharma11170@gmail.com",
      link: "mailto:yashsharma11170@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 81789 78434",
      link: "tel:+918178978434"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi NCR, India",
      link: null
    }
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
      link: "www.linkedin.com/in/yashsharma3001"
    }
  ];

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
          Let's Create Together
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can bring your vision to life with 
          <span className="text-primary"> cutting-edge technology</span> and 
          <span className="text-primary"> exceptional design</span>.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div ref={infoRef} className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-glow">
              Get In Touch
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ready to start your next project? Whether you need a stunning website, 
              a mobile app, or just want to discuss ideas, I'm here to help transform 
              your concepts into reality.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="glass-panel p-6 group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-lg font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="glass-panel w-12 h-12 hover:scale-110 hover:border-primary transition-all duration-300"
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div ref={formRef}>
          <div className="glass-panel p-8">
            <h3 className="text-2xl font-bold mb-6 text-glow">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass-panel border-primary/30 focus:border-primary bg-background/50"
                  required
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glass-panel border-primary/30 focus:border-primary bg-background/50"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass-panel border-primary/30 focus:border-primary bg-background/50 min-h-[120px] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="neon-button w-full group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 p-4 glass-panel">
              <p className="text-sm text-muted-foreground text-center">
                ⚡ I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="floating-orb w-24 h-24 top-20 left-10" />
      <div className="floating-orb w-16 h-16 bottom-10 right-20" style={{ animationDelay: '-3s' }} />
    </section>
  );
};

export default Contact;