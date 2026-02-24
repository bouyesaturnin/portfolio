import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grille Principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1 : Identité */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Saturnin.dev
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Développeur Fullstack spécialisé en React et Django. 
              Je construis des solutions numériques performantes et centrées sur l'utilisateur.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 w-fit px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Disponible pour de nouveaux projets
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Accueil</Link></li>
              <li><Link to="/projects" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Projets</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">A Propos</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Services & Expertise */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Expertise</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-2">Développement Frontend (React)</li>
              <li className="flex items-center gap-2">Architecture Backend (Python/Django)</li>
              <li className="flex items-center gap-2">Gestion de bases de données</li>
              <li className="flex items-center gap-2">Optimisation & SEO</li>
            </ul>
          </div>

          {/* Colonne 4 : Contact & Localisation */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Me trouver</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <span className="block text-gray-900 font-medium">Localisation</span>
                Paris, France 28 Avenue Général Leclerc 94470 Boisy-Saint-Leger
              </li>
              <li>
                <span className="block text-gray-900 font-medium">Email</span>
                <a href="mailto:bouyesaturnin@yahoo.fr" className="hover:text-blue-600 break-all">
                  bouyesaturnin@yahoo.fr
                </a>
              </li>
              <li>
                <span className="block text-gray-900 font-medium">Telephone</span>
                <a href="mailto:bouyesaturnin@yahoo.fr" className="hover:text-blue-600 break-all">
                  0753811730
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de Réseaux Sociaux & Copyright */}
        <div className="border-t border-gray-100 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© {currentYear} Saturnin Bouye. Fait avec passion à Paris.</p>
              <p className="mt-1">Propulsé par React, Tailwind v4 & Cloudinary.</p>
            </div>

            {/* Réseaux Sociaux (Icons style) */}
            <div className="flex gap-4">
            
              <a href="https://github.com/..." target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-[#24292e] hover:text-white transition-all duration-300">
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
             </a>
              <a href="https://linkedin.com/in/..." target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                 <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;