import styles from "./styles/home.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <img className={styles.title} src="/img/home/title.svg" alt="titre" />
        <h1>YOUR ONLINE <br /> BIOGRAPHIE</h1>
        <a href="#"><img src="/img/home/pencil.svg" alt='pencil' />Creer votre biographie</a>
      </div>
      <div className={styles.banner}>
        <img src="/img/home/banner.svg" alt="bannière" />
      </div>
    </main>
  )
}

export default Home