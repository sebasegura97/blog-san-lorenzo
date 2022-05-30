import CorDial from "../component/CorDial";
import styles from "../styles/Home.module.css";

export default function Card(props) {
  return (
    <div className={`${styles.contraseña} `}>
      <div className={styles.contentImg}>
        <span className={styles.imgcover}>
          <a>
            <img className={styles.passwords} src={props.imagen} alt="passwords" />
          </a>
        </span>
      </div>
      <div className={styles.parrafo}>
        <a>
          <h2 className={styles.subtitulo}>{props.titulo}</h2>
        </a>
        <p className={styles.descripcion}>{props.descripcion}</p>
        <CorDial />
      </div>
    </div>
  );
}

