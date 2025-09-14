import React from 'react'
import styles from './Trending.module.css'
import MovieCard from '../../components/MovieCard';
import { trendingMovies, trendingTv } from '../../API/tmbd';


const trendingMoviesDay = await trendingMovies('day');
const trendingMoviesWeek = await trendingMovies('week');
const trendingTvDay = await trendingTv('day');
const trendingTvWeek = await trendingTv('week');



function Trending() {

    const [selectedDuration, setSelectedDuration] = React.useState('day');
    const [selectedDurationTv, setSelectedDurationTv] = React.useState('day');

  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>Trending Now</h2>
      <h3 className={styles.subHeading}>Movies</h3>
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
      <h3 className={styles.subHeading}>TV</h3>
      <div className={styles.DurationSelector}  >
        <div className={styles.highlight} style={selectedDurationTv === 'day' ? { left: 0 } : { left:'50%' }} ></div>
        <p className={styles.duration} onClick={() => {setSelectedDurationTv('day')}} >Today</p>
        <p className={styles.duration} onClick={() => setSelectedDurationTv('week')} >This Week</p>
      </div>
      <div id='trending-list-day' style={{ display: selectedDurationTv === 'day' ? 'flex' : 'none' }} className={styles.trendingList}>
        {trendingTvDay.results.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div id='trending-list-week' style={{ display: selectedDurationTv === 'week' ? 'flex' : 'none' }} className={styles.trendingList}>
        {trendingTvWeek.results.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default Trending
