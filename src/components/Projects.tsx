
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
    // Add this to your existing projects array or modify an existing entry
    {
      id: 5,
      title: "Smart Parking Management System",
      description: "An intelligent parking management solution that uses computer vision to detect, track, and allocate parking spaces in real-time.",
      shortDescription: "Computer vision-powered parking management system", // For cards/previews
      technologies: ["Python", "PureBasic", "Computer Vision", "TkInter"],
      githubUrl: "https://github.com/Friendlydevil03/park9-main",
      date: "2023", // Update with actual date
      category: "Computer Vision",

      // Screenshots - adjust paths as needed for your portfolio structure
      mainImage: "/images/projects/parking-system/screenshot1.png",
      images: [
        {
          src: "/images/projects/parking-system/screenshot1.png",
          alt: "Dashboard view showing parking allocation"
        },
        {
          src: "/images/projects/parking-system/screenshot2.png",
          alt: "Vehicle detection in action"
        },
        {
          src: "/images/projects/parking-system/screenshot3.png",
          alt: "Statistics and reporting panel"
        },
        {
          src: "/images/projects/parking-system/screenshot4.png",
          alt: "Setup and configuration interface"
        }
      ],

      // Detailed information for the project page
      details: {
        overview: "This Smart Parking Management System leverages computer vision techniques to transform standard video feeds into intelligent parking solutions. The system can detect available spaces, track vehicles, and provide real-time statistics on parking usage.",

        features: [
          "Real-time vehicle detection using computer vision algorithms",
          "Automated parking space allocation to optimize space usage",
          "Dynamic visualization of parking availability",
          "Comprehensive statistics and usage reporting",
          "Support for multiple video sources including live camera feeds",
          "Configurable detection parameters for different environments"
        ],

        implementation: "Built using Python with TkInter for the UI and OpenCV for image processing. The application uses a modular architecture with separate components for detection, allocation, visualization, and monitoring. PureBasic was used for certain performance-critical components.",

        challenges: [
          "Implementing reliable vehicle detection in varying lighting conditions",
          "Creating efficient parking allocation algorithms for different lot types",
          "Building a responsive UI that updates in real-time without performance issues",
          "Managing concurrent processing of video feeds"
        ],

        learnings: "This project deepened my understanding of computer vision techniques and real-time processing. I learned how to optimize image processing algorithms for performance and how to design intuitive interfaces for complex monitoring systems."
      }
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
