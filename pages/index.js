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
        <header>
          <div className={styles.fondo}>
            <span className={styles.span}>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                width= "320"
                height="347"
                viewBox="0 0 320 347"> 
                <g className={styles.g}>
                  <path d="M55.8246 282.433C43.0246 234.833 -19.1754 278.433 -56.1754 282.433C-93.1754 286.433 -41.6755 202.433 -8.17544 157.933C25.3246 113.433 177.825 156.433 169.325 235.433C160.825 314.433 68.6246 330.033 55.8246 282.433Z" fill="url(#paint0_radial_24_22)"/>
                  <path d="M225.488 113.156C210.364 60.3012 136.871 108.714 93.1531 113.156C49.4352 117.597 110.286 24.3245 149.868 -25.0877C189.451 -74.5 369.639 -26.7533 359.596 60.9674C349.553 148.688 240.612 166.01 225.488 113.156Z" fill="url(#paint1_radial_24_22)"/>
                  <path d="M331.488 317.156C316.364 264.301 242.871 312.714 199.153 317.156C155.435 321.597 216.286 228.325 255.868 178.912C295.451 129.5 475.639 177.247 465.596 264.967C455.553 352.688 346.612 370.01 331.488 317.156Z" fill="url(#paint2_radial_24_22)"/>
                </g>
                <defs
                  id="defs23">
                  <radialGradient
                    id="paint0_radial_24_22"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-131.8196,234.71735,-278.60042,-156.46477,368.844,112.283)">
                    <stop
                      stopColor="#FFD057"
                      id="stop8" />
                    <stop
                      offset="1"
                      stopColor="#E6A604"
                      id="stop10" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_24_22"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-131.8196,234.71735,-278.60042,-156.46477,368.844,112.283)">
                    <stop
                      offset="0.244792"
                      stopColor="#07C5DF"
                      id="stop13" />
                    <stop
                      offset="1"
                      stopColor="#26E4FF"
                      id="stop15" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_24_22"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-217.5,0,0,-270.263,415,253)">
                    <stop
                      offset="0.630208"
                      stopColor="#CB0CCE"
                      id="stop18" />
                    <stop
                      offset="1"
                      stopColor="#FA00FF"
                      id="stop20" />
                  </radialGradient>
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
        <main>
          <h1 className={styles.general}>General</h1>
          <div className={styles.articleListContainer}>
            
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



