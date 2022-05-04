import styles from "../styles/Home.module.css";

function Contraseñas(props) {
  return (
    <div className={`${styles.ancho} ${styles.contraseña} `}>
      <div>
        <img className={styles.passwords} src={props.imagen} alt="passwords" />
        <div className={styles.parrafo}>
          <h3>{props.titulo}</h3>
          <p>{props.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default Contraseñas;
