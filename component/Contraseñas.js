import styles from "../styles/Home.module.css";

function Contraseñas(props) {
  return (
    <div className={`${styles.contraseña} `}>
      {/* <div> */}
        <div className={styles.contentImg}>
          <img className={styles.passwords} src={props.imagen} alt="passwords" />
        </div>
        <div className={styles.parrafo}>
          <h2 className={styles.subtitulo}>{props.titulo}</h2>
          <p className={styles.descripcion}>{props.descripcion}</p>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Contraseñas;
