import React from 'react'
import styles from './Trending.module.css'
import MovieCard from '../../components/MovieCard';
import { trending } from '../../API/tmbd';
import { useState, useEffect } from 'react';

function Trending() {
  const [selectedDuration, setSelectedDuration] = useState('day');
  const [trendingMoviesDay, setTrendingMoviesDay] = useState({ results: [] });
  const [trendingMoviesWeek, setTrendingMoviesWeek] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const dayData = await trending('day');
        const weekData = await trending('week');
        setTrendingMoviesDay(dayData || { results: [] });
        setTrendingMoviesWeek(weekData || { results: [] });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending data:', error);
        // Set empty results on error
        setTrendingMoviesDay({ results: [] });
        setTrendingMoviesWeek({ results: [] });
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading) {
    return (
      <section className={styles.trending}>
        <h2 className={styles.heading}>Trending</h2>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>Trending</h2>
      <div className={styles.DurationSelector}  >
        <div className={styles.highlight} style={selectedDuration === 'day' ? { left: 0 } : { left:'50%' }} ></div>
        <p className={styles.duration} onClick={() => {setSelectedDuration('day')}} >Today</p>
        <p className={styles.duration} onClick={() => setSelectedDuration('week')} >This Week</p>
      </div>
      <div id='trending-list-day' style={{ display: selectedDuration === 'day' ? 'flex' : 'none' }} className={styles.trendingList}>
        {trendingMoviesDay.results.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div id='trending-list-week' style={{ display: selectedDuration === 'week' ? 'flex' : 'none' }} className={styles.trendingList}>
        {trendingMoviesWeek.results.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default Trending
