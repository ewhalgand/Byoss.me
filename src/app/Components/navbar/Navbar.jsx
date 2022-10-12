import styles from "./navbar.module.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img className={styles.logo} src="/img/navbar/B.png" alt="Byoss logo" />
      </Link>
      <div className={styles.right}>
        <div className={styles.languages}>
          <span className={styles.toggleCountry}>
            <img
              src="/img/navbar/english-flag.png"
              alt="english language flag"
            />
          </span>
        </div>
        <Link className={styles.button} to="/login">
          <Icon icon="bx:log-in" className={styles.icon} />
          Se connecter
        </Link>
      </div>
    </nav>
  );
};

export default Home;