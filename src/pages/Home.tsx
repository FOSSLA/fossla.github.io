import { Link } from "react-router-dom";
import { Code2, Users, BookOpen, Calendar, ArrowRight, Terminal, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: Code2,
      title: "Open Source Projects",
      description: "Collaborate on projects that benefit the Ladakh community and beyond.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Learn from peers, share knowledge, and grow together.",
    },
    {
      icon: BookOpen,
      title: "Workshops & Training",
      description: "Regular sessions on FOSS technologies and best practices.",
    },
    {
      icon: Calendar,
      title: "Events & Meetups",
      description: "Hackathons, install-fests, and community gatherings.",
    },
  ];

  const recentPosts = [
    {
      title: "Getting Started with Linux in Ladakh",
      date: "2024-01-15",
      excerpt: "A beginner's guide to installing and using Linux distributions.",
      category: "Tutorial",
    },
    {
      title: "FOSS LA Kickoff Event Success",
      date: "2024-01-10",
      excerpt: "Recap of our inaugural community meetup in Leh.",
      category: "News",
    },
    {
      title: "Why Open Source Matters",
      date: "2024-01-05",
      excerpt: "Understanding the philosophy and impact of free software.",
      category: "Philosophy",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary">Open Source • Free Software • Community</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6 animate-fade-in">
            <span className="text-foreground">Welcome to </span>
            <span className="text-primary">FOSS LA</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-8 max-w-3xl mx-auto">
            Building a thriving Free and Open Source Software community in Ladakh
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-mono group">
              Join the Community
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="font-mono" asChild>
              <Link to="/projects">
                Explore Projects
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Active Members", value: "50+" },
              { label: "Projects", value: "12" },
              { label: "Events Held", value: "8" },
              { label: "Workshops", value: "15" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-mono text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
              Why <span className="text-primary">FOSS LA</span>?
            </h2>
            <p className="text-muted-foreground font-mono text-lg max-w-2xl mx-auto">
              We're building more than just software—we're building a community that empowers through technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all group hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-mono">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">Latest from the Blog</h2>
              <p className="text-muted-foreground font-mono">Stay updated with our community activities</p>
            </div>
            <Button variant="outline" className="font-mono" asChild>
              <Link to="/blog">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="font-mono group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-mono mb-4">{post.excerpt}</CardDescription>
                  <Link
                    to="/blog"
                    className="text-sm font-mono text-primary hover:text-terminal-glow transition-colors inline-flex items-center gap-1"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground font-mono text-lg mb-8 max-w-2xl mx-auto">
            Join our community of developers, students, and FOSS enthusiasts in Ladakh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-mono">
              Join Community
            </Button>
            <Button size="lg" variant="outline" className="font-mono" asChild>
              <Link to="/events">Attend an Event</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
