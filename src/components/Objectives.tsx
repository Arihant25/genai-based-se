import { Card } from "@/components/ui/card";
import { Target, Zap, Rocket, Award } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Technical Mastery",
    description: "Gain deep understanding of generative AI models, their capabilities, and limitations in software development contexts.",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Zap,
    title: "Productivity Enhancement",
    description: "Learn proven techniques to boost development speed and efficiency using AI-powered tools and automation.",
    color: "from-secondary to-primary",
  },
  {
    icon: Rocket,
    title: "Innovation Mindset",
    description: "Develop skills to identify opportunities for AI integration and drive innovation within your organization.",
    color: "from-accent to-primary-glow",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Enhance your career prospects with cutting-edge skills highly valued in the modern tech industry.",
    color: "from-primary-dark to-accent",
  },
];

const Objectives = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshop Objectives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our carefully designed curriculum focuses on delivering tangible skills and measurable outcomes
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-2 border-primary/10"
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${objective.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${objective.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {objective.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;