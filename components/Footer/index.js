import { Nav } from "react-bootstrap";
import Link from "next/link";

import styles from "./footer.module.css";

const Footer = () => (
  <>
    <nav className={styles.footer}>
      <Nav fill>
        <Nav.Item className={styles.home}>
          <Link href="/">
            <Nav.Link href="/">
              <span
                className={`${styles["icon-link-box"]} ${styles["icon-link-box-home"]}`}
              >
                <span className={styles["icon-link-text"]}>Главная</span>
              </span>
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item className={styles.home}>
          <Link href="/orders">
            <Nav.Link href="/orders">
              <span
                className={`${styles["icon-link-box"]} ${styles["icon-link-box-orders"]}`}
              >
                <span className={styles["icon-link-text"]}>Заказы</span>
              </span>
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item className={styles.home}>
          <Link href="/balance">
            <Nav.Link href="/balance">
              <span
                className={`${styles["icon-link-box"]} ${styles["icon-link-box-money"]}`}
              >
                <span className={styles["icon-link-text"]}>Баланс</span>
              </span>
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item className={styles.home}>
          <Link href="/discover">
            <Nav.Link href="/discover">
              <span
                className={`${styles["icon-link-box"]} ${styles["icon-link-box-gps"]}`}
              >
                <span className={styles["icon-link-text"]}>Где няня</span>
              </span>
            </Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
    </nav>
  </>
);

export default Footer;
