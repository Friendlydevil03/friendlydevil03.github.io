
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = skillsRef.current?.children;
    if (elements) {
      Array.from(elements).forEach((element, i) => {
        // Add staggered delay to each element
        if (element instanceof HTMLElement) {
          element.style.transitionDelay = `${i * 0.1}s`;
          observer.observe(element);
        }
      });
    }

    return () => {
      if (elements) {
        Array.from(elements).forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-highlight/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-highlight/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-highlight/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <p className="text-highlight mb-3 font-medium animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-heading animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="text-light">Your Name</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light/70 mb-6 font-heading animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            I create digital experiences
          </h2>
          <p className="text-light/60 text-lg mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            I'm a passionate [your profession] specializing in building exceptional 
            digital experiences. With a focus on [your skills], I bring creative 
            solutions to complex problems.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <Button asChild className="btn-primary">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-light border border-light/30 hover:bg-light/5">
              <a href="#about">
                About Me
              </a>
            </Button>
          </div>

          <div ref={skillsRef} className="flex flex-wrap gap-3 opacity-0">
            {["JavaScript", "React", "TypeScript", "Node.js", "UI/UX Design"].map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 rounded-full text-sm bg-light/10 text-light/80 border border-light/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-light/50 hover:text-highlight transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
