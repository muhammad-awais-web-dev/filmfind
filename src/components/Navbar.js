import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useSearch } from '../SearchContext';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate();
  const { setSearch } = useSearch();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Handle search functionality here
      console.log('Searching for:', searchQuery)
      setSearch(searchQuery); // This will now come from context
      navigate(`/search-result`);
      // You can add navigation to search results page later
    }
  }

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          <h1>FilmFind</h1>
        </Link>
        <button
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to="/" className={styles.menuLink}>Home</Link>
            </li>
            <li className={`${styles.menuItem} ${styles.dropdown}`}>
              <span className={styles.menuLink}>
                Movies <i className='fa-solid fa-caret-down'></i>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link to="/movies/popular" className={styles.dropdownLink}>Popular</Link></li>
                <li><Link to="/movies/top-rated" className={styles.dropdownLink}>Top Rated</Link></li>
                <li><Link to="/movies/upcoming" className={styles.dropdownLink}>Upcoming</Link></li>
                <li><Link to="/movies/now-playing" className={styles.dropdownLink}>Now Playing</Link></li>
              </ul>
            </li>
            <li className={`${styles.menuItem} ${styles.dropdown}`}>
              <span className={styles.menuLink}>
                TV Shows <i className='fa-solid fa-caret-down'></i>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link to="/tv/popular" className={styles.dropdownLink}>Popular</Link></li>
                <li><Link to="/tv/top-rated" className={styles.dropdownLink}>Top Rated</Link></li>
                <li><Link to="/tv/on-air" className={styles.dropdownLink}>On Air</Link></li>
                <li><Link to="/tv/airing-today" className={styles.dropdownLink}>Airing Today</Link></li>
              </ul>
            </li>
            <li className={`${styles.menuItem} ${styles.dropdown}`}>
              <span className={styles.menuLink}>
                People <i className='fa-solid fa-caret-down'></i>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link to="/people/popular" className={styles.dropdownLink}>Popular People</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        </div>
        <div className={styles.searchSection}>
        <form className={styles.searchbar} onSubmit={handleSearchSubmit}>
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search movies, TV shows, people..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <i className="fa-solid fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Navbar
