import styles from './titletext.module.css';

const TitleText = ({ title, children }) => (
  <>
    <div className={styles.title}>{title}</div>
    <p className={styles.text}>{children}</p>
  </>
);

export default TitleText;
