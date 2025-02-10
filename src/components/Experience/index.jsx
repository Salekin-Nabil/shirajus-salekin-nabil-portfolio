import "./Experience.css";
import { experience } from "../../data";
import ExpCard from "../../ui/ExpCard";
const Experience = () => {
  return (
    <section id="experience">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Professional Experience</h2>
        </div>
        <div className="exp__container">
          {experience.map((list, index) => (
            <ExpCard {...list} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
