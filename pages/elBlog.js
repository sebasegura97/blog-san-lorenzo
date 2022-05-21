import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Layout from "../component/Layout.js";


export default function ElBlog(props) {
  console.log("props.posts", props.posts);
  console.log("props.nombre", props.nombre);

  return (
    <div className={styles.container}>
      <Head>
        <title>El Blogt</title>
        <meta name="description" content="Mi primer artículo" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand"></link>
      </Head>
      <Layout>
        <div className={`${styles.fondoPost}`}>

        </div>
        <div className={styles.articleListContainer}>
          

        </div>
      </Layout>
      
    </div>
  );
}


