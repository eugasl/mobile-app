import styles from "./orderedlist.module.css";

const OrderedList = () => (
  <ol className={styles.list}>
    <li className={`${styles.item} ${styles.item1}`}>
      <span className={styles.title}>Проверки</span>
      <p className={styles.text}>
        Каждый соискатель проходит проверку благонадежности по базам
        компрометирующий информации и "черным спискам"
      </p>
    </li>
    <li className={`${styles.item} ${styles.item2}`}>
      <span className={styles.title}>Собеседование</span>
      <p className={styles.text}>
        Все сотрудники проходят личное собеседование с оценкой навыков и
        мотивации к труду.
      </p>
    </li>
    <li className={`${styles.item} ${styles.item3}`}>
      <span className={styles.title}>Отзывы</span>
      <p className={styles.text}>
        Собираем отзывы после каждого задания, следим за выгоранем работников и
        контролируем качество оказания услуг.
      </p>
    </li>
  </ol>
);

export default OrderedList;
