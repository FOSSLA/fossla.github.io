import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with Linux in Ladakh",
      excerpt: "A comprehensive beginner's guide to installing and using Linux distributions in the high-altitude environment of Ladakh.",
      author: "Tenzin Dorjay",
      date: "2024-01-15",
      category: "Tutorial",
      readTime: "8 min read",
    },
    {
      title: "FOSS LA Kickoff Event Success",
      excerpt: "Recap of our inaugural community meetup in Leh, where we brought together developers, students, and enthusiasts.",
      author: "Stanzin Angmo",
      date: "2024-01-10",
      category: "News",
      readTime: "5 min read",
    },
    {
      title: "Why Open Source Matters",
      excerpt: "Understanding the philosophy and real-world impact of free software, and why it's crucial for developing regions.",
      author: "Rigzin Namgyal",
      date: "2024-01-05",
      category: "Philosophy",
      readTime: "6 min read",
    },
    {
      title: "Building the Ladakhi Language Pack",
      excerpt: "Technical deep-dive into how we're bringing native language support to major software platforms.",
      author: "Padma Dolma",
      date: "2023-12-28",
      category: "Project Update",
      readTime: "10 min read",
    },
    {
      title: "Interview: Local Developer Making Waves",
      excerpt: "A conversation with one of Ladakh's rising open source contributors about their journey and vision.",
      author: "Sonam Wangchuk",
      date: "2023-12-20",
      category: "Interview",
      readTime: "12 min read",
    },
    {
      title: "Git Workshop Recap and Resources",
      excerpt: "Key takeaways from our recent Git workshop and additional learning resources for version control.",
      author: "Tenzin Dorjay",
      date: "2023-12-15",
      category: "Tutorial",
      readTime: "7 min read",
    },
  ];

  const categories = ["All", "Tutorial", "News", "Philosophy", "Project Update", "Interview"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tutorial":
        return "bg-primary/20 text-primary border-primary/30";
      case "News":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Philosophy":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Project Update":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Interview":
        return "bg-pink-500/20 text-pink-400 border-pink-500/30";
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
            Community <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground font-mono leading-relaxed">
            Stories, tutorials, and insights from the FOSS LA community
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="font-mono"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary/20 text-primary border-primary/30 font-mono text-xs">
                Featured
              </Badge>
              <Badge className={`${getCategoryColor(posts[0].category)} font-mono text-xs`}>
                {posts[0].category}
              </Badge>
            </div>
            <CardTitle className="font-mono text-3xl">{posts[0].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="font-mono text-base mb-4">
              {posts[0].excerpt}
            </CardDescription>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono mb-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span>{posts[0].author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{posts[0].date}</span>
              </div>
              <span>{posts[0].readTime}</span>
            </div>
            <Button className="font-mono group">
              Read Full Article
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-all group flex flex-col"
            >
              <CardHeader className="flex-grow">
                <Badge className={`${getCategoryColor(post.category)} font-mono text-xs w-fit mb-2`}>
                  {post.category}
                </Badge>
                <CardTitle className="font-mono group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-mono mb-4">
                  {post.excerpt}
                </CardDescription>
                <div className="flex flex-col gap-2 text-xs text-muted-foreground font-mono mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3 text-primary" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-primary" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to="#"
                  className="text-sm font-mono text-primary hover:text-terminal-glow transition-colors inline-flex items-center gap-1"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-mono">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
