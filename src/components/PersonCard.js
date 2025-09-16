import React from 'react'
import styles from './PersonCard.module.css'
import { useNavigate } from 'react-router-dom';

function PersonCard({ person }) {
  const navigate = useNavigate();
  
  const clickHandler = () => {
    window.scrollTo(0, 0);
    navigate('/person/' + person.id);
  }

  return (
    <div style={{cursor:'pointer'}} className={styles.personCard} onClick={clickHandler}>
      <img 
        className={styles.profileImage} 
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${person.profile_path}`} 
        alt={person.name} 
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; }} 
      />
      <div className={styles.personInfo}>
        <h3 className={styles.name}>{person.name}</h3>
        <p className={styles.knownFor}>Known for: {person.known_for_department}</p>
        <div className={styles.popularity}>
          <span>Popularity: {Math.round(person.popularity)}</span>
        </div>
        {person.known_for && person.known_for.length > 0 && (
          <div className={styles.knownForMovies}>
            <span>Known for: {person.known_for.slice(0, 2).map(item => item.title || item.name).join(', ')}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default PersonCard