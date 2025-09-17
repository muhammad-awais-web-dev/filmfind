import React from 'react'
import styles from './ScrollSection.module.css'
import Card from '../../components/Card';
import { API } from '../../API/tmbd';
import { useState, useEffect } from 'react';


function Movies() {
  const [selectedList, setSelectedList] = useState('now_playing');
  const [moviesNowPlaying, setMoviesNowPlaying] = useState({ results: [] });
  const [moviesPopular, setMoviesPopular] = useState({ results: [] });
  const [moviesTopRated, setMoviesTopRated] = useState({ results: [] });
  const [moviesUpcoming, setMoviesUpcoming] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
          API ('movie/now_playing'),
          API ('movie/popular'),
          API ('movie/top_rated'),
          API ('movie/upcoming')
        ]);
        setMoviesNowPlaying(nowPlaying || { results: [] });
        setMoviesPopular(popular || { results: [] });
        setMoviesTopRated(topRated || { results: [] });
        setMoviesUpcoming(upcoming || { results: [] });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        // Set empty results on error
        setMoviesNowPlaying({ results: [] });
        setMoviesPopular({ results: [] });
        setMoviesTopRated({ results: [] });
        setMoviesUpcoming({ results: [] });
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <section className={styles.movies}>
        <h2 className={styles.heading}>Movies</h2>
        <p>Loading...</p>
      </section>
    );
  }

  let left;
  switch (selectedList) {
    case 'now_playing':
      left = 0;
      break;
    case 'popular':
      left = '25%';
      break;
    case 'top_rated':
      left = '50%';
      break;
    case 'upcoming':
      left = '75%';
      break;
    default:
      left = 0;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Movies</h2>
      <div className={styles.DurationSelector4}  >
              <div className={styles.highlight4} style={{ left }} ></div>
              <p className={styles.duration} style={{color : `${selectedList === "now_playing"? "white" : "black"}` } } onClick={() => {setSelectedList('now_playing')}} >Now Playing</p>
              <p className={styles.duration} style={{color : `${selectedList === "popular"? "white" : "black"}` } } onClick={() => setSelectedList('popular')} >Popular</p>
              <p className={styles.duration} style={{color : `${selectedList === "top_rated"? "white" : "black"}` } } onClick={() => setSelectedList('top_rated')} >Top Rated</p>
              <p className={styles.duration} style={{color : `${selectedList === "upcoming"? "white" : "black"}` } } onClick={() => setSelectedList('upcoming')} >Upcoming</p>
            </div>
            <div style={{ display: selectedList === 'now_playing' ? 'flex' : 'none' }} className={styles.trendingList}>
              {moviesNowPlaying.results.map( (movie) => (
                  <Card key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'popular' ? 'flex' : 'none' }} className={styles.trendingList}>
              {moviesPopular.results.map( (movie) => (
                  <Card key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'top_rated' ? 'flex' : 'none' }} className={styles.trendingList}>
              {moviesTopRated.results.map( (movie) => (
                  <Card key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'upcoming' ? 'flex' : 'none' }} className={styles.trendingList}>
              {moviesUpcoming.results.map( (movie) => (
                  <Card key={movie.id} movie={movie} />
              ))}
            </div>
    </section>
  )
}

export default Movies
