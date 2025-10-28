import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Mail, Phone, FileText } from "lucide-react";

const tiers = [
  {
    name: "Early Bird",
    price: "$599",
    description: "Limited time offer",
    features: [
      "Full 3-day workshop access",
      "All workshop materials",
      "Certificate of completion",
      "Lunch and refreshments",
      "Access to online resources",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$799",
    description: "Most popular choice",
    features: [
      "Everything in Early Bird",
      "1-on-1 mentorship session",
      "Premium workshop kit",
      "Networking dinner access",
      "6 months community support",
      "Priority seating",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams of 5+",
    features: [
      "Everything in Professional",
      "Custom training modules",
      "On-site workshop option",
      "Dedicated support team",
      "Volume discounts available",
      "Post-workshop consulting",
    ],
    highlighted: false,
  },
];

const Registration = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Registration & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the package that best fits your needs and career goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative p-8 transition-all duration-300 hover:-translate-y-2 ${
                tier.highlighted 
                  ? 'border-primary border-2 shadow-glow bg-gradient-to-b from-card to-primary/5' 
                  : 'border-2 border-primary/10'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-hero text-white text-sm font-semibold rounded-full">
                  POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <div className="text-4xl font-bold text-primary mb-2">{tier.price}</div>
                {tier.price !== "Custom" && <p className="text-sm text-muted-foreground">per person</p>}
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.highlighted ? "hero" : "outline"} 
                className="w-full"
                size="lg"
              >
                {tier.price === "Custom" ? "Contact Us" : "Register Now"}
              </Button>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 md:p-12 bg-muted/30">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">Email</h4>
              <p className="text-muted-foreground">workshop@example.com</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">Phone</h4>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">Download</h4>
              <Button variant="link" className="text-primary">Full Proposal PDF</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Registration;