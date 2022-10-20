import styles from "./footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  let data = [
    {
      id: 1,
      icon: "/img/icons/insta.svg",
      link: "https://www.instagram.com/byoss.me/",
    },
    {
      id: 2,
      icon: "/img/icons/twitter.svg",
      link: "https://twitter.com/Byoss_me",
    },
    {
      id: 3,
      icon: "/img/icons/discord.svg",
      link: "https://discord.gg/4vBcYhD3TZ",
    },
  ];
  return (
    <footer>
      <div className={styles.left}>
        <img className={styles.title} src="/img/footer/title.png" alt="title" />
        <p>Une biographie en ligne simple et efficace</p>
        <div className={styles.icons}>
          {data.map((icons, index) => (
            <a href={icons.link} key={index} target="_blank">
              <img src={icons.icon} alt="icon" />
            </a>
          ))}
        </div>
      </div>
      <nav>
        <div className={styles.pages}>
          <h2>Pages</h2>
          <Link to="/">Acceuil</Link>
          <Link to="/informations">Nous contacter</Link>
        </div>
        <div className={styles.other}>
          <h2>Autres</h2>
          <Link to="/mentions-legales">Mentions légales</Link>
        </div>
        <div className={styles.credits}>
          <h2>Crédits</h2>
          <a href="#">Ewen.H</a>
          <a href="#">Thomas A.k.a tthomasrh</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
