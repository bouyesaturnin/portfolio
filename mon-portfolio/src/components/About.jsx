import React from 'react';

const About = () => {
  const stats = [
    { label: "Années d'expérience", value: "4+" },
    { label: "Projets terminés", value: "15+" },
    { label: "Technologies maîtrisées", value: "10+" },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Colonne Gauche : Image/Design */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-blue-600 rotate-3 absolute inset-0 -z-10 opacity-10"></div>
            <div className="aspect-square rounded-2xl bg-white shadow-xl overflow-hidden border border-gray-100">
              {/* Remplace par une photo de toi ou une illustration tech */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                alt="Espace de travail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne Droite : Texte */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Passionné par le <span className="text-blue-600">Développement Fullstack</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Bonjour ! Je suis un développeur passionné par la création de solutions web 
              modernes et performantes. Mon expertise se situe à l'intersection du 
              <strong> Design</strong> et de la <strong>Logique technique</strong>.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Spécialisé dans l'écosystème <strong>React</strong> et <strong>Django</strong>, 
              j'aime transformer des idées complexes en interfaces simples et intuitives. 
              Mon objectif est toujours de fournir un code propre, maintenable et centré sur l'utilisateur.
            </p>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg"
            >
              Travaillons ensemble
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;