import "swiper/css";
import "./Awards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { awards } from "../../data";
import { Autoplay } from "swiper/modules";
import { PiCertificateBold } from "react-icons/pi";

const Awards = () => {
  return (
    <section id="awards">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Achievements & Awards</h2>
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
          {awards.map(({ avatar, name, fact, description, certificate }, index) => (
            <SwiperSlide className="card education" key={index}>
              <div className="award__card-top">
                <div className="picture">
                  <img src={avatar} alt=""/>
                </div>
              </div>
              <h3 className="name">{fact}</h3>
              <p className="text__muted role">{name}</p>
              <a href={certificate} target="_blank"><p className="text__muted review shine">{description} <PiCertificateBold className="stack"/></p></a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Awards;
