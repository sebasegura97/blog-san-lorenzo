import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import General from "../component/General.js";

import { database } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="El mejor blog del mundo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.fondo} ${styles.ancho}`}>
        <nav className={styles.navbar}>
          <span>
            Blog <span>de San Lorenzo</span>
          </span>
          <img src="Menu.svg" alt="Menu" />
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
        <h1 className={styles.ancho}>General</h1>
        <General />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const rawData = await getDocs(collection(database, "posts"));
  const postsList = [];

  rawData.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() });
  });

  return {
    props: {
      posts: postsList,
    },
  };
};
