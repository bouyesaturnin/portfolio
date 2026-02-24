import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Ton Logo ou Prénom */}
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          MonPortfolio
        </div>

        {/* Liens de navigation */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition">Accueil</Link>
           <Link to="/about" className="hover:text-blue-600 transition">À Propos</Link>
          {/* <Link to="/skills" className="hover:text-blue-600 transition">Compétences</Link> */}
          <Link to="/projects" className="hover:text-blue-600 transition">Projets</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Bouton d'action */}
      
       <a 
         href="/cv1.pdf?v=1" // Le ?v=1 force le navigateur à recharger le fichier
         download="Mon_CV.pdf"
         className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200 ml-4"
         >
              Télécharger CV
       </a>
      </div>
    </nav>
  );
};

export default Navbar;