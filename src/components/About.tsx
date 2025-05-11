
import { useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";

interface Skill {
  name: string;
  percentage: number;
}

const About = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const skills: Skill[] = [
    { name: "Web Development", percentage: 90 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "Mobile Development", percentage: 75 },
    { name: "Backend Development", percentage: 80 },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
              if (bar instanceof HTMLElement) {
                setTimeout(() => {
                  bar.style.width = `${skills[index].percentage}%`;
                }, index * 200);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = skillsRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [skills]);

  return (
    <section id="about" className="bg-dark py-20">
      <div className="section-container">
        <AnimatedText 
          text="About Me" 
          className="section-title"
          element="h2"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <AnimatedText 
              text="Get to know me!" 
              className="text-2xl font-bold"
              element="h3"
            />
            
            <div className="space-y-4">
              <p className="text-light/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                I'm a passionate [Your Profession] with a strong foundation in [Your Key Skills]. 
                My journey in this field began [brief background story].
              </p>
              <p className="text-light/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                I specialize in creating [what you create] that not only look great but also solve real problems. 
                My approach combines [your strengths] with a deep understanding of [industry knowledge].
              </p>
              <p className="text-light/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                When I'm not coding or designing, you can find me [your hobbies/interests]. 
                I believe that these activities help me bring a fresh perspective to my work.
              </p>
            </div>
            
            <div className="pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
            </div>
          </div>
          
          <div>
            <AnimatedText 
              text="My Skills" 
              className="text-2xl font-bold mb-8"
              element="h3"
            />
            
            <div ref={skillsRef} className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-light/80">{skill.name}</span>
                    <span className="text-highlight">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
              {["JavaScript", "React", "Node.js", "TypeScript", "CSS/SCSS", "UI/UX"].map((tech, index) => (
                <div 
                  key={tech} 
                  className="bg-light/5 border border-light/10 rounded-lg p-3 text-center opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
