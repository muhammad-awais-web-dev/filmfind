import React from 'react'
import styles from './SearchResult.module.css'
import { useParams } from 'react-router-dom';
import { API } from '../../API/tmbd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchResult() {

  const navigate = useNavigate();

  const { query } = useParams();
  const page = useParams().page;
  const search = query.replace(/\+/g, '%20');

  const [SearchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const { results } = await API (`search/multi`, `query=${search}`);
        setSearchResult(results || []);
        console.log(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Results:', error);
        // Set empty results on error
        setSearchResult([]);
        setLoading(false);
      }
    };

    fetchTvShows();
  }, [search]);

  if (loading) {
    return (
      <section >
        <h1 className={styles.heading}>Search Results</h1>
        <p>Loading...</p>
      </section>
    );
  }

  if (SearchResult && SearchResult.length === 0) {
  return (
    <main>
      <section>
        <h1 className={styles.heading}>Search Results</h1>
        <p>No results found for: {search}</p>
      </section>
    </main>
  )
  }

  return (
    <main className={styles.main}>
      <section className={styles.results}>
      <h1 className={styles.heading} >Search Results</h1>
        {SearchResult.map((item) => (
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
      </section>
    </main>
  )
}

export default SearchResult
