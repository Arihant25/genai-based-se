const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Workshop 2026</h3>
            <p className="text-white/80 leading-relaxed">
              Advancing software engineering through generative AI education and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#objectives" className="hover:text-white transition-colors">Objectives</a></li>
              <li><a href="#agenda" className="hover:text-white transition-colors">Agenda</a></li>
              <li><a href="#registration" className="hover:text-white transition-colors">Registration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-white/70">
          <p>&copy; 2026 Generative AI & Software Engineering Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;