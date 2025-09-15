import React from 'react'
import styles from './TV.module.css'
import MovieCard from '../../components/MovieCard';
import {tv} from '../../API/tmbd';
import { useState } from 'react';

const tvAiringToday = await tv('airing_today');
const tvOnTheAir = await tv('on_the_air');
const tvPopular = await tv('popular');
const tvTopRated = await tv('top_rated');

tvAiringToday.results.map( (movie) => (
    movie.title = movie.name
));
tvOnTheAir.results.map( (movie) => (
    movie.title = movie.name
));
tvPopular.results.map( (movie) => (
    movie.title = movie.name
));
tvTopRated.results.map( (movie) => (
    movie.title = movie.name
));

function TV() {

    const [selectedList, setSelectedList] = useState('airing_today');

    let left;
    switch (selectedList) {
        case 'airing_today':
            left = 0;
            break;
        case 'on_the_air':
            left = '25%';
            break;
        case 'popular':
            left = '50%';
            break;
        case 'top_rated':
            left = '75%';
            break;
        default:
            left = 0;
    }

  return (
    <section className={styles.movies}>
      <h2 className={styles.heading}>Tv Shows</h2>
      <div className={styles.DurationSelector}  >
              <div className={styles.highlight} style={{ left }} ></div>
              <p className={styles.duration} onClick={() => {setSelectedList('airing_today')}} >Airing Today</p>
              <p className={styles.duration} onClick={() => setSelectedList('on_the_air')} >On The Air</p>
              <p className={styles.duration} onClick={() => setSelectedList('popular')} >Popular</p>
              <p className={styles.duration} onClick={() => setSelectedList('top_rated')} >Top Rated</p>
            </div>
            <div style={{ display: selectedList === 'airing_today' ? 'flex' : 'none' }} className={styles.trendingList}>
              {tvAiringToday.results.map( (movie) => (
                  <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'on_the_air' ? 'flex' : 'none' }} className={styles.trendingList}>
              {tvOnTheAir.results.map( (movie) => (
                  <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'popular' ? 'flex' : 'none' }} className={styles.trendingList}>
              {tvPopular.results.map( (movie) => (
                  <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'top_rated' ? 'flex' : 'none' }} className={styles.trendingList}>
              {tvTopRated.results.map( (movie) => (
                  <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
    </section>
  )
}

export default TV
