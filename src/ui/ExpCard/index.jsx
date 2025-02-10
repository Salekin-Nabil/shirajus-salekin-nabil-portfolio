import "./ExpCard.css"
import { BsCalendar2Day } from "react-icons/bs";

const ExpCard = ({company, logo, role, date, location, data}) => {
  return (
    <div className="card exp__card">
      <h3 className="title">
        <span className="g-text">{company}</span>
      </h3>
      <h5 className="location">
        <span className="shine">{location}</span>
      </h5>
      <div className="exp__card-top">
        <div className="picture">
          <img src={logo} alt=""/>
        </div>
      </div>
      <h3 className="role g-text">{role}</h3>
      <p className="shine date"><BsCalendar2Day/> {date}</p>
      <div className="exp__content">
        <ul>
        {data.map((list,index)=>(
            <article className="flex exp__details" key={index}>
                <div>
                    <li className="shine responsibility">{list.responsibility}</li>
                </div>
            </article>
        ))} </ul>
      </div>
    </div>
  )
}

export default ExpCard
