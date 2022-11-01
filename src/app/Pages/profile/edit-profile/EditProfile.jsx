import styles from "./styles/editprofile.module.scss";
import CreatableSelect from 'react-select/creatable';
import { useState } from "react";

const EditProfile = () => {

    let userChoices = []

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

    let langs = [
        {value: 'python', label: 'Python'},
        {value: 'javascript', label: 'Javascript'},
        {value: 'typescript', label: 'Typescript'},
        {value: 'java', label: 'Java'},
        {value: 'c', label: 'C'},
        {value: 'c++', label: 'C++'},
        {value: 'c#', label: 'C#'},
        {value: 'php', label: 'PHP'},
        {value: 'html', label: 'HTML'},
        {value: 'css', label: 'CSS'},
        {value: 'swift', label: 'Swift'},
        {value: 'kotlin', label: 'Kotlin'},
        {value: 'ruby', label: 'Ruby'},
        {value: 'go', label: 'Go'},
        {value: 'rust', label: 'Rust'},
        {value: 'scala', label: 'Scala'},
        {value: 'jupyter', label: 'Jupyter'},
        {value: 'docker', label: 'Docker'},
        {value: 'bash', label: 'Bash'},
        {value: 'react', label: 'React'},
        {value: 'vue', label: 'Vue'},
        {value: 'angular', label: 'Angular'},
        {value: 'django', label: 'Django'},
        {value: 'flask', label: 'Flask'},
        {value: 'nodejs', label: 'NodeJS'},
        {value: 'laravel', label: 'Laravel'},
        {value: 'symfony', label: 'Symfony'},
        {value: 'spring', label: 'Spring'},
        {value: 'express', label: 'Express'},
        {value: 'mongodb', label: 'MongoDB'}
    ]

    let softwares = [
        {value: 'eclipse', label: 'Eclipse'},
        {value: 'vscode', label: 'Visual Studio Code'},
        {value: 'webstorm', label: 'WebStorm'},
        {value: 'pycharm', label: 'PyCharm'},
        {value: 'intellij', label: 'IntelliJ IDEA'}
    ]

    

    setInterval (() => {
        let activitiesComponent = document.getElementById('activities')
        let workforComponent = document.getElementById('workfor')

        activities.forEach(element => {
            if(userChoices.includes(element)){
                document.getElementById(element.value+'Container').style.display = 'flex'
            }
            else{
                document.getElementById(element.value+'Container').style.display = 'none'
            }
        });
    }, 1000);

    function setUserChoices(userChoice) {
        userChoices = userChoice
    }


    const colourStyles = {
        control: (styles) => { 
        return {
            ...styles, 

            marginTop: '0px',
            marginRight: '20px',
            width: 'auto',

            border: '#ffffffff solid 2px',
            borderRadius: '10px',
            backgroundColor: '#00000000',

            color: '#ffffff',
            textDecoration: 'none',

            outline: 'none',
            padding: '10px'
        }},
        multiValue: (styles, { data }) => {
            return {
              ...styles,
              backgroundColor: '#D9D9D9',
              color: '#4D4D4D',
              fontSize: '20px',
              fontHeight: '10px'
            };
        },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            padding: '5px',
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: 'unset',
            color: '#4D4D4D'
        }),
        placeholder: (styles) => ({
            ...styles,
            color: '#ffffff',
        })
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
                    <input className={styles.input} type="text" placeholder="pseudo Instagram (Facultatif)" />
                    <input className={styles.input} type="text" placeholder="pseudo Twitter (Facultatif)" />
                </div>
                <div>
                    <input className={styles.input} type="text" placeholder="pseudo Youtube (Facultatif)" />
                    <input className={styles.input} type="text" placeholder="pseudo Github (Facultatif)" />
                    <input className={styles.input} type="url" placeholder="Site Web (Facultatif)" />
                </div>
                <div className={styles.more}>
                    <div>
                        <img className={styles.flameIcon}src="/img/profile/edit/flame.svg" /><input className={styles.input} type="text" placeholder="Jeu ou communauté préférée (Facultatif)" />
                    </div>
                    <div>
                        <textarea rows="5" cols="100" className={styles.inputArea} type="textfield" placeholder="Description du profil" />
                    </div>
                </div>
            </section> 

            <h2 className={styles.subtitle}>VOS ACTIVITÉS</h2>

            <section className={styles.activities} id='activities'>
                <div className={styles.container}>
                    <h2 className={styles.activitiesSubtitle}>Ajouter / Retirer des activités</h2>
                    <CreatableSelect onChange={(choice) => setUserChoices(choice)} styles={colourStyles} className={styles.selectMenu} isMulti options={activities} placeholder='Selectionner des activités'/>
                </div>
            </section>

            <section className={styles.workfor} id='workfor'>
                <div className={styles.container} id='propriétaireContainer'>
                    <div className={styles.tag} style={{backgroundColor: '#CBAF71'}}>
                        <img className={styles.tagIcon} src="/img/profile/edit/crown.svg" />
                        <div className={styles.tagLabel}>
                            <h2>Propriétaire / Fondateur</h2>
                        </div>
                    </div>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.container} id='graphisteContainer'>
                    <div className={styles.tag} style={{backgroundColor: '#3E405A'}}>
                        <img className={styles.tagIcon} src="/img/profile/edit/brush.svg" />
                        <div className={styles.tagLabel}>
                            <h2>Graphiste</h2>
                        </div>
                    </div>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.container} id='monteurContainer'>
                    <div className={styles.tag} style={{backgroundColor: '#169A4B'}}>
                        <img className={styles.tagIcon} src="/img/profile/edit/video.svg" />
                        <div className={styles.tagLabel}>
                            <h2>Monteur / Motion Designer</h2>
                        </div>
                    </div>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.container} id='modérateurContainer'>
                    <div className={styles.tag} style={{backgroundColor: '#6476A6'}}>
                        <img className={styles.tagIcon} src="/img/profile/edit/shield.svg" />
                        <div className={styles.tagLabel}>
                            <h2>Modérateur</h2>
                        </div>
                    </div>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.container} id='développeurContainer'>
                    <div className={styles.tag} style={{backgroundColor: '#6181DC'}}>
                        <img className={styles.tagIcon} src="/img/profile/edit/code.svg" />
                        <div className={styles.tagLabel}>
                            <h2>Développeur</h2>
                        </div>
                    </div>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.container} id='musicienContainer'>
                    <div className={styles.tag} style={{backgroundColor: '#8F3FF4'}}>
                        <img className={styles.tagIcon} src="/img/profile/edit/note.svg" />
                        <div className={styles.tagLabel}>
                            <h2>Musicien / Compositeur</h2>
                        </div>
                    </div>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.container} id='youtubeurContainer'>
                    <div className={styles.tag} style={{backgroundColor: '#CC6371'}}>
                        <img className={styles.tagIcon} src="/img/profile/edit/clap.svg" />
                        <div className={styles.tagLabel}>
                            <h2>Youtubeur / Vidéaste</h2>
                        </div>
                    </div>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.container} id='web_designerContainer'>
                    <div className={styles.tag} style={{backgroundColor: '#FF8E87'}}>
                        <img className={styles.tagIcon} src="/img/profile/edit/window.svg" />
                        <div className={styles.tagLabel}>
                            <h2>Web Designer</h2>
                        </div>
                    </div>
                    <input className={styles.input} type="text" />
                </div>
                {/* <div className={styles.container} id='other'>
                    <div className={styles.tag} style={{backgroundColor: '#719ACB'}}>
                        <img className={styles.tagIcon} src="/img/profile/edit/other.svg" />
                        <div className={styles.tagLabel}>
                            <h2>Unknown</h2>
                        </div>
                    </div>
                    <input className={styles.input} type="text" />
                </div>*/}
            </section>

            <section className={styles.langages}>
                <div className={styles.container}>
                    <h2 className={styles.langagesSubtitle}>Ajouter / Retirer des technologies / langages de code</h2>
                    <CreatableSelect styles={colourStyles} className={styles.selectMenu} isMulti options={langs} placeholder='Selectionner des langages'/>
                </div>
            </section>

            <section className={styles.softwares}>
                <div className={styles.container}>
                    <h2 className={styles.softwaresSubtitle}>Ajouter / Retirer des logiciels</h2>
                    <CreatableSelect styles={colourStyles} className={styles.selectMenu} isMulti options={softwares} placeholder='Selectionner des langages'/>
                </div>
            </section>

            <section className={styles.buttons}>
                <button className={styles.more}><img src="/img/profile/edit/profilemore.svg" />Plus sur mon profil</button>
                <div className={styles.container}>
                    <button className={styles.cancel}>Annuler</button>
                    <button className={styles.confirm}>Enregistrer</button>
                </div>
            </section>
        </main>
    )
}

export default EditProfile