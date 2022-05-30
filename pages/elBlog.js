import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import Layout from "../component/Layout.js";


export default function ElBlog(props) {
  console.log("props.posts", props.posts);
  console.log("props.nombre", props.nombre);

  return (
    <div className={styles.container}>
      <Head>
        <title>El Blog</title>
        <meta name="description" content="Mi primer artículo" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Red Hat Mono"></link>
      </Head>
      <Layout>
        <header className={styles.headerElBlog}>
          <Image
            className= {styles.imgHero}
            alt="imagen svg"
            src={"/postCover.png"}
            layout="fill"
            quality={100}
          />
        </header>
        <main className={styles.mainElBlog}>
          <h1 className={styles.mainH1}>
            El Blog
          </h1>
          <p className={styles.mainP}>
            En este artículo te cuento como está construido este blog, que tecnologías utilizo por qué las elegí y que problemas tuve durante la construcción. Este articulo será redactado y mantenido mientras el proyecto este en desarrollo (no solo en su primera versión), por lo que te mostraré de el proceso principio a fin.
          </p>
          <h2 className={styles.mainH2}>
            Motivación
          </h2>
          <div className={styles.mainPol}>
            Hace unos años que quiero empezar a escribir un blog, tengo varias motivaciones pero las mas importantes son 3: 
            <br/>
            <br/>
            <ol className={styles.mainol}>
              <li>
                <p><b>Compartir</b> aunque sea un poquito de información, honesta transparente y desinteresada que pueda  ayudar a alguien más, como a mi me ayudo internet casi toda mi vida.</p>
              </li>
              <li>
                <p><b>Escribir</b> es un cable a tierra, me ayuda a organizar pensamientos y entenderme a mi mismo, no todos deberían compartir lo que escriben, pero todos deberían escribir.</p>
              </li>
              <li>
              <p><b>Divertirme,</b> encarar un proyecto nuevo siempre me apasionó y si bien no tengo ningún tipo de expectativa más allá que compartir escribir y divertirme no puedo evitar pensar en grande.</p>
              </li>
            </ol>
          </div>
          <h2 className={styles.mainH2}>
            El objetivo
          </h2>
          <p className={styles.mainP}>
            Al momento de escribir estas lineas, no tengo idea cuanto dinero podría generar un blog, menos aún este, lo que genere será donado a una fundación benéfica.
          </p>

        </main>
      </Layout>
      
    </div>
  );
}


