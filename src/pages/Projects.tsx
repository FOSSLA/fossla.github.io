import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ladakhi Language Pack",
      description: "Open source language support for Ladakhi in major operating systems and applications.",
      status: "Active",
      techStack: ["Python", "Unicode", "i18n"],
      github: "https://github.com/fossla/ladakhi-lang",
      contributors: 8,
    },
    {
      title: "Community Portal",
      description: "A web platform for local communities to share news, events, and resources.",
      status: "In Development",
      techStack: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/fossla/community-portal",
      contributors: 5,
    },
    {
      title: "Mountain Weather API",
      description: "Open API providing weather data specific to mountain regions of Ladakh.",
      status: "Active",
      techStack: ["Python", "FastAPI", "Docker"],
      github: "https://github.com/fossla/weather-api",
      contributors: 3,
    },
    {
      title: "Digital Heritage Archive",
      description: "Preserving Ladakhi culture through digitization of traditional knowledge and artifacts.",
      status: "Planning",
      techStack: ["Next.js", "MongoDB", "S3"],
      github: "https://github.com/fossla/heritage-archive",
      contributors: 4,
    },
    {
      title: "EduTech Platform",
      description: "Open source learning management system tailored for remote education in Ladakh.",
      status: "Active",
      techStack: ["Vue.js", "Django", "Redis"],
      github: "https://github.com/fossla/edutech",
      contributors: 6,
    },
    {
      title: "Tourism Info Hub",
      description: "Collaborative platform for sharing authentic tourism information about Ladakh.",
      status: "In Development",
      techStack: ["TypeScript", "GraphQL", "PostgreSQL"],
      github: "https://github.com/fossla/tourism-hub",
      contributors: 7,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-primary/20 text-primary border-primary/30";
      case "In Development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Planning":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground font-mono leading-relaxed">
            Explore the open source projects we're building to solve local challenges and contribute to the global FOSS ecosystem
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mb-16 p-6 border border-primary/30 rounded-lg bg-primary/5 text-center">
          <Code2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-mono font-bold mb-2">Have a Project Idea?</h3>
          <p className="text-muted-foreground font-mono mb-4">
            We're always looking for new projects that can benefit our community
          </p>
          <Button className="font-mono">Propose a Project</Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-all group flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${getStatusColor(project.status)} font-mono text-xs`}>
                    {project.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    {project.contributors} contributors
                  </span>
                </div>
                <CardTitle className="font-mono group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="font-mono mb-4 flex-grow">
                  {project.description}
                </CardDescription>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
