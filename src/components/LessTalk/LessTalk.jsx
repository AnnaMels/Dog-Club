import css from "./LessTalk.module.css";

const LessTalk = () => {
  return (
    <section>
      <div className="container">
        <div className={css.content_wrapper}>
          <img
            className={css.less_talk_img}
            src="/images/less-talk-img.png"
            alt="Dog"
          />
          <div className={css.text_wrapper}>
            <h2 className="mobile_title title">Less talk and more walk</h2>
            <p className={css.less_talk_text}>
              Sometimes our career, lifestyle, or routines can make it difficult
              to provide your pet with the recommended amount of exercise that
              they need. Which is why, it’s okay to use an extra hand in walking
              dogs so they are in perfect shape, mentally and physically.
            </p>
            <div className={css.button_wrapper}>
              <button className="button">Explore more</button>
              <button className={css.learn_more_btn}>
                <img src="/images/video-btn.svg" alt="" />
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LessTalk;
