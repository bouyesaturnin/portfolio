import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 border-t border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Grille Principale */}
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Colonne 1 : Identité */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
              Sbouye@dev.com
            </h2>
            <p className="text-sm leading-relaxed text-gray-500">
              Développeur Fullstack spécialisé en React et Django. 
              Je construis des solutions numériques performantes et centrées sur l'utilisateur.
            </p>
            <div className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-green-600 rounded-full bg-green-50 w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Disponible pour de nouveaux projets
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div>
            <h3 className="mb-6 font-semibold text-gray-900">Navigation</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="inline-block transition-all hover:text-blue-600 hover:translate-x-1">Accueil</Link></li>
              <li><Link to="/projects" className="inline-block transition-all hover:text-blue-600 hover:translate-x-1">Projets</Link></li>
              <li><Link to="/about" className="inline-block transition-all hover:text-blue-600 hover:translate-x-1">A Propos</Link></li>
              <li><Link to="/contact" className="inline-block transition-all hover:text-blue-600 hover:translate-x-1">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Services & Expertise */}
          <div>
            <h3 className="mb-6 font-semibold text-gray-900">Expertise</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-2">Développement Frontend (React)</li>
              <li className="flex items-center gap-2">Architecture Backend (Python/Django)</li>
              <li className="flex items-center gap-2">Gestion de bases de données</li>
              <li className="flex items-center gap-2">Optimisation & SEO</li>
            </ul>
          </div>

          {/* Colonne 4 : Contact & Localisation */}
          <div>
            <h3 className="mb-6 font-semibold text-gray-900">Me trouver</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <span className="block font-medium text-gray-900">Localisation</span>
                Paris, France 28 Avenue Général Leclerc 94470 Boisy-Saint-Leger
              </li>
              <li>
                <span className="block font-medium text-gray-900">Email</span>
                <a href="mailto:bouyesaturnin@yahoo.fr" className="break-all hover:text-blue-600">
                  bouyesaturnin@yahoo.fr
                </a>
              </li>
              <li>
                <span className="block font-medium text-gray-900">Telephone</span>
                <a href="mailto:bouyesaturnin@yahoo.fr" className="break-all hover:text-blue-600">
                  0753811730
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de Réseaux Sociaux & Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-100">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            
            {/* Copyright */}
            <div className="m-auto text-sm text-center text-gray-400 md:text-left">
              <p>© {currentYear} Saturnin Bouye. Fait avec passion à Paris. Propulsé par React, Tailwind v4 & Cloudinary.</p>
              /
            </div>

            {/* Réseaux Sociaux (Icons style) */}
            <div className="flex gap-4">
            
              <a href="https://github.com/..." target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-[#24292e] hover:text-white transition-all duration-300">
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
             </a>
              <a href="https://linkedin.com/in/..." target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                 <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a href="https://linkedin.com/in/..." target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                 <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
              <a href="https://linkedin.com/in/..." target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-[#ff0000] hover:text-white transition-all duration-300">
                 <FontAwesomeIcon icon={faYoutube} className="text-xl" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;