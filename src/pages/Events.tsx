import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Git & GitHub Workshop",
      date: "2024-02-10",
      time: "14:00 - 17:00",
      location: "Leh Community Center",
      type: "Workshop",
      attendees: 25,
      description: "Learn version control basics and collaborative development workflows.",
    },
    {
      title: "Monthly Community Meetup",
      date: "2024-02-15",
      time: "18:00 - 20:00",
      location: "Café Cloud, Leh",
      type: "Meetup",
      attendees: 40,
      description: "Networking, project updates, and lightning talks from community members.",
    },
    {
      title: "Hackathon: Build for Ladakh",
      date: "2024-03-01",
      time: "09:00 - 18:00",
      location: "TechHub Leh",
      type: "Hackathon",
      attendees: 50,
      description: "24-hour hackathon focused on creating solutions for local challenges.",
    },
  ];

  const pastEvents = [
    {
      title: "Linux Install Fest",
      date: "2024-01-20",
      location: "University Campus",
      type: "Workshop",
      attendees: 35,
    },
    {
      title: "FOSS LA Inaugural Meetup",
      date: "2024-01-05",
      location: "Leh",
      type: "Meetup",
      attendees: 30,
    },
    {
      title: "Open Source Philosophy Talk",
      date: "2023-12-15",
      location: "Online",
      type: "Webinar",
      attendees: 60,
    },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-primary/20 text-primary border-primary/30";
      case "Meetup":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Hackathon":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Webinar":
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
            Community <span className="text-primary">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground font-mono leading-relaxed">
            Join us for workshops, meetups, and collaborative learning experiences
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-mono mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`${getEventTypeColor(event.type)} font-mono text-xs`}>
                          {event.type}
                        </Badge>
                      </div>
                      <CardTitle className="font-mono text-2xl mb-2">{event.title}</CardTitle>
                      <CardDescription className="font-mono">{event.description}</CardDescription>
                    </div>
                    <Button className="font-mono whitespace-nowrap">Register Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 text-sm font-mono">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold font-mono mb-8">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <Badge className={`${getEventTypeColor(event.type)} font-mono text-xs w-fit mb-2`}>
                    {event.type}
                  </Badge>
                  <CardTitle className="font-mono">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.attendees} attended</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 max-w-4xl mx-auto p-8 border border-primary/30 rounded-lg bg-primary/5 text-center">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-mono font-bold mb-4">Want to Organize an Event?</h3>
          <p className="text-muted-foreground font-mono mb-6">
            Have an idea for a workshop, talk, or meetup? We'd love to help you make it happen.
          </p>
          <Button size="lg" className="font-mono">Propose an Event</Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
