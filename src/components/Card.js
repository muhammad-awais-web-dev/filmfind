import React from 'react'
import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom';

function Card(  { movie } ) {
  const navigate = useNavigate();
  
  const clickHandler = () => {
    window.scrollTo(0, 0);
    movie.title ? navigate('/preview/movie/' + movie.id) : navigate('/preview/tvshow/' + movie.id);
  }

  return (
    <div style={{cursor:'pointer'}} className={styles.movieCard} onClick={clickHandler}>
      <img className={styles.posterImage} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; }} />
      <div className={styles.voteIndicator}
        style={{background: `conic-gradient(${movie.vote_average >= 7 ? '#4ade80' : movie.vote_average >= 5 ? '#fbbf24' : '#ef4444'} ${(movie.vote_average / 10) * 360}deg, #e5e7eb 0deg)`}}>
        <div className={styles.voteIndicatorFill}
          style={{color: movie.vote_average >= 7 ? '#4ade80' : movie.vote_average >= 5 ? '#fbbf24' : '#ef4444'}}>
          {Math.round(movie.vote_average * 10)}%
        </div>
      </div>
      <h3 className={styles.title}>{movie.title ? movie.title : movie.name}</h3>
      <p>Release Date: <br />{movie.release_date ? movie.release_date : movie.first_air_date}</p>
    </div>
  )
}

export default Card
