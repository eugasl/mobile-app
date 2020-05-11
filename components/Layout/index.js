import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./layout.module.css";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Some Page Title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer />
  </>
);

export default Layout;
