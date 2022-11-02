import styles from './styles/betaLanding.module.scss'

const BetaLanding = () => {
	return (
        <main>
			<section className={styles.home}>
				<img className={styles.left} src="/img/beta/icons-left.png" alt="icons" style={{ translate: 'none', rotate: 'none', scale: 'none' }}></img>
				<div className={styles.presentation}>
					<img className={styles.logo} src="/img/beta/title.svg" alt="banner"></img><h2 className={styles.subtitle}>Béta Privée</h2>
					<section className={styles.navbar}>
						<a href="#about"><img src="/img/beta/login.svg" alt='login' />Se connecter</a>
						<a href="#about"><img src="/img/beta/about.svg" alt='about' />Découvrir le concept</a>
					</section>
				</div>
			</section>
			<section className={styles.secondary}>
				<div className={styles.scrolldiv}>
					<img className={styles.scroll} src="/img/home/scrollame.gif" alt="scroll"></img>
				</div>
			</section>
            <section className={styles.desc}>
			    <h2 style={{color: "#ffffff"}} className={styles.title}>POUR QUI EST CETTE BÉTA PRIVÉE ?</h2>
			    <p style={{color: "#ffffff"}} className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sed et tortor et vitae habitant duis. Facilisis facilisi urna at nunc purus. Tellus ornare viverra in pharetra scelerisque est in. Proin risus, dictum neque nunc rutrum turpis libero. Cursus placerat viverra dis sociis fames placerat integer quam. Vitae integer ut interdum ultrices nulla amet. Sit vivamus dui lobortis neque tellus vel eget velit. Tortor cursus bibendum gravida lobortis etiam sit. Suspendisse venenatis in aenean amet, lectus. Ac sagittis in nec accumsan. Vel et nibh eget pretium, mauris lorem sit. Diam enim sit vitae purus. Sapien lacus mi orci consectetur dictum libero non. Egestas mauris ipsum enim, ac nunc varius at.</p>
		    </section>
		</main>
    )
}

export default BetaLanding