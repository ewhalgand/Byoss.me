import styles from "./styles/editprofile.module.scss";
import CreatableSelect from 'react-select/creatable';

const EditProfile = () => {

    let activities = [
        {value: 'propriétaire', label:'Propriétaire / Fondateur'},
        {value: 'graphiste', label: 'Graphiste'},
        {value: 'monteur', label: 'Monteur / Motion Designer'},
        {value: 'modérateur', label: 'Modérateur'},
        {value: 'développeur', label: 'Développeur'},
        {value: 'musicien', label: 'Musicien / Compositeur'},
        {value: 'youtubeur', label: 'Youtubeur / Vidéaste'},
        {value: 'web_designer', label: 'Web Designer'}
    ]
      
      const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: '#ffffff00',
      
            ':active': {
              ...styles[':active'],
              backgroundColor: isDisabled
            },
          };
        },
        input: (styles) => ({ ...styles, ...{ color: 'black' } }),
        placeholder: (styles) => ({ ...styles}),
        singleValue: (styles, { data }) => ({ ...styles}),
      };

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
                    <input className={styles.input} type="email" placeholder="Votre email (Facultatif)" />
                </div>
            </section>
            <section className={styles.socials}>
                <div>
                    <input className={styles.input} type="text" placeholder="pseudo Discord (Facultatif)" />
                    <input className={styles.input} type="text" placeholder="pseudo Youtube (Facultatif)" />
                </div>
                <div>
                    <input className={styles.input} type="text" placeholder="pseudo Instagram (Facultatif)" />
                    <input className={styles.input} type="text" placeholder="pseudo Github (Facultatif)" />
                </div>
                <div>
                    <input className={styles.input} type="text" placeholder="pseudo Twitter (Facultatif)" />
                    <input className={styles.input} type="url" placeholder="Site Web (Facultatif)" />
                </div>
            </section> 
            <section className={styles.more}>
                <div>
                    <img className={styles.flameIcon}src="/img/profile/edit/flame.svg" /><input className={styles.input} type="text" placeholder="Jeu ou communauté préférée (Facultatif)" />
                </div>
                <div>
                    <textarea rows="5" cols="100" className={styles.inputArea} type="textfield" placeholder="Description du profil" />
                </div>
            </section>

            <h2 className={styles.subtitle}>VOS ACTIVITÉS</h2>

            <section className={styles.activities}>
                <h2 className={styles.activitiesSubtitle}>Ajouter / Retirer des activités</h2>
                <CreatableSelect styles={colourStyles} className={styles.selectMenu} isMulti options={activities} placeholder='Selectionner des activités'/>
            </section>
        </main>
    )
}

export default EditProfile