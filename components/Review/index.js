import styles from "./review.module.css";

const Review = () => (
  <>
    <div className={styles.review}>
      <p className={styles.title}>Отзывы наших клиентов </p>
      <div className={styles.text}>
        Мне нравится Lumni, потому что мы с командой, работая в разных странах,
        не выпадаем из рабочего процесса и успешно двигаемся вперед. Мне, как
        основателю, важно понимать, что происходит в командах, даже когда наша
        компания быстро расширяется.
        <p className={styles.author}>
          <img src="/img_avatar2.png" alt="Avatar" className={styles.avatar} />
          <span className={styles.name}>Константин Перов</span>
        </p>
      </div>
    </div>
  </>
);

export default Review;
