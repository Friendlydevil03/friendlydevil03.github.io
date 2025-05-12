
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Project One",
      category: "Application Development",
      description: "A smart vechile parking system using python and flask",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      category: "Web Application",
      description: "A web applcation for fuel payment using rfid built with React Native",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      category: "Web Application",
      description: "A web application for phising detection websites ",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "#",
    },
    {
      id: 4,
      title: "Project Four",
      category: "UI/UX Design",
      description: "A UI/UX design project for a web application",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#",
    },
      // Add this to your existing projects array
    {
      id: "smart-parking-system",
      title: "Smart Parking Management System",
      description: "An intelligent parking management solution built with Python and TkInter that uses computer vision to detect, track, and allocate parking spaces in real-time.",
      technologies: ["Python", "PureBasic", "Computer Vision", "TkInter"],
      githubUrl: "https://github.com/Friendlydevil03/park9-main",
      imageUrl: "/images/parking-system.png", // You'll need to add this image to your portfolio
      features: [
        "Real-time vehicle detection and tracking",
        "Automated parking space allocation",
        "Comprehensive statistics and reporting",
        "User-friendly monitoring dashboard",
        "Multiple video source support"
      ],
      challenges: [
        "Implementing reliable computer vision algorithms for varying light conditions",
        "Designing efficient parking space allocation algorithms",
        "Creating a responsive and intuitive user interface"
      ],
      category: "Computer Vision",
      date: "2023" // Update with the actual date
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.remove('opacity-0');
                // Ensure elements stay visible after animation
                setTimeout(() => {
                  card.classList.add('opacity-100');
                }, 500);
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = projectsRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="projects" className="bg-dark/80 py-20">
      <div className="section-container">
        <AnimatedText 
          text="My Projects" 
          className="section-title"
          element="h2"
        />
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card opacity-0 group relative overflow-hidden rounded-lg card-hover bg-light/5 border border-light/10"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-highlight text-sm">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-light/70 mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-highlight hover:text-highlight/80 transition-colors duration-300"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                "flex items-end justify-start p-6"
              )}>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#" className="btn-primary">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
