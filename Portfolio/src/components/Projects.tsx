import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food-Cookie",
      description: "A modern, responsive food ordering interface built with React. Designed with clean UI/UX principles.",
      image: "/food.png",
      technologies: ["React", "Tailwind css", "Vite", "Reasposive UI"],
      liveUrl: "https://foodcookie.netlify.app/",
      githubUrl: 'https://github.com/aalihassanofficial/Food-cookie',
    },
    {
      id: 2,
      title: "AI 2.0 — Voice-Powered Virtual Assistant (React + Gemini API)",
      description: "AI 2.0 is a voice-powered virtual assistant built with React Vite and Gemini AI.",
      image: "/ai.png",
      technologies: ["React.js", "Vite", "Tailwind css", "Gemini Api"],
      liveUrl: "https://aaiichatbot.netlify.app/",
      githubUrl: "https://github.com/aalihassanofficial/AI"
      
    },
    {
      id: 3,
      title: "3d Model Website",
      description: "Interactive 3D React website powered by a Spline model for immersive user experiences.",
      image: "/3d.png",
      technologies: [ "React.js" , "Spline 3D", "Tailwind css"],
      liveUrl: "https://3d-websiite.netlify.app",
      githubUrl: "https://github.com/aalihassanofficial/3D-Website",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work demonstrating expertise across different 
            technologies and problem domains.
          </p>
        </div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden card-hover bg-card/50 backdrop-blur border-border/50">
                <div  className="relative overflow-hidden">
                  <img src={project.image} alt={project.title}  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
 />
                  <div  className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p  className="text-muted-foreground line-clamp-3">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech}  className="text-xs  ">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                 
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="hover:bg-secondary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10 glow-on-hover"
            asChild
          >
            <a href="https://github.com/aalihassanofficial?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;