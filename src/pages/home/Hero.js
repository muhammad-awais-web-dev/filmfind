import React from 'react'
import { useState } from 'react'
import styles from './Hero.module.css'





function Hero() {

    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
        // Handle search functionality here
        console.log('Searching for:', searchQuery)
        // You can add navigation to search results page later
        }
    }


  return (
    <section className="hero">
        <h1>Welcome to FilmFind</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
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
    </section>
  )
}

export default Hero
