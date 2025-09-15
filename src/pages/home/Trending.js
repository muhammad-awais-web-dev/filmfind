import React from 'react'
import styles from './Trending.module.css'
import MovieCard from '../../components/MovieCard';
import { trending } from '../../API/tmbd';


const trendingMoviesDay = await trending('day');
const trendingMoviesWeek = await trending('week');



function Trending() {

    const [selectedDuration, setSelectedDuration] = React.useState('day');

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
