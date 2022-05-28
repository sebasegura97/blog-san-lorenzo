import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import General from "../components/General.js";

import { database } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home(props) {
  console.log("props.posts", props.posts);
  console.log("props.nombre", props.nombre);

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
            <img src="Menu.svg" alt="Menu" />
          </button>
        </nav>
        <div className={styles.titulo}>
          <h1 className={styles.hola}>Hola {props.nombre}</h1>
        </div>
        <p className={styles.gracias}>
          {props.gracias}
        </p>
      </div>
      <div className={styles.articleListContainer}>
        <h1 className={styles.hola}>General</h1>
        <div className={styles.lista}>
          <General listado={props.posts} />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const rawData = await getDocs(collection(database, "posts"));
  const postsList = [];

  const nombreMario = "Seba!";
  const parrafo = 
  `Gracias por traerme hasta aqui. 
  Espero (de ha poco) avanzar  más alla..!! 
  Y disfrutar el placer de ser parte 
  de este maravilloso universo!`;

  rawData.forEach((doc) => {
  postsList.push({ id: doc.id, ...doc.data() });
  });

  return {
    props: {
      posts: postsList,
      nombre: nombreMario,
      gracias: parrafo
    },
  };
};
