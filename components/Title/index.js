import classnames from "classnames";

import styles from "./title.module.css";

const Title = ({ text, center, size }) => (
  <span
    className={classnames(styles.title, {
      [styles.titleCenter]: center,
      [styles.titleSmallSize]: size === "small",
      [styles.titleMediumSize]: size === "medium",
      [styles.titleLargeSize]: size === "large",
    })}
  >
    {text}
  </span>
);

export default Title;
