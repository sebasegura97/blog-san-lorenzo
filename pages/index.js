import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import ListCard from "../component/ListCard.js";
import Layout from "../component/Layout.js";

import { database } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home(props) {
  console.log("props.posts", props.posts);
  console.log("props.nombre", props.nombre);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="El mejor blog del mundo" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand"></link>
      </Head>
      <Layout>
        <div className={`${styles.fondo}`}>
          <div className={styles.titulo}>
            <h1 className={styles.hola}>Hola {props.nombre}</h1>
          </div>
          <pre className={styles.gracias}>
            {props.gracias}
          </pre>
        </div>
        <h1 className={styles.general}>General</h1>
        <div className={styles.articleListContainer}>
          
          <div className={styles.lista}>
            <ListCard listado={props.posts} />
          </div>
        </div>
      </Layout>
      
    </div>
  );
}

export const getServerSideProps = async () => {
  const rawData = await getDocs(collection(database, "posts"));
  const postsList = [];

  const nombreMario = "";
  const parrafo = 
  "Gracias por traerme hasta aqui.\n" + 
  "\Espero avanzar !más alla!\n" + 
  "\Y disfrutar el placer de ser parte\n" + 
  "\de este  Maravilloso Universo!";

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
