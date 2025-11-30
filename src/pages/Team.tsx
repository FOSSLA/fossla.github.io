import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, Users } from "lucide-react";

const Team = () => {
  const coreTeam = [
    {
      name: "Tenzin Dorjay",
      role: "Community Lead",
      bio: "Full-stack developer passionate about bringing technology to Ladakh",
      github: "https://github.com",
      twitter: "https://twitter.com",
      email: "tenzin@fossla.org",
    },
    {
      name: "Stanzin Angmo",
      role: "Technical Lead",
      bio: "Open source advocate with expertise in system architecture",
      github: "https://github.com",
      twitter: "https://twitter.com",
      email: "stanzin@fossla.org",
    },
    {
      name: "Rigzin Namgyal",
      role: "Content & Outreach",
      bio: "Writer and educator focused on making tech accessible",
      github: "https://github.com",
      twitter: "https://twitter.com",
      email: "rigzin@fossla.org",
    },
    {
      name: "Padma Dolma",
      role: "Localization Lead",
      bio: "Linguist working on Ladakhi language support in software",
      github: "https://github.com",
      twitter: "https://twitter.com",
      email: "padma@fossla.org",
    },
  ];

  const contributors = [
    "Sonam Wangchuk",
    "Tsering Angchuk",
    "Diskit Dolma",
    "Lobzang Dorjay",
    "Kunzang Chosdon",
    "Nawang Tsering",
    "Dechen Angmo",
    "Phuntsok Namgyal",
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            Meet the <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground font-mono leading-relaxed">
            The passionate individuals building and growing the FOSS LA community
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center">Core Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all group text-center"
              >
                <CardHeader>
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-mono font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <CardTitle className="font-mono">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-mono">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-mono mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      asChild
                    >
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      asChild
                    >
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      asChild
                    >
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Contributors */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center">Active Contributors</h2>
          <Card className="border-primary/30 bg-card/50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {contributors.map((contributor, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-mono font-bold text-primary">
                        {contributor.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <span className="text-sm font-mono">{contributor}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Join CTA */}
        <div className="max-w-4xl mx-auto p-8 border border-primary/30 rounded-lg bg-primary/5 text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-mono font-bold mb-4">Want to Join the Team?</h3>
          <p className="text-muted-foreground font-mono mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to contribute to our mission.
            Whether you're a developer, designer, writer, or organizer, there's a place for you.
          </p>
          <Button size="lg" className="font-mono">
            Get Involved
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Team;
