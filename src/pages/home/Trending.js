import React from 'react'
import styles from './Trending.module.css'
import {apiResult} from './SampleOutput'
import MovieCard from '../../components/MovieCard';




function Trending() {

    const [selectedDuration, setSelectedDuration] = React.useState('day');

  return (
    <section className={styles.trending}>
      <h2>Trending Now</h2>
      <div className={styles.DurationSelector}  >
        <div className={styles.highlight} style={selectedDuration === 'day' ? { left: 0 } : { left:'50%' }} ></div>
        <p className={styles.duration} onClick={() => setSelectedDuration('day')} >Today</p>
        <p className={styles.duration} onClick={() => setSelectedDuration('week')} >This Week</p>
      </div>
      <div className={styles.trendingList}>
        {console.log(apiResult)}
        {apiResult.results.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default Trending
