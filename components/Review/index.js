import styles from "./review.module.css";

const Review = () => (
  <>
    <div className={styles.review}>
      <p className={styles.title}>Отзывы&nbsp;наших&nbsp;клиентов </p>
      <div className={styles.text}>
        Мне нравится Lumni, как избавление от расчетов и суммы оплаты. Раньше я
        ошибался в количестве часов и пару раз случайно забыл перевести няне
        деньги, ей приходилось напоминать мне о долгах, что было очень неприятно
        <p className={styles.author}>
          <img src="/img_avatar2.png" alt="Avatar" className={styles.avatar} />
          <span className={styles.name}>Константин Перов</span>
          <span className={styles.about}>Владелец BarbeAgency</span>
        </p>
      </div>
    </div>
  </>
);

export default Review;
