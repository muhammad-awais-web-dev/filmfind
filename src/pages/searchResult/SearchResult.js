import React from 'react'
import styles from './SearchResult.module.css'
import { useParams } from 'react-router-dom';
import { API } from '../../API/tmbd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchResult() {

  const navigate = useNavigate();
  const [SearchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const page = (parseInt(useParams().page) || 1);

  const { query } = useParams();
  const search = query.replace(/\+/g, '%20');


  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const data = await API (`search/multi`, `query=${search}&page=${page}`);
        setSearchResult(data || []);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Results:', error);
        // Set empty results on error
        setSearchResult([]);
        setLoading(false);
      }
    };

    fetchTvShows();
  }, [search, page]);

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
      <div className={styles.topNav} >
            <h1 className={styles.heading} > Search Reslults </h1>
            <p>Page {page} of {SearchResult.total_pages}</p>
            <div className={styles.pageNav} >
                <button className={page === 1 ? styles.disabled : styles.enabled} disabled={page === 1} onClick={() => navigate(`/search-result/${search}/${page - 1}`)}><i className="fa-solid fa-chevron-left"></i> <span>Previous</span></button>
                <button className={page === SearchResult.total_pages ? styles.disabled : styles.enabled} disabled={page === SearchResult.total_pages} onClick={() => navigate(`/search-result/${search}/${page + 1}`)}><span>Next</span> <i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        {SearchResult.results.map((item) => (
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
        <p style={{ textAlign: 'center', margin: '20px 0' }} >Page {page} of {SearchResult.total_pages}</p>
        <div className={styles.pageNav}>
          <button className={page === 1 ? styles.disabled : styles.enabled} disabled={page === 1} onClick={() => navigate(`/search-result/${search}/${page - 1}`)}><i className="fa-solid fa-chevron-left"></i> <span>Previous</span></button>
          <button className={page === SearchResult.total_pages ? styles.disabled : styles.enabled} disabled={page === SearchResult.total_pages} onClick={() => navigate(`/search-result/${search}/${page + 1}`)}><span>Next</span> <i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </section>
    </main>
  )
}

export default SearchResult
