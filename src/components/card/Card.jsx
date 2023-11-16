import gitHub from "../../images/gitHub.svg";

const Card = ({ card }) => {
    return (
        <div className="project-card">
          <img src={card.img} alt={card.name} />
          <h3 className="project-name">{card.name}</h3>
          <p className="project-description">
            {card.description}
          </p>
          <div className="project-buttons">
            {card.site && <a
              type="button"
              href={card.site}
              target="_blank"
              rel="noreferrer"
              className="site-button"
            >
              Site
            </a>}
            <a
              type="button"
              href={card.github}
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              <img src={gitHub} alt="git-pic" />
            </a>
          </div>
          </div>
    )
}

export default Card;