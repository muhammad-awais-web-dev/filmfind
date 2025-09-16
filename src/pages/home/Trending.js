import React from 'react'
import styles from './Trending.module.css'
import MovieCard from '../../components/MovieCard';
import { API } from '../../API/tmbd';


const trendingMoviesDay = await API(`trending/all/day`);
const trendingMoviesWeek = await API(`trending/all/week`);



function Trending() {

    const [selectedDuration, setSelectedDuration] = React.useState('day');

  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>Trending</h2>
      <div className={styles.DurationSelector}  >
        <div className={styles.highlight} style={selectedDuration === 'day' ? { left: 0 } : { left:'50%' }} ></div>
        <p className={styles.duration} style={{color : `${selectedDuration === "day"? "white" : "black"}` } } onClick={() => {setSelectedDuration('day')}} >Today</p>
        <p className={styles.duration} style={{color : `${selectedDuration === "week"? "white" : "black"}` } } onClick={() => setSelectedDuration('week')} >This Week</p>
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
