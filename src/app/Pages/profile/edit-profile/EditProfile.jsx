import styles from "./styles/editprofile.module.scss";
import CreatableSelect from 'react-select/creatable';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const history = useNavigate();

    const [userChoices, setuserChoice] = useState([])
    const [inputs, setinputs] = useState({})
    const [languages, setlanguages] = useState([])
    const [soft, setsoft] = useState([])
    const [default_languages, set_default_languages] = useState([])
    const [default_soft, set_default_soft] = useState([])
    const [loaded, set_loaded] = useState(false)
    const [default_activities, set_default_activities] = useState([])
    const [pseudo, setPseudo] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [discord, setDiscord] = useState("")
    const [github, setGithub] = useState("")
    const [youtube, setYoutube] = useState("")
    const [twitter, setTwitter] = useState("")
    const [instagram, setInstagram] = useState("")
    const [website, setWebsite] = useState("")
    const [community, setCommunity] = useState("")
    const [profile_picture, setProfilePicture] = useState({})


    let activities = [
        { value: 'propriétaire', label: 'Propriétaire / Fondateur', "color": "#EBBB51", "icon": "/img/profile/edit/crown.svg" },
        { value: 'graphiste', label: 'Graphiste', "color": "#3E405A", "icon": "/img/profile/edit/brush.svg" },
        { value: 'monteur', label: 'Monteur / Motion Designer', "color": "#1E8C4A", "icon": "/img/profile/edit/video.svg" },
        { value: 'modérateur', label: 'Modérateur', "color": "#6476A6", "icon": "/img/profile/edit/shield.svg" },
        { value: 'développeur', label: 'Développeur', "color": "#6181DC", "icon": "/img/profile/edit/code.svg" },
        { value: 'musicien', label: 'Musicien / Compositeur', "color": "#8845DD", "icon": "/img/profile/edit/note.svg" },
        { value: 'youtubeur', label: 'Youtubeur / Vidéaste', "color": "#E14257", "icon": "/img/profile/edit/clap.svg" },
        { value: 'web_designer', label: 'Web Designer', "color": "#FF8E87", "icon": "/img/profile/edit/window.svg" }
    ]

    let langs = [
        { value: 'python', label: 'Python' },
        { value: 'javascript', label: 'Javascript' },
        { value: 'typescript', label: 'Typescript' },
        { value: 'java', label: 'Java' },
        { value: 'c', label: 'C' },
        { value: 'c++', label: 'C++' },
        { value: 'c#', label: 'C#' },
        { value: 'php', label: 'PHP' },
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'swift', label: 'Swift' },
        { value: 'kotlin', label: 'Kotlin' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'go', label: 'Go' },
        { value: 'rust', label: 'Rust' },
        { value: 'scala', label: 'Scala' },
        { value: 'jupyter', label: 'Jupyter' },
        { value: 'docker', label: 'Docker' },
        { value: 'bash', label: 'Bash' },
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
        { value: 'django', label: 'Django' },
        { value: 'flask', label: 'Flask' },
        { value: 'nodejs', label: 'NodeJS' },
        { value: 'laravel', label: 'Laravel' },
        { value: 'symfony', label: 'Symfony' },
        { value: 'spring', label: 'Spring' },
        { value: 'express', label: 'Express' },
        { value: 'mongodb', label: 'MongoDB' }
    ]

    let softwares = [
        { value: 'eclipse', label: 'Eclipse' },
        { value: 'vscode', label: 'Visual Studio Code' },
        { value: 'webstorm', label: 'WebStorm' },
        { value: 'pycharm', label: 'PyCharm' },
        { value: 'intellij', label: 'IntelliJ IDEA' }
    ]

    function setUserChoices(userChoice) {
        let dict = []
        for (let i of userChoice) {
            if (i.color === undefined) {
                dict.push({
                    "color": "#719ACB",
                    "icon": "/img/profile/edit/other.svg",
                    "label": i.label,
                    "value": i.value
                })
            }
            else {
                dict.push({
                    "color": i.color,
                    "icon": i.icon,
                    "label": i.label,
                    "value": i.value
                })
            }
        }
        setuserChoice(dict)
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
            }
        },
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
            color: '#4D4D4D'
        }),
        placeholder: (styles) => ({
            ...styles,
            color: '#ffffff',
        })
    };
    useEffect(() => {
        const uuid = window.localStorage.getItem('uuid')
        fetch("https://api.byoss.me/get_user/" + uuid)
            .then(res => res.json())
            .then(res => {
                let list = []
                for (let i of res.technos) {
                    let custom = true
                    for (let a in langs) {
                        if (langs[a].label == i) {
                            list.push(langs[a])
                            custom = false
                        }
                    }
                    if (custom) {
                        list.push({
                            "label": i,
                            "value" : i})
                    }
                }
                set_default_languages(list)
                let lista = []
                for (let i of res.softwares) {
                    let custom = true
                    for (let a in softwares) {
                        if (softwares[a].label == i) {
                            lista.push(softwares[a])
                            custom = false
                        }
                    }
                    if (custom) {
                        lista.push({
                            "label": i,
                            "value" : i})
                    }
                }
                set_default_soft(lista)
                let listb = []
                let temp = []
                for (let a of activities){
                    temp.push(a.value)
                }
                for (let i of res.activites) {
                    for (let a of activities) {
                        if(a.value == i) {
                            listb.push(a)
                        }
                        else if(!listb.includes({"label": i,"value" :i}) && !temp.includes(i)) {
                            listb.push({
                                "label": i,
                                "value" : i})
                            temp += i
                        }
                    }
                }
                set_default_activities(listb)
                setUserChoices(listb)
                let dicta = {}
                for (let i of res.work_for) {
                    document.getElementById(Object.keys(i)[0]).value = Object.values(i)[0]
                    dicta[Object.keys(i)[0]] = Object.values(i)[0]
                }

                setPseudo(res.pseudo)
                setEmail(res.mail)
                setDiscord(res.discord)
                setYoutube(res.youtube)
                setInstagram(res.instagram)
                setGithub(res.github)
                setTwitter(res.twitter)
                setWebsite(res.websites[0])
                setCommunity(res.communaute)
                setDescription(res.description)

                set_loaded(true)
                setinputs(dicta)
                
                let avatar = document.getElementById("profile_picture")
                avatar.src = res.profile_picture
            })
    }, [])
    const on_submit = () => {
        const uuid = window.localStorage.getItem('uuid')
        let list = []
        let activitesID = []
        for (let key in inputs) {
            let dict = {}
            dict[key] = inputs[key]
            list.push(dict)
            activitesID.push(key)
        }
        let body = {}
        if (JSON.stringify(list) != "[]") {
            body["work_for"] = list
        }
        if (JSON.stringify(languages) != "[]") {
            body['technos'] = languages
        }
        if (JSON.stringify(soft) != "[]") {
            body['softwares'] = soft
        }
        if (JSON.stringify(list) != "[]") {
            body['activites'] = activitesID
        }
        body['pseudo'] = pseudo.replace("'", "^*$!&*").replace('"',"$#^*&#")
        body['mail'] = email.replace("'", "^*$!&*").replace('"',"$#^*&#")
        body['discord'] = discord.replace("'", "^*$!&*").replace('"',"$#^*&#")
        body['youtube'] = youtube.replace("'", "^*$!&*").replace('"',"$#^*&#")
        body['instagram'] = instagram.replace("'", "^*$!&*").replace('"',"$#^*&#")
        body['github'] = github.replace("'", "^*$!&*").replace('"',"$#^*&#")
        body['twitter'] = twitter.replace("'", "^*$!&*").replace('"',"$#^*&#")
        body['websites'] = [website.replace("'", "^*$!&*").replace('"',"$#^*&#")]
        body['communaute'] = community.replace("'", "^*$!&*").replace('"',"$#^*&#")
        body['description'] = description.replace("'", "^*$!&*").replace('"',"$#^*&#")

        const formData = new FormData();

        console.log(profile_picture)

        formData.append("image", profile_picture ,profile_picture.name);

        console.log(formData)

        fetch('https://api.byoss.me/update_user/' + uuid,
            {
                method: "POST",
                body: JSON.stringify(body)
            })

        fetch("https://api.byoss.me/update_picture/" + uuid, {
            method: 'POST',
    
            body: formData,
            dataType: "jsonp"
        })
        
        //we want to redirect user to /profile
        history('/profile')

    }
    const updatePP = (event) => {
        let avatar = document.getElementById('profile_picture')
        avatar.src = URL.createObjectURL(event.target.files[0])
    }

    return (
        <main className={styles.main}>
            <img className={styles.title} src="/img/home/title.svg" alt="titre" />
            <section className={styles.maininfo}>
                <section className={styles.pp}>
                    <img id="profile_picture" className={styles.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZt50gh1uEkLw2lX99k9bWVzxDiKZ4O9rmqxk98XhfOg&s" alt="avatar" />
                    <div className={styles.ppbuttons}>
                        <input onChange={(e) => {
                            setProfilePicture(e.target.files[0])

                            updatePP(e)
                        }} 
                        className={styles.editbutton} type="file" accept=".jpg, .jpeg, .png" name="file" id="file"/><label for="file"><img src="/img/profile/edit/pen.svg" className={styles.editImage} /></label>
                    </div>
                </section>
                <div className={styles.infos}>
                    <input className={styles.input} type="text" placeholder="Votre pseudo" onChange={(e) => {setPseudo(e.target.value)}} defaultValue={pseudo}/>
                    <input className={styles.input} type="email" placeholder="Votre email (Facultatif)" onChange={(e) => {setEmail(e.target.value)}} defaultValue={email}/>
                </div>
            </section>
            <section className={styles.socials}>
                <div>
                    <input className={styles.input} type="text" placeholder="pseudo Discord (Facultatif)" onChange={(e) => {setDiscord(e.target.value)}} defaultValue={discord}/>
                    <input className={styles.input} type="text" placeholder="pseudo Instagram (Facultatif)" onChange={(e) => {setInstagram(e.target.value)}} defaultValue={instagram}/>
                    <input className={styles.input} type="text" placeholder="pseudo Twitter (Facultatif)" onChange={(e) => {setTwitter(e.target.value)}} defaultValue={twitter}/>
                </div>
                <div>
                    <input className={styles.input} type="text" placeholder="pseudo Youtube (Facultatif)" onChange={(e) => {setYoutube(e.target.value)}} defaultValue={youtube}/>
                    <input className={styles.input} type="text" placeholder="pseudo Github (Facultatif)" onChange={(e) => {setGithub(e.target.value)}} defaultValue={github}/>
                    <input className={styles.input} type="url" placeholder="Site Web (Facultatif)" onChange={(e) => {setWebsite(e.target.value)}} defaultValue={website}/>
                </div>
                <div className={styles.more}>
                    <div>
                        <img className={styles.flameIcon} src="/img/profile/edit/flame.svg" /><input className={styles.input} type="text" placeholder="Jeu ou communauté préférée (Facultatif)" onChange={(e) => {setCommunity(e.target.value)}} defaultValue={community}/>
                    </div>
                    <div>
                        <textarea rows="5" cols="100" maxLength="300" className={styles.inputArea} type="textfield" placeholder="Description du profil" onChange={(e) => {setDescription(e.target.value)}} defaultValue={description}/>
                    </div>
                </div>
            </section>

            <h2 className={styles.subtitle}>VOS ACTIVITÉS</h2>

            {loaded && <>
                <section className={styles.activities} id='activities'>
                    <div className={styles.container}>
                        <h2 className={styles.activitiesSubtitle}>Ajouter / Retirer des activités</h2>
                        <CreatableSelect onChange={(choice) => setUserChoices(choice)} styles={colourStyles} className={styles.selectMenu} isMulti options={activities} defaultValue={default_activities} placeholder='Selectionner des activités' />
                    </div>
                </section>
            </>}

            <section className={styles.workfor} id='workfor'>
                {userChoices.map((userChoice) =>
                    <div className={styles.container} id='propriétaireContainer' key={userChoice.value}>
                        <div className={styles.tag} style={{ backgroundColor: userChoice.color }}>
                            <img className={styles.tagIcon} src={userChoice.icon} />
                            <div className={styles.tagLabel}>
                                <h2>{userChoice.label}</h2>
                            </div>
                        </div>
                        <input className={styles.input} type="text" id={userChoice.value} onChange={(e) => {
                            let value = inputs
                            value[e.target.id] = e.target.value
                            setinputs(value)
                        }} />
                    </div>
                )}
            </section>

            {loaded && <>
                <section className={styles.langages}>
                    <div className={styles.container}>
                        <h2 className={styles.langagesSubtitle}>Ajouter / Retirer des technologies / langages de code</h2>
                        <CreatableSelect styles={colourStyles} className={styles.selectMenu} isMulti options={langs} placeholder='Selectionner des langages' defaultValue={default_languages} onChange={(e) => {
                            let list = []
                            for (let i of e) {
                                list.push(i.label)
                            }
                            setlanguages(list)
                        }} />
                    </div>
                </section>
                <section className={styles.softwares}>
                    <div className={styles.container}>
                        <h2 className={styles.softwaresSubtitle}>Ajouter / Retirer des logiciels</h2>
                        <CreatableSelect styles={colourStyles} className={styles.selectMenu} isMulti options={softwares} placeholder='Selectionner des logiciels' defaultValue={default_soft} onChange={(e) => {
                            let list = []
                            for (let i of e) {
                                list.push(i.label)
                            }
                            setsoft(list)
                        }} />
                    </div>
                </section>
            </>}
            <section className={styles.buttons}>
                <button className={styles.moreb}><img src="/img/profile/edit/profilemore.svg" />Plus sur mon profil</button>
                <div className={styles.container}>
                    <button className={styles.cancel} onClick={() => {history('/profile')}}>Annuler</button>
                    <button className={styles.confirm} onClick={on_submit}>Enregistrer</button>
                </div>
            </section>
        </main>
    )
}

export default EditProfile