import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";
const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Shirajus Salekin Nabil</span>
          </h1>
          <p className="text__muted description">
          Experienced Full-Stack Developer with a passion for building robust, scalable, and user-centric applications across both frontend and backend. Proficient in modern web technologies, frameworks, and databases (MERN Stack), with expertise in blockchain development, Web3 integration, and smart contract writing. Adept at designing and implementing decentralized applications (dApps), optimizing system performance, and ensuring seamless interaction between smart contracts and frontend interfaces. Strong problem-solving skills, attention to detail, and a proven track record of delivering high-quality, secure, and efficient solutions in the evolving blockchain ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
