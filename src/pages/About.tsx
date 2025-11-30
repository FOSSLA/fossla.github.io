import { Target, Heart, Globe, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Open & Inclusive",
      description: "We welcome everyone regardless of their technical background or experience level.",
    },
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize collaboration, knowledge sharing, and mutual growth.",
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "We encourage experimentation and creative problem-solving.",
    },
    {
      icon: Target,
      title: "Local Impact",
      description: "We focus on projects that benefit the Ladakh community.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            About <span className="text-primary">FOSS LA</span>
          </h1>
          <p className="text-xl text-muted-foreground font-mono leading-relaxed">
            FOSS LA is a grassroots community dedicated to promoting Free and Open Source Software
            in Ladakh, empowering local developers and creating technology solutions for our region.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-primary/30 bg-card/50">
            <CardHeader>
              <CardTitle className="font-mono text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-muted-foreground">
              <p>
                To build a thriving FOSS community in Ladakh by providing education, resources, and
                collaboration opportunities. We aim to make technology accessible to all and develop
                solutions that address local challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-card/50">
            <CardHeader>
              <CardTitle className="font-mono text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-muted-foreground">
              <p>
                A future where Ladakh is recognized as a hub for open source innovation, where every
                individual has the skills and resources to contribute to technology that serves
                humanity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-mono text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-mono">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold font-mono mb-8">Our Story</h2>
          <div className="space-y-6 text-muted-foreground font-mono">
            <p>
              FOSS LA was founded in 2024 by a group of passionate technologists who saw the need for
              a dedicated open source community in Ladakh. Inspired by the global FOSS movement and
              the unique challenges and opportunities in our region, we set out to create a space
              where learning, collaboration, and innovation could flourish.
            </p>
            <p>
              Starting with just a handful of members meeting in a small café in Leh, we've grown
              into a community of developers, students, educators, and enthusiasts who share a common
              goal: to harness the power of open source technology for the benefit of Ladakh.
            </p>
            <p>
              Today, we organize regular workshops, hackathons, and meetups. We've launched several
              projects aimed at solving local problems, from digitizing traditional knowledge to
              building tools for local language support in software. Our journey has just begun,
              and we invite you to be part of it.
            </p>
          </div>
        </div>

        {/* Code of Conduct Preview */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="font-mono text-2xl">Code of Conduct</CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-muted-foreground space-y-4">
              <p>
                FOSS LA is committed to providing a welcoming and inclusive environment for everyone.
                We expect all community members to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be respectful and considerate in communication</li>
                <li>Welcome newcomers and help them learn</li>
                <li>Focus on collaboration over competition</li>
                <li>Give credit where it's due</li>
                <li>Respect diverse perspectives and experiences</li>
              </ul>
              <p className="pt-4">
                Any behavior that contradicts these values will not be tolerated. We're here to
                build something amazing together.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
