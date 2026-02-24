import image from "../assets/image12.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Décoration d'arrière-plan (Cercles flous) */}
      <div className="absolute top-50 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Colonne Gauche : Texte */}
        <div className="text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4">
            Disponible pour de nouveaux projets
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Développeur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Fullstack</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Spécialisé en <span className="font-bold text-gray-800">React</span> pour le front-end et <span className="font-bold text-gray-800">Django</span> pour le back-end. Je crée des solutions web complètes, de la base de données à l'interface.
          </p>

          {/* Boutons d'appel à l'action */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="/projects" className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition transform hover:-translate-y-1 shadow-xl">
              Explorer mes projets
            </Link>
            <div className="flex items-center gap-4 px-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-500">Actuellement en freelance</span>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Image/Visuel */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Cadre décoratif */}
            <div className="absolute inset-0 border-2 border-gray-100 rounded-3xl rotate-6"></div>
            <div className="absolute inset-0 bg-gray-50 rounded-3xl -rotate-3"></div>
            
            {/* Image réelle */}
            <img 
              src={image} 
              alt="Portrait" 
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition duration-500"
            />
            {/* <p className=" text-black font-medium px-4 py-2 text-sm   backdrop-blur-md shadow-lg">
              Saturnin Bouye
            </p> */}
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;