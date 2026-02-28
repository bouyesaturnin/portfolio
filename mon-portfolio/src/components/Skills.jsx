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
      <div className="px-6 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Expertise Technique</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid justify-center grid-cols-1 gap-8 md:grid-cols-3">
          {skillCategories.map((cat, index) => (
            <div key={index} className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-xl group">
              <div className="inline-block mb-6 text-4xl transition-transform duration-300 group-hover:scale-110">
                {cat.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{cat.title}</h3>
              <p className="mb-8 text-sm leading-relaxed text-gray-600">
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