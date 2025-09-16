import React from 'react'
import styles from '../preview/PagePreview.module.css';
import { useParams } from 'react-router-dom';
import { personDetail } from '../../API/tmbd';
import { useEffect, useState } from 'react';

function PersonDetail() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const data = await personDetail(id);
        setPerson(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching person details:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchPerson();
    }
  }, [id]);

  if (loading) {
    return (
      <main className={styles.tvPreviewContainer}>
        <section className={styles.tvHeroSection}>
          <div className={styles.tvMainInfo}>
            <h2>Loading...</h2>
          </div>
        </section>
      </main>
    );
  }

  if (!person) {
    return (
      <main className={styles.tvPreviewContainer}>
        <section className={styles.tvHeroSection}>
          <div className={styles.tvMainInfo}>
            <h2>Person not found</h2>
            <p>The requested person could not be found.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.tvPreviewContainer}>
      <section className={styles.tvHeroSection}>
        <div className={styles.tvMainInfo}>
          <img 
            className={styles.tvPosterImage} 
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${person.profile_path}`} 
            alt={person.name}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; }} 
          />
          <div className={styles.tvDetailsContainer}>
            <h1>{person.name}</h1>
            {person.birthday && <span>Born: {person.birthday}</span>}
            {person.place_of_birth && <span>Place of Birth: {person.place_of_birth}</span>}
            {person.known_for_department && <span>Known for: {person.known_for_department}</span>}
            {person.popularity && (
              <div className={styles.voteIndicator} style={{background: `conic-gradient(var(--primary-red) ${(person.popularity / 100) * 360}deg, #e5e7eb 0deg)`}}>
                <div className={styles.voteIndicatorFill} style={{color: 'var(--primary-red)'}}>
                  {Math.round(person.popularity)}
                </div>
              </div>
            )}
            {person.popularity && <span>Popularity Score</span>}
            
            {person.biography && (
              <>
                <h2>Biography</h2>
                <p>{person.biography}</p>
              </>
            )}
            
            {person.also_known_as && person.also_known_as.length > 0 && (
              <>
                <h2>Also Known As</h2>
                <p>{person.also_known_as.join(', ')}</p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PersonDetail