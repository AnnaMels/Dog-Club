import { Swiper, SwiperSlide } from "swiper/react";
import css from "./Services.module.css";
import "swiper/css";

const Services = () => {
  return (
    <section className={css.services}>
      <div className="container">
        <h2 className="mobile_title title">Services category </h2>
        <div className={css.swiper_container}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              575: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
              1550: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className={css.slide}>
                <svg>
                  <use href="/images/icons.svg#icon-nutrition"></use>
                </svg>
                <p className={css.slide_text}>Nutrition</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={css.slide}>
                <svg>
                  <use href="/images/icons.svg#icon-bathing"></use>
                </svg>
                <p className={css.slide_text}>Bathing</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={css.slide}>
                <svg>
                  <use href="/images/icons.svg#icon-training"></use>
                </svg>
                <p className={css.slide_text}>Training</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={css.slide}>
                <svg>
                  <use href="/images/icons.svg#icon-grooming"></use>
                </svg>
                <p className={css.slide_text}>Grooming</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className={css.services_btn} type="button">
            more services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
