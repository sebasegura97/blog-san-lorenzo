import styles from "../styles/Home.module.css";


export default function Footer(props) {
  return (
    <>
        <footer className={styles.footer}>
            <p className={styles.footerParrafo}>
            Este es un proyecto incipiente y sin animos de lucro. El objetivo es aportar un granito de arena en la divulgacion de conocimiento tecnologico. El resultado de la publicidad sera donado a una organizacion benefica.
            </p>
            <div className={styles.redesSociales}>
            <a>
            <img src="facebook.svg" alt="icono facebook" />
            </a>
            <a>
            <img src="LinkedIn.svg" alt="icon LinkedIn" />
            </a>
            <a>
            <img src="Instagram.svg" alt="icon Instagram" />
            </a>
            </div>
        </footer>
    </>
  );
}
