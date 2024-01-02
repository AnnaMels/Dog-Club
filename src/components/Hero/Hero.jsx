import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className="container">
        <div className={css.hero_content_wrapper}>
          <div className={css.text_content_wrapper}>
            <h1 className="mobile_title hero-title">
              Taking care for your Smart Dog!
            </h1>
            <p className={css.hero_text}>
              Human–canine bonding is the relationship between dogs and humans
            </p>
            <button className="button">Explore More</button>
          </div>
          <img
            className={css.hero_image}
            src="/images/hero-dog.png"
            alt="Dog"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
