import styles from "./login.module.scss";
import { SmallTitle } from "../../../utils/ui/Texts";

const Login = () => {
  return (
    <section className={styles.section}>
      <SmallTitle>Login</SmallTitle>
      <div className={styles.container}>
        <a href="#">
          <img src="/img/icons/discord.svg" alt="icon" />
          <p>Login with Discord</p>
        </a>
        <a href="#">
          <img src="/img/icons/github.svg" alt="icon" />
          <p>Login with Github</p>
        </a>
        <a href="#">
          <p>Login with Google</p>
        </a>
      </div>
    </section>
  );
};

export default Login;
