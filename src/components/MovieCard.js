import React from 'react'
import styles from './MovieCard.module.css'

function MovieCard(  { movie } ) {
  return (
    <div style={{cursor:'pointer'}} className={styles.movieCard}>
      <img className={styles.posterImage} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
      <div className={styles.voteIndicator}
        style={{background: `conic-gradient(${movie.vote_average >= 7 ? '#4ade80' : movie.vote_average >= 5 ? '#fbbf24' : '#ef4444'} ${(movie.vote_average / 10) * 360}deg, #e5e7eb 0deg)`}}>
        <div className={styles.voteIndicatorFill}
          style={{color: movie.vote_average >= 7 ? '#4ade80' : movie.vote_average >= 5 ? '#fbbf24' : '#ef4444'}}>
          {Math.round(movie.vote_average * 10)}%
        </div>
      </div>
      <h3 className={styles.title}>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
    </div>
  )
}

export default MovieCard
