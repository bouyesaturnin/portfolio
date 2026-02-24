import ProjectCard from './ProjectCard';

const Projects = () => {
  const myProjects = [
    // ... copie tous tes objets ici
    
    {
      title: "Blog Interactif Fullstack",
      description: "Un système de gestion d'articles avec recherche dynamique, commentaires et authentification JWT.",
      tags: ["React", "Django", "PostgreSQL"],
      image: "/image10.jpg",
      link: "#",
      github: "#"
    },
    {
      title: "E-commerce Dashboard",
      description: "Interface d'administration pour gérer des stocks et visualiser des statistiques de vente.",
      tags: ["React", "Vite", "Chart.js", "Tailwind"],
      image: "/image3.jpg",
      link: "#",
      github: "#"
    },
     {
      title: "Portfolio Personnel",
      description: "Un portfolio moderne et responsive pour présenter mes compétences et projets.",
      tags: ["React", "Vite", "Framer Motion"],
      image: "/image4.jpg",
      link: "#",
      github: "#"
    },
    {
      title: "Blog Interactif Fullstack",
      description: "Un système de gestion de personnels de santé  et de malades avec une recherche dynamique, commentaires et authentification JWT.",
      tags: ["React", "Django", "Tailwind", "PostgreSQL", "Cloudinary"],
      image: "/image5.jpg",
      link: "#",
      github: "#"
    },
    {
      title: "EcoShop - Plateforme E-commerce",
      description: "Une boutique en ligne complète avec gestion du panier, filtrage des produits par catégorie et intégration de paiements sécurisés.",
      tags: ["React", "Vite", "Tailwind", "Stripe", "Django"],
      image: "/image2.jpg",
      link: "#",
      github: "#"
    },
     {
      title: "DevPulse - Blog pour Développeurs",
      description: "Une application de partage d'articles permettant aux utilisateurs de publier, commenter et aimer des posts en temps réel.",
      tags: ["Django", "React", "PostgreSQL", "Cloudinary", "Tailwind"],
      image: "/image1.jpg",
      link: "#",
      github: "#"
    },
    // Ajoute d'autres projets ici
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Réalisations</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Voici quelques-uns des projets sur lesquels j'ai travaillé récemment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;