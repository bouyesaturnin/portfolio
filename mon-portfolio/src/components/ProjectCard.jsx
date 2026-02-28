

// const ProjectCard = ({ title, description, tags, link, github, image }) => {
//   return (
//     <div className="overflow-hidden transition-all duration-500 bg-white border border-gray-100 group rounded-3xl hover:shadow-2xl hover:-translate-y-2">
//       {/* Image du projet avec zoom au survol */}
//       <div className="relative h-56 overflow-hidden">
//         <img 
//           src={image} 
//           alt={title} 
//           className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 flex items-end p-6 transition-opacity opacity-0 bg-gradient-to-t from-gray-900/60 to-transparent group-hover:opacity-100">
//           <span className="font-medium text-white">Voir le projet</span>
//         </div>
//       </div>

//       {/* Contenu de la carte */}
//       <div className="p-8">
//         <div className="flex flex-wrap gap-2 mb-4">
//           {tags.map((tag, index) => (
//             <span key={index} className="px-3 py-1 text-xs font-semibold text-blue-600 rounded-full bg-blue-50">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <h3 className="mb-3 text-2xl font-bold text-gray-900">{title}</h3>
//         <p className="mb-6 italic text-gray-600 line-clamp-2">
//           {description}
//         </p>
        
//         <div className="flex items-center justify-between">
//           <a href={link} className="flex items-center gap-2 font-bold text-blue-600 transition hover:text-blue-700">
//             Démo Live <span>↗</span>
//           </a>
//           <a href={github} className="text-gray-400 transition hover:text-gray-900">
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
    <div className="overflow-hidden transition-all duration-500 bg-white border border-gray-100 group rounded-3xl hover:shadow-2xl hover:-translate-y-2">
      {/* Image du projet avec zoom au survol */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end p-6 transition-opacity opacity-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:opacity-100">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium text-white">
             Explorer le projet <span>→</span>
          </a>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-wider font-bold rounded-full border border-blue-100">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>
        
        <p className="mb-6 leading-relaxed text-gray-600 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-800"
          >
            DÉMO LIVE <span>↗</span>
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-gray-500 transition hover:text-black"
          >
            <span className="text-lg">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;