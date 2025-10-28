import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Objectives from "@/components/Objectives";
import Agenda from "@/components/Agenda";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <Objectives />
      <Agenda />
      <Registration />
      <Footer />
    </main>
  );
};

export default Index;
