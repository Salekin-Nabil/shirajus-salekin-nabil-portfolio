import { Link } from "react-scroll";
import Pyramid from "../Pyramid";
import { AiFillGithub} from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretSquareRight } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ title, category, image, description, demoLink, github_client, github_server, stacks }) => {
  return (
    <div className="card project__card">
      <div className="project__card-top">
        <div className="picture">
          <img src={image} alt=""/>
        </div>
      </div>
      <div className="project__card-bottom">
        <div className="flex project__info">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div>
            <h3 className="title">{title}</h3>
            <p className="text__muted category">{category}</p>
          </div>
        </div>
        <div className="flex demo">
          <a href={github_client} target="_blank" className="github">Frontend: <AiFillGithub className="stack" /></a>
          <a href={github_server} target="_blank" className="github">Backend: <AiFillGithub className="stack" /></a>
        </div>
        <p className="text__muted description">{description}</p>
        <div className="flex__center stacks">
          {stacks.map((stack, index) => (
            <div className="stack" key={index}>
              <img src={stack.logo} alt="" />
            </div>
          ))}
        </div>
        {/* <div className="flex__center demo">
          <a href={github_client} target="_blank" className="github">Frontend: <AiFillGithub className="stack" /></a>
          <a href={github_server} target="_blank" className="github">Backend: <AiFillGithub className="stack" /></a>
        </div> */}
        <a href={demoLink} target="_blank" className="flex__center demo shine bigger">Live Demo <FaCaretRight className="github"/></a>
      </div>
    </div>
  );
};

export default ProjectCard;
