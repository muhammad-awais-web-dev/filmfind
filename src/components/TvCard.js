import React from 'react'
import styles from './TvCard.module.css'
import { useState , useEffect } from 'react';

function TvCard(  { movie } ) {
  const [ previewToggle, setPreviewToggle ] = useState("none");
  useEffect(() => {
    if (previewToggle === "flex") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [previewToggle]);
  return (<>
    <div style={{cursor:'pointer'}} className={styles.movieCard}>
      <div className={styles.previewToggle} onClick={() => setPreviewToggle("flex")}> <i className='fa-solid fa-eye' ></i> </div>
      <img className={styles.posterImage} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
      <div className={styles.voteIndicator}
        style={{background: `conic-gradient(${movie.vote_average >= 7 ? '#4ade80' : movie.vote_average >= 5 ? '#fbbf24' : '#ef4444'} ${(movie.vote_average / 10) * 360}deg, #e5e7eb 0deg)`}}>
        <div className={styles.voteIndicatorFill}
          style={{color: movie.vote_average >= 7 ? '#4ade80' : movie.vote_average >= 5 ? '#fbbf24' : '#ef4444'}}>
          {Math.round(movie.vote_average * 10)}%
        </div>
      </div>
      <h3 className={styles.title}>{movie.name}</h3>
      <p>Release Date: {movie.first_air_date}</p>
    </div>
      <div className={styles.backdrop} style={{display: previewToggle, background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) center/cover no-repeat`}} onClick={() => setPreviewToggle("none")}>
        <div className={styles.overlay} onClick={(e) => e.stopPropagation()}>
          <div className={styles.previewToggle} onClick={() => setPreviewToggle("none")}> <i className='fa-solid fa-xmark' ></i> </div>
        </div>
      </div>
</>)
}

export default TvCard;
