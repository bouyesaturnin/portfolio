import image from "../assets/image12.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Décoration d'arrière-plan (Cercles flous) */}
      <div className="absolute w-64 h-64 bg-blue-100 rounded-full opacity-50 top-50 right-10 blur-3xl"></div>
      <div className="absolute bg-indigo-100 rounded-full opacity-50 bottom-10 left-10 w-72 h-72 blur-3xl"></div>

      <div className="relative z-10 grid items-center grid-cols-1 gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-2">
        
        {/* Colonne Gauche : Texte */}
        <div className="text-center lg:text-left">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-bold text-blue-600 rounded-full bg-blue-50">
            Disponible pour de nouveaux projets
          </span>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
            Développeur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Fullstack</span>
          </h1>
          <p className="max-w-lg mx-auto mb-8 text-xl text-gray-600 lg:mx-0">
            Spécialisé en <span className="font-bold text-gray-800">React</span> pour le front-end et <span className="font-bold text-gray-800">Django</span> pour le back-end. Je crée des solutions web complètes, de la base de données à l'interface.
          </p>

          {/* Boutons d'appel à l'action */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link to="/projects" className="px-8 py-4 font-bold text-white transition transform bg-gray-900 shadow-xl rounded-2xl hover:bg-gray-800 hover:-translate-y-1">
              Explorer mes projets
            </Link>
            <div className="flex items-center gap-4 px-4">
              <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
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
              className="relative z-10 object-cover w-full h-full transition duration-500 shadow-2xl rounded-3xl grayscale hover:grayscale-0"
            />
            {/* <p className="px-4 py-2 text-sm font-medium text-black shadow-lg  backdrop-blur-md">
              Saturnin Bouye
            </p> */}
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;