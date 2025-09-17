import React from 'react'
import styles from './List.module.css'
import { useParams } from 'react-router-dom';
import { API } from '../../API/tmbd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MoviesList() {

  const navigate = useNavigate();
  
    const [Result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const page = parseInt(useParams().page) || 1;
  const type = useParams().type;
  const List = useParams().list;

  useEffect(() => {
    const movies = async () => {
      try {
        const  data  = await API (`${type}/${List}`, `page=${page}`);
        setResult(data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Results:', error);
        // Set empty results on error
        setResult([]);
        setLoading(false);
      }
    };

    movies();
  }, [type, List, page]);

  if (loading) {
    return (
      <section >
        <h1 className={styles.heading} > {List.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} </h1>
        <p>Loading...</p>
      </section>
    );
  }

  if (Result && Result.length === 0) {
  return (
    <main>
      <section>
          <h1 className={styles.heading} > {List.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} </h1>
        <p>You Have Reached the End of the List</p>
      </section>
    </main>
  )
  }

  return (
    <main className={styles.main}>
      <section className={styles.results}>
        <div className={styles.topNav} >
            <h1 className={styles.heading} > {List.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} </h1>
            <p>Page {page} of {Result.total_pages}</p>
            <div className={styles.pageNav} >
                <button className={page === 1 ? styles.disabled : styles.enabled} disabled={page === 1} onClick={() => navigate(`/lists/${type}/${List}/${page - 1}`)}><i className="fa-solid fa-chevron-left"></i> <span>Previous</span></button>
                <button className={page === Result.total_pages ? styles.disabled : styles.enabled} disabled={page === Result.total_pages} onClick={() => navigate(`/lists/${type}/${List}/${page + 1}`)}><span>Next</span> <i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        {Result.results.map((item) => (
          <div key={item.id} className={styles.resultItem} onClick={() => {
            if (item.media_type === 'movie') {
              navigate(`/preview/movie/${item.id}`);
            } else if (item.media_type === 'tv') {
              navigate(`/preview/tvshow/${item.id}`);
            } else if (item.media_type === 'person') {
              navigate(`/person/${item.id}`);
            }
          }} >
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; }} />
            <div className={styles.itemDetails}>
              <h3>{item.title || item.name}</h3>
              <p>{item.overview}</p>
            </div>
          </div>
        ))}
        <p style={{ textAlign: 'center', margin: '20px 0' }} >Page {page} of {Result.total_pages}</p>
        <div className={styles.pageNav}>
          <button className={page === 1 ? styles.disabled : styles.enabled} disabled={page === 1} onClick={() => navigate(`/lists/${type}/${List}/${page - 1}`)}><i className="fa-solid fa-chevron-left"></i> <span>Previous</span></button>
          <button className={page === Result.total_pages ? styles.disabled : styles.enabled} disabled={page === Result.total_pages} onClick={() => navigate(`/lists/${type}/${List}/${page + 1}`)}><span>Next</span> <i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </section>
    </main>
  )
}

export default MoviesList
