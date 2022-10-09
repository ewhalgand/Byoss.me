import styles from "./navbar.module.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <a className={styles.logo}>
          <img src="/img/navbar/B.png" alt="Byoss logo" />
        </a>
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
        <Link className={styles.button} to="/">
          <Icon icon="bx:log-in" className={styles.icon} />
          Login in
        </Link>
      </div>
    </nav>
  );
};

export default Home;