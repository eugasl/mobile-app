import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import styles from "./footer.module.css";

const Footer = () => (
    <>
      <nav className={styles.footer}>
      <Nav fill>
          <Nav.Item className={styles.home}>
            <Nav.Link href="/home">
              <span
                className={`${styles["icon-link-box"]} ${styles["icon-link-box-home"]}`}
              >
                <span className={styles["icon-link-text"]}>Новости</span>
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.home}>
            <Nav.Link>
              <span
                className={`${styles["icon-link-box"]} ${styles["icon-link-box-orders"]}`}
              >
                <span className={styles["icon-link-text"]}>Заказы</span>
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.home}>
            <Nav.Link>
              <span
                className={`${styles["icon-link-box"]} ${styles["icon-link-box-money"]}`}
              >
                <span className={styles["icon-link-text"]}>Баланс</span>
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.home}>
            <Nav.Link>
              <span
                className={`${styles["icon-link-box"]} ${styles["icon-link-box-gps"]}`}
              >
                <span className={styles["icon-link-text"]}>Где няня</span>
              </span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
    </>
);

export default Footer;
