import Head from "next/head";
import styles from "../styles/Home.module.css";

import General from "../component/General.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="El mejor blog del mundo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.fondo}`}>
        <nav className={styles.navbar}>
          <span>
            Blog <span>de San Lorenzo</span>
          </span>
          <button className={styles.button}>
            <img src="Menu.svg" alt="Menu"/>
          </button>
        </nav>
        <div>
          <h1 className={styles.hola}>Hola</h1>
          <p className={styles.gracias}>
            Gracias por llegar aqui, espero que disfrutes del contenido tanto
            como yo haciéndolo!
          </p>
        </div>
      </div>

      <div className={styles.articleListContainer}>
        <h1>General</h1>
        <General />
      </div>
    </div>
  );
}
