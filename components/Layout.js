import Head from "next/head";

import styles from "./layout.module.css";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Some Page Title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.container}>
      Some Layout Text
      {children}
    </div>
  </>
);

export default Layout;
