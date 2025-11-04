import { Card } from "@/components/ui/card";
import { Mail, Building2 } from "lucide-react";

const organizers = [
  {
    name: "Lalit Mohan Sanagavarapu",
    title: "Chief Product Officer",
    org: "Quick Heal Technologies Ltd",
    location: "Pune, India",
    bio: "27+ years of experience in Cyber Security and building large scale systems. 40+ publications and 2 patents.",
  },
  {
    name: "Raveendra Kumar Medicherla",
    title: "Principal Scientist",
    org: "TCS Research",
    location: "Hyderabad, India",
    bio: "28+ years in software services delivery and research. Focus on Symbolic, Generative AI, and Neuro symbolic techniques.",
  },
  {
    name: "Vibhu Saujanya Sharma",
    title: "Innovation Principal Director",
    org: "Accenture Labs",
    location: "Bangalore, India",
    bio: "20+ years experience. 60+ publications, 75+ granted patents. Focus on green software engineering and Gen AI in SE.",
  },
  {
    name: "Ravindra Naik",
    title: "Professor of Practice",
    org: "COEP Technological University",
    location: "Pune, India",
    bio: "36+ years in industry research around IT system transformations. 24+ publications and 10+ unique patents.",
  },
  {
    name: "Karthik Vaidhyanathan",
    title: "Assistant Professor",
    org: "IIIT-Hyderabad",
    location: "Hyderabad, India",
    bio: "Software Engineering Research Center. Focus on intersection of software architecture and machine learning.",
  },
];

const Organizers = () => {
  return (
    <section className="py-24 px-6 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshop Organizers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Distinguished experts from academia and industry leading this workshop
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((organizer, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-card-foreground mb-1">
                  {organizer.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{organizer.title}</p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-1">
                  <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{organizer.org}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{organizer.location}</p>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {organizer.bio}
              </p>
              
              <a 
                href={`mailto:${organizer.email}`}
                className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="break-all">{organizer.email}</span>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
