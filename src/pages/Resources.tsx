import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Video, FileText, Code } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Linux Journey",
      description: "Comprehensive guide to learning Linux from scratch",
      url: "https://linuxjourney.com",
      category: "Tutorial",
      icon: BookOpen,
    },
    {
      title: "Git Documentation",
      description: "Official Git documentation and tutorials",
      url: "https://git-scm.com/doc",
      category: "Documentation",
      icon: FileText,
    },
    {
      title: "FreeCodeCamp",
      description: "Free coding bootcamp with certificates",
      url: "https://freecodecamp.org",
      category: "Learning Platform",
      icon: Code,
    },
    {
      title: "The Linux Foundation",
      description: "Free and paid courses on open source technologies",
      url: "https://training.linuxfoundation.org",
      category: "Courses",
      icon: Video,
    },
    {
      title: "Open Source Guide",
      description: "How to contribute to open source projects",
      url: "https://opensource.guide",
      category: "Documentation",
      icon: BookOpen,
    },
    {
      title: "MDN Web Docs",
      description: "Resources for developers, by developers",
      url: "https://developer.mozilla.org",
      category: "Documentation",
      icon: FileText,
    },
  ];

  const localResources = [
    {
      title: "FOSS LA Handbook",
      description: "Community guidelines and getting started guide",
      type: "PDF",
    },
    {
      title: "Workshop Materials",
      description: "Slides and resources from past workshops",
      type: "Archive",
    },
    {
      title: "Project Templates",
      description: "Starter templates for common project types",
      type: "Repository",
    },
  ];

  const tools = [
    { name: "VS Code", description: "Code editor", category: "Editor" },
    { name: "Ubuntu", description: "Linux distribution", category: "OS" },
    { name: "Docker", description: "Containerization", category: "DevOps" },
    { name: "PostgreSQL", description: "Database", category: "Database" },
    { name: "React", description: "UI library", category: "Frontend" },
    { name: "Python", description: "Programming language", category: "Language" },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Tutorial: "bg-primary/20 text-primary border-primary/30",
      Documentation: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Learning Platform": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Courses: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            Learning <span className="text-primary">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground font-mono leading-relaxed">
            Curated tools, documentation, and learning materials for your FOSS journey
          </p>
        </div>

        {/* External Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8">External Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge className={`${getCategoryColor(resource.category)} font-mono text-xs`}>
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="font-mono group-hover:text-primary transition-colors">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-mono mb-4">
                      {resource.description}
                    </CardDescription>
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono w-full group"
                      asChild
                    >
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visit Resource
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Local Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8">Community Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {localResources.map((resource, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30 font-mono text-xs">
                      {resource.type}
                    </Badge>
                  </div>
                  <CardTitle className="font-mono">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-mono mb-4">
                    {resource.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="font-mono w-full">
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Tools */}
        <div>
          <h2 className="text-3xl font-bold font-mono mb-8">Recommended FOSS Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-mono text-lg">{tool.name}</CardTitle>
                    <Badge className="bg-secondary text-foreground font-mono text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-mono text-sm">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
