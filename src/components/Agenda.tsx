import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const schedule = [
  {
    day: "Day 1",
    title: "Foundations & Introduction",
    sessions: [
      { time: "09:00 - 10:30", topic: "Opening Keynote: The Future of AI in Software Engineering" },
      { time: "10:45 - 12:30", topic: "Introduction to Generative AI Models and Architectures" },
      { time: "14:00 - 16:00", topic: "Hands-on: Setting Up Your AI Development Environment" },
      { time: "16:15 - 17:30", topic: "Best Practices and Ethics in AI-Assisted Development" },
    ],
  },
  {
    day: "Day 2",
    title: "Advanced Applications",
    sessions: [
      { time: "09:00 - 11:00", topic: "Code Generation and Intelligent Code Completion" },
      { time: "11:15 - 13:00", topic: "AI-Powered Testing and Quality Assurance" },
      { time: "14:00 - 16:00", topic: "Workshop: Building Production-Ready AI Features" },
      { time: "16:15 - 17:30", topic: "Case Studies: Real-World AI Implementation Success Stories" },
    ],
  },
  {
    day: "Day 3",
    title: "Integration & Future",
    sessions: [
      { time: "09:00 - 11:00", topic: "Integrating AI into CI/CD Pipelines" },
      { time: "11:15 - 13:00", topic: "Performance Optimization and Scaling AI Solutions" },
      { time: "14:00 - 16:00", topic: "Final Project: Build Your AI-Enhanced Application" },
      { time: "16:15 - 17:30", topic: "Closing Panel: Future Trends and Q&A with Experts" },
    ],
  },
];

const Agenda = () => {
  return (
    <section className="py-24 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshop Agenda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three intensive days packed with learning, hands-on exercises, and networking opportunities
          </p>
        </div>
        
        <div className="space-y-8">
          {schedule.map((day, index) => (
            <Card key={index} className="overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-hero p-6 text-white">
                <h3 className="text-2xl font-bold">{day.day}</h3>
                <p className="text-white/90 text-lg mt-1">{day.title}</p>
              </div>
              
              <div className="p-6 space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <div 
                    key={sessionIndex}
                    className="flex gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-primary font-semibold min-w-[140px]">
                      <Clock className="w-5 h-5" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-card-foreground font-medium">{session.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            * Schedule subject to change. Coffee breaks and networking sessions included throughout each day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Agenda;