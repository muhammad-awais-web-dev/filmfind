import React from 'react'
import styles from './TvCard.module.css'
import { usePreview } from '../PreviewContext';
import { useNavigate } from 'react-router-dom';

function TvCard(  { movie } ) {
  const { setPreview } = usePreview();
  const navigate = useNavigate();
  const clickHandler = () => {
    setPreview(movie.id);
    window.scrollTo(0, 0);
    navigate('/preview/tvshow/' + movie.id);
    // This will navigate to the preview page with the selected movie's ID
    // You can also pass more details if needed
    console.log('Previewing movie:', movie.id);

  }

  return (
    <div style={{cursor:'pointer'}} className={styles.movieCard} onClick={clickHandler}>
      <img className={styles.posterImage} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
      <div className={styles.voteIndicator}
        style={{background: `conic-gradient(${movie.vote_average >= 7 ? '#4ade80' : movie.vote_average >= 5 ? '#fbbf24' : '#ef4444'} ${(movie.vote_average / 10) * 360}deg, #e5e7eb 0deg)`}}>
        <div className={styles.voteIndicatorFill}
          style={{color: movie.vote_average >= 7 ? '#4ade80' : movie.vote_average >= 5 ? '#fbbf24' : '#ef4444'}}>
          {Math.round(movie.vote_average * 10)}%
        </div>
      </div>
      <h3 className={styles.title}>{movie.name}</h3>
      <p>Release Date: {movie.release_date}</p>
    </div>
  )
}

export default TvCard
