import styles from "./styles/manage.module.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Manage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.localStorage.getItem("uuid")) {
            navigate("/login");
        }
    }, [])

  return (
    <main className={styles.main}>
        <div className={styles.deleteModal}><p>Voulez-vous vraiment supprimer votre profil ?</p></div>
        <section>
            <h2 className={styles.title}>VOTRE PROFIL</h2>
        </section>
        <div className={styles.container}>
            <div className={styles.container_left}>
                <div className={styles.backgroundText}>
                    <section className={styles.blueblur}></section>
                    <h2 className={styles.text}>BYOSS.ME</h2>
                    <h2 className={styles.text}>BYOSS.ME</h2>
                    <h2 className={styles.text}>BYOSS.ME</h2>
                    <h2 className={styles.text}>BYOSS.ME</h2>
                </div>
                <div className={styles.image}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"></img>
                </div>
            </div>
            <div className={styles.container_center}></div>
            <div className={styles.container_right}>
                <label className={styles.modify}><img src="/img/profile/manage/edit_profil_icone.svg" /><div className={styles.buttonContainer}><button className={styles.modifyButton} onClick={() => {navigate('/profile/edit/')}}>Modifier mon profil</button></div></label>
                <label className={styles.visible}><img src="/img/profile/manage/visible.svg" /><div className={styles.buttonContainer}><button className={styles.modifyButton}>Rendre invisible mon profil</button></div></label>
                <label className={styles.delete}><img src="/img/profile/manage/delete.svg" /><div className={styles.buttonContainer}><button className={styles.modifyButton}>Supprimer mon profil</button></div></label>
            </div>
        </div>
    </main>
  )
}

export default Manage