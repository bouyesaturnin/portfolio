import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-7xl">
        {/* Ton Logo ou Prénom */}
        <Link to="/" className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
          MonPortfolio
        </Link>

        {/* Liens de navigation */}
        <div className="hidden space-x-8 text-sm font-medium text-gray-600 md:flex">
          <Link to="/" className="transition hover:text-blue-600">Accueil</Link>
           <Link to="/about" className="transition hover:text-blue-600">À Propos</Link>
          {/* <Link to="/skills" className="transition hover:text-blue-600">Compétences</Link> */}
          <Link to="/projects" className="transition hover:text-blue-600">Projets</Link>
          <Link to="/contact" className="transition hover:text-blue-600">Contact</Link>
        </div>

        {/* Bouton d'action */}
      
       <a 
         href="/cv1.pdf?v=1" // Le ?v=1 force le navigateur à recharger le fichier
         download="Mon_CV.pdf"
         className="px-5 py-2 ml-4 text-sm font-semibold text-white transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 shadow-blue-200"
         >
              Télécharger CV
       </a>
      </div>
    </nav>
  );
};

export default Navbar;