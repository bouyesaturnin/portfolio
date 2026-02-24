

// const ProjectCard = ({ title, description, tags, link, github, image }) => {
//   return (
//     <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//       {/* Image du projet avec zoom au survol */}
//       <div className="relative h-56 overflow-hidden">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
//           <span className="text-white font-medium">Voir le projet</span>
//         </div>
//       </div>

//       {/* Contenu de la carte */}
//       <div className="p-8">
//         <div className="flex gap-2 mb-4 flex-wrap">
//           {tags.map((tag, index) => (
//             <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
//         <p className="text-gray-600 mb-6 line-clamp-2 italic">
//           {description}
//         </p>
        
//         <div className="flex items-center justify-between">
//           <a href={link} className="font-bold text-blue-600 hover:text-blue-700 transition flex items-center gap-2">
//             Démo Live <span>↗</span>
//           </a>
//           <a href={github} className="text-gray-400 hover:text-gray-900 transition">
//              GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React from 'react';

const ProjectCard = ({ title, description, tags, link, github, image }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Image du projet avec zoom au survol */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-white font-medium flex items-center gap-2">
             Explorer le projet <span>→</span>
          </a>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-8">
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-wider font-bold rounded-full border border-blue-100">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-blue-600 hover:text-blue-800 transition flex items-center gap-2 text-sm"
          >
            DÉMO LIVE <span>↗</span>
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-500 hover:text-black transition text-sm font-medium"
          >
            <span className="text-lg">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;