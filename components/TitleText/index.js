import classnames from "classnames";

import styles from "./titletext.module.css";

const TitleText = ({ title, children, center }) => (
  <>
    {title && <div className={styles.title}>{title}</div>}
    <p className={classnames(styles.text, { [styles.textCenter]: center })}>
      {children}
    </p>
  </>
);

export default TitleText;
