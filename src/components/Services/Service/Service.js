import React, { useEffect, useState } from "react";
//css
import styles from "./Service.module.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//images
import pocket from "../../../images/Pockets/marmita2.jpg";
import desserts from "../../../images/Desserts/sobremesas2.png";

const Service = ({
  title,
  subtitle,
  section1Title,
  section1,
  section2Title,
  section2,
  data,
}) => {
  const [slidesPerView, setSlidePerView] = useState(0);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 965) {
        setSlidePerView(3);
      } else {
        setSlidePerView(6);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.service}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <Swiper
        navigation={true}
        className={styles.mySwiper}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className={styles.slideItem} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.subtitle}>
        <p>{subtitle}</p>
      </div>

      <div className={styles.section}>
        <div className={styles.section_list}>
          <div>
            <div className={styles.section_title}>{section1Title}</div>
            {section1}
          </div>
        </div>
        <div className={styles.section_list}>
          <div>
            <div className={styles.section_title}>{section2Title}</div>
            {section2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
