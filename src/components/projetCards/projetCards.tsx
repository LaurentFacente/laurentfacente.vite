import ProjectCard from "./projectCard/projectCard";
import "./projetCards.css";

const projects = [
  {
    title: "Reservia",
    description:
      "Intégration d'une maquette pour un site de planification de vacances nommé «Reservia».",
    imageUrl: "/reservia.png",
    techStack: ["HTML", "CSS"],
    url: "https://github.com/yourusername/project1",
  },
  {
    title: "Oh My Food",
    description:
      "Intégration de la maquette d'un site de foodtech nommé « Ohmyfood ».",
    imageUrl: "ohmyfood.png",
    techStack: ["HTML", "SCSS"],
    url: "https://github.com/yourusername/project1",
  },
  {
    title: "Kanap",
    description: "Développement d'un site e-commerce en JavaScript.",
    imageUrl: "kanap.png",
    techStack: ["Javascript", "CSS"],
    url: "https://github.com/yourusername/project1",
  },
  {
    title: "La chouette Agence",
    description:
      "Optimisation du SEO et de l'accessibilité d'un site existant.",
    imageUrl: "chouetteAgence.png",
    techStack: ["SEO", "Accessibilité"],
    url: "https://github.com/yourusername/project1",
  },
  {
    title: "Hot Takes",
    description: "Creation d'une API (architecture MVC) pour une Web APP.",
    imageUrl: "hottakes.png",
    techStack: ["Node.js", "Express", "MongoDB"],
    url: "https://github.com/yourusername/project1",
  },
  {
    title: "Groupomania",
    description:
      "Création d'un réseau social d’entreprise (FrontEnd et BackEnd). ",
    imageUrl: "groupomania.png",
    techStack: ["React", "Node.js", "MySQL"],
    url: "https://github.com/yourusername/project1",
  },
];

const ProjetsCards = () => {
  return (
    <div className='project-container'>
      <h2 className='project-title'>
        My <div className='violet-project'>projects</div>
      </h2>
      <div className='cards'>
        {projects.map((project) => (
          <ProjectCard
            url={project.url}
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjetsCards;
