import styles from "./styles/editprofile.module.scss";

const EditProfile = () => {
    return (
        <main className={styles.main}>
            <img className={styles.title} src="/img/home/title.svg" alt="titre" />
            <section className={styles.maininfo}>
                <section className={styles.pp}>
                    <img className={styles.avatar} src="https://imgs.search.brave.com/sFG_bC_xvabwz7e7KOsJn94zDaw3MPinTBnKLqza3XQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/azRlV2J4UUpEckFR/TG1yeTB4Ukt3SGFI/YSZwaWQ9QXBp" alt="avatar" />
                    <div className={styles.ppbuttons}>
                        <span className={styles.editbutton}><img src="/img/profile/edit/pen.svg" className={styles.editImage}/></span>
                    </div>
                </section>
                <div className={styles.infos}>
                    <input className={styles.input} type="text" placeholder="Votre pseudo" />
                    <input className={styles.input} type="text" placeholder="Votre email (Facultatif)" />
                </div>
            </section>
            <section className={styles.socials}>
                <div className={styles.socialsLeft}>
                    <input className={styles.input} type="text" placeholder="Votre email (Facultatif)" />
                    <input className={styles.input} type="text" placeholder="Votre email (Facultatif)" />
                    <input className={styles.input} type="text" placeholder="Votre email (Facultatif)" />
                </div>
                <div className={styles.socialsRight}>
                    <input className={styles.input} type="text" placeholder="Votre email (Facultatif)" />
                    <input className={styles.input} type="text" placeholder="Votre email (Facultatif)" />
                    <input className={styles.input} type="text" placeholder="Votre email (Facultatif)" />
                </div>
            </section> 
        </main>
    )
}

export default EditProfile