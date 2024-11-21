import "./projectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  url: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  techStack,
  url,
}: ProjectCardProps) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='cardContainer'
    >
      <div className='cardContainer'>
        <div className='card'>
          <img
            className='thumb'
            src={imageUrl}
            alt='Project Thumbnail'
            style={{
              width: "100%",
              height: "150px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
          <div className='cardFooter'>
            <p className='project'>{title}</p>
            <p className='desc'>{description}</p>
            <p className='techno'>{techStack.join(", ")}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
