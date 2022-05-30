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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand"></link>
      </Head>
      <Layout>
        <header>
          <div className={styles.fondo}>
            <span className={styles.span}>
              <svg className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="320"
                height="347"
                viewBox="0 0 320 347"
                fill="none">
                <g className={styles.g} >
                  <path
                      d="m 55.8246,282.433 c -12.8,-47.6 -75,-4 -112,0 -37,4 14.4999,-80 47.99996,-124.5 33.50004,-44.5 186.00044,-1.5 177.50044,77.5 -8.5,79 -100.7004,94.6 -113.5004,47 z"
                      fill="url(#paint0_radial_24_22)"
                      style={{fill:"url(#radialGradient860)"}} />
                  <path
                      d="m 225.488,113.156 c -15.124,-52.8548 -88.617,-4.442 -132.3349,0 C 49.4352,117.597 110.286,24.3245 149.868,-25.0877 189.451,-74.5 369.639,-26.7533 359.596,60.9674 349.553,148.688 240.612,166.01 225.488,113.156 Z"
                      fill="url(#paint1_radial_24_22)"
                      style={{fill:"url(#radialGradient862)"}} />
                  <path
                      d="m 331.488,317.156 c -15.124,-52.855 -88.617,-4.442 -132.335,0 -43.718,4.441 17.133,-88.831 56.715,-138.244 39.583,-49.412 219.771,-1.665 209.728,86.055 -10.043,87.721 -118.984,105.043 -134.108,52.189 z"
                      fill="url(#paint2_radial_24_22)"
                      style={{fill:"url(#radialGradient864)"}} />
                </g>
                <defs>
                  <radialGradient
                      id="paint0_radial_24_22"
                      cx="0"
                      cy="0"
                      r="1"
                      /* gradientUnits="userSpaceOnUse" */
                      gradientTransform="matrix(-131.8196,234.71735,-278.60042,-156.46477,368.844,112.283)">
                    <stop
                        offset="0"
                        stop-color= "#b27700" />
                    <stop
                        stop-color="#ffbf4c"
                        offset="1" />
                  </radialGradient>
                  <radialGradient
                      id="paint1_radial_24_22"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(-131.8196,234.71735,-278.60042,-156.46477,368.844,112.283)">
                    <stop
                        offset="0.09562337"
                        stop-color="#009bb2" />
                    <stop
                        offset="1"
                        stop-color="#4ceaff" />
                  </radialGradient>
                  <radialGradient
                      id="paint2_radial_24_22"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(-217.5,0,0,-270.263,415,253)">
                    <stop
                        offset="0.11508808"
                        stop-color="#b200b2" />
                    <stop
                        offset="1"
                        stop-color="#fa4cff" />
                  </radialGradient>
                  <radialGradient
                      href="#paint0_radial_24_22"
                      id="radialGradient860"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(153.92872,-52.413315,49.988903,146.80866,-240.75098,270.24986)"
                      cx="1.3081204"
                      cy="0.71761847"
                      r="1"
                      fx="1.3081204"
                      fy="0.71761847" />
                  <radialGradient
                      href="#paint1_radial_24_22"
                      id="radialGradient862"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(174.39548,-71.228294,60.563471,148.28372,18.029227,90.898347)"
                      cx="0.59521705"
                      cy="0.62011725"
                      r="1"
                      fx="0.59521705"
                      fy="0.62011725" />
                  <radialGradient
                    href="#paint2_radial_24_22"
                      id="radialGradient864"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(161.38666,-73.876789,66.186793,144.58757,196.68324,442.90733)"
                      cx="0.6363765"
                      cy="-0.34444663"
                      r="1"
                      fx="0.6363765"
                      fy="-0.34444663" />
                </defs>
              </svg>
            </span>
          </div>
          <div className={styles.fonText}>
            <div className={styles.titulo}>
              <h1 className={styles.hola}>Hola {props.nombre}</h1>
            </div>
            <p className={styles.gracias}>
              {props.gracias}
            </p>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.articleListContainer}>
            <h1 className={styles.general}>General</h1>
            <div className={styles.lista}>
              <ListCard listado={props.posts} />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  const rawData = await getDocs(collection(database, "posts"));
  const postsList = [];

  const nombreMario = "";
  const parrafo = 
  "Gracias por llegar aqui, espero que disfrutes del contenido tanto como yo haciéndolo!";

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




