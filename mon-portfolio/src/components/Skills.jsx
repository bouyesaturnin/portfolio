const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Conception d'interfaces modernes, réactives et centrées sur l'utilisateur.",
      techs: ["HTML/CSS", "Sass", "UI/UX Design", "React", "Next.js", "JavaScript", "Tailwind CSS", "Vite"],
      icon: "🎨"
    },
    {
      title: "Backend Development",
      description: "Architecture de serveurs robustes et gestion de bases de données sécurisées.",
      techs: ["Django", "Python", "PostgreSQL", "REST API"],
      icon: "⚙️"
    },
    {
      title: "DevOps & Cloud",
      description: "Déploiement continu et gestion des médias dans le cloud.",
      techs: ["Git/GitHub", "Docker", "Cloudinary", "Render"],
      icon: "🚀"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expertise Technique</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {skillCategories.map((cat, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{cat.title}</h3>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                {cat.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;