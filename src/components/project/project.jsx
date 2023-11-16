import cards from "../../data/data";
import Card from "../card/Card";

const Project = () => {
  return (
    <div className="section" id="projects">
      <p className="above-section">
        <span className="dash">-</span>
        projects
      </p>
      <h3 className="title-section">Featured Portfolios</h3>
      <div className="projects-container">
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Project;
