import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.footerContent}>
            <div>
                <h2 className={styles.footerTitle}>FilmFind</h2>
                <p className={styles.footerDescription}>Discover and explore movies and TV shows with FilmFind. Your ultimate destination for entertainment.</p>
                <p className={styles.footerDescription}>powered by TMDB API</p>
                <a href="https://www.themoviedb.org/">
                    <img className={styles.footerTMDBLogo} src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="TMDB Logo" />
                </a>
            </div>
            <div className={styles.footerLinks}>
                <h3 className={styles.footerQuickLinksTitle}>Quick Links</h3>
                <ul style={{listStyle: 'none', padding: 0}}>
                    <li><Link to="/" className={styles.footerLink}>Home</Link></li>
                    <li><Link to="/lists/movie/popular/1" className={styles.footerLink}>Popular Movies</Link></li>
                    <li><Link to="/lists/movie/top_rated/1" className={styles.footerLink}>Top Rated Movies</Link></li>
                    <li><Link to="/lists/tv/popular/1" className={styles.footerLink}>Popular TV Shows</Link></li>
                    <li><Link to="/lists/tv/top_rated/1" className={styles.footerLink}>Top Rated TV Shows</Link></li>
                    <li><Link to="/peoples" className={styles.footerLink}>Popular People</Link></li>
                </ul>
            </div>
            <div>
                <h3 className={styles.footerMadeBy}>Made by <span className={styles.footerMadeByName}>Muhammad Awais</span></h3>
                <p className={styles.footerDescription}>Follow me on:</p>
                <p className={styles.footerSocialLinks}>
                    <a href="https://x.com/WebMorph_Studio"><i className={`fa-brands fa-twitter ${styles.footerLink}`}></i></a> <a href="https://github.com/muhammad-awais-web-dev"><i className={`fa-brands fa-github ${styles.footerLink}`}></i></a> <a href="https://www.linkedin.com/in/muhammad-awais-web-dev/"><i className={`fa-brands fa-linkedin ${styles.footerLink}`}></i></a> <a href="https://www.facebook.com/profile.php?id=61573732746181"><i className={`fa-brands fa-facebook ${styles.footerLink}`}></i></a>
                </p>
            </div>
        </section>
        <section className={styles.footerBottom}>
          <p>© 2024 FilmFind. All rights reserved.</p>
        </section>
      </footer>
    </>
  )
}

export default Footer
