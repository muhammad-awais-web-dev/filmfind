import React from 'react'
import styles from './ScrollSection.module.css'
import Card from '../../components/Card';
import { API } from '../../API/tmbd';
import { useState, useEffect } from 'react';




function Trending() {
  const [selectedDuration, setSelectedDuration] = useState('day');
  const [trendingMoviesDay, setTrendingMoviesDay] = useState({ results: [] });
  const [trendingMoviesWeek, setTrendingMoviesWeek] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const dayData = await API ('trending/all/day');
        const weekData = await API ('trending/all/week');
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
    <section className={styles.section}>
      <h2 className={styles.heading}>Trending</h2>
      <div className={styles.DurationSelector}  >
        <div className={styles.highlight} style={selectedDuration === 'day' ? { left: 0 } : { left:'50%' }} ></div>
        <p className={styles.duration} style={{color : `${selectedDuration === "day"? "white" : "black"}` } } onClick={() => {setSelectedDuration('day')}} >Today</p>
        <p className={styles.duration} style={{color : `${selectedDuration === "week"? "white" : "black"}` } } onClick={() => setSelectedDuration('week')} >This Week</p>
      </div>
      <div id='trending-list-day' style={{ display: selectedDuration === 'day' ? 'flex' : 'none' }} className={styles.trendingList}>
        {trendingMoviesDay.results.map( (movie) => (
            <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <div id='trending-list-week' style={{ display: selectedDuration === 'week' ? 'flex' : 'none' }} className={styles.trendingList}>
        {trendingMoviesWeek.results.map( (movie) => (
            <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default Trending
