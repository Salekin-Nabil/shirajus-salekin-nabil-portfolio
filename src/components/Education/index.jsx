import "swiper/css";
import "./Education.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { educations } from "../../data";
import { Autoplay } from "swiper/modules";
import { PiCertificateBold } from "react-icons/pi";

const Education = () => {
  return (
    <section id="educations">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Academics & Certificates</h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          autoplay={true}
          speed={3000}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{ 700: { slidesPerView: 2 } }}
        >
          {educations.map(({ avatar, name, role, review, certificate }, index) => (
            <SwiperSlide className="card education" key={index}>
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <h3 className="name">{role}</h3>
              <p className="text__muted role">{name}</p>
              <a href={certificate} target="_blank"><p className="text__muted review shine">{review} <PiCertificateBold className="stack"/></p></a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Education;
