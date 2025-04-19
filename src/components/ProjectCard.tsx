const ProjectCard = () => {
  return (
    <div className="project-card__container">

      {/* card */}
      <div className="project-card">
        <div className="project-card__image">
          <img
            src="/src/images/hotview-labs.png"
            alt="Project Thumbnail"
            className="project-card__thumbnail"
          />
        </div>
        <div className="project-card__content">
          <h3 className="project-card__title">HotView Labs</h3>
          <p className="project-card__description">
           HotView Labs is a platform that provides a suite of tools and resources
          </p>
          <a href="#" className="project-card__link">
            View Project
          </a>
        </div>
      </div>

      {/* card */}
      <div className="project-card">
        <div className="project-card__image">
          <img
            src="/src/images/museum.png"
            alt="Project Thumbnail"
            className="project-card__thumbnail"
          />
        </div>
        <div className="project-card__content">
          <h3 className="project-card__title">Hamar Museum</h3>
          <p className="project-card__description">
            Hamar museum is a project that showcases the history and culture of
          </p>
          <a href="#" className="project-card__link">
            View Project
          </a>
        </div>
      </div>
          
        {/* card */}
      <div className="project-card">
        <div className="project-card__image">
          <img
            src="/src/images/rainy-dayz.png"
            alt="Project Thumbnail"
            className="project-card__thumbnail"
          />
        </div>
        <div className="project-card__content">
          <h3 className="project-card__title">Rainy Days</h3>
          <p className="project-card__description">
            Rainy Days clothing is a project that focuses on sustainable fashion
           
          </p>
          <a href="#" className="project-card__link">
            View Project
          </a>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card__image">
          <img
            src="/src/images/rainy-dayz.png"
            alt="Project Thumbnail"
            className="project-card__thumbnail"
          />
        </div>
        <div className="project-card__content">
          <h3 className="project-card__title">Rainy Days</h3>
          <p className="project-card__description">
            Rainy Days clothing is a project that focuses on sustainable fashion
           
          </p>
          <a href="#" className="project-card__link">
            View Project
          </a>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card__image">
          <img
            src="/src/images/rainy-dayz.png"
            alt="Project Thumbnail"
            className="project-card__thumbnail"
          />
        </div>
        <div className="project-card__content">
          <h3 className="project-card__title">Rainy Days</h3>
          <p className="project-card__description">
            Rainy Days clothing is a project that focuses on sustainable fashion
           
          </p>
          <a href="#" className="project-card__link">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
