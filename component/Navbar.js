import styles from "../styles/Home.module.css";
import Link from "next/link";


function Navbar(props) {
  return (
    <>
        <nav className= {`"navbar navbar-expand-lg navbar-light bg-light" ${styles.navbar}`}>
          <Link href="/">
            <a className="navbar-brand">
              <span>
                Blog <span>de San Lorenzo</span>
              </span>
            </a>
          </Link>
          <button
            className={`"navbar-toggler" ${styles.button}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="Menu.svg" alt="Menu"/>
          </button>
          <div className={`"collapse navbar-collapse" ${styles.navigation}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/elBlog">
                <a className="nav-linkx">
                  El Blog
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#">
                <a className="nav-linkx">
                  Otro
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;