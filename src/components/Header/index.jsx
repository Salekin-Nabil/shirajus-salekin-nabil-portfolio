import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1, profile2, profile3, profile4, profile5, profile6 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";
const code = `
const developer = {
  firstName:"Shirajus Salekin",
  lastName:"Nabil"
  aka:"Mr Salekin",
  hobby:repeat = () =>{
   //eat();
   //sleep();
   //code();
   //repaet();
   }
}
`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile3} className="profile__photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
            I architect scalable, decentralized solutions that bridge blockchain innovation with seamless full-stack experiences, ensuring security, efficiency, and impact for users worldwide.
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
