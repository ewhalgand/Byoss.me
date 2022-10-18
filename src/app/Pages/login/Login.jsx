import styles from "./login.module.scss";
import { SmallTitle } from "../../../utils/ui/Texts";

const Login = () => {
  return (
    <section className={styles.section}>
      <SmallTitle>Login</SmallTitle>
      <div className={styles.container}>
        <a href="https://api.byoss.me/login/discord">
          <img src="/img/icons/discord.svg" alt="icon" />
          <p>Login with Discord</p>
        </a>
        <a href="https://api.byoss.me/login/github">
          <img src="/img/icons/github.svg" alt="icon" />
          <p>Login with Github</p>
        </a>
        <a href="https://api.byoss.me/login/google">
        <img src="/img/icons/google.svg" alt="icon" />
          <p>Login with Google</p>
        </a>
      </div>
    </section>
  );
};

export default Login;