import React from 'react'
import styles from './Movies.module.css'
import MovieCard from '../../components/MovieCard';
import { API } from '../../API/tmbd';
import { useState } from 'react';

const moviesNowPlaying = await API(`movie/now_playing`);
const moviesPopular = await API(`movie/popular`);
const moviesTopRated = await API(`movie/top_rated`);
const moviesUpcoming = await API(`movie/upcoming`);


function Movies() {

    const [selectedList, setSelectedList] = useState('now_playing');

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
    <section className={styles.movies}>
      <h2 className={styles.heading}>Movies</h2>
      <div className={styles.DurationSelector}  >
              <div className={styles.highlight} style={{ left }} ></div>
              <p className={styles.duration} style={{color : `${selectedList === "now_playing"? "white" : "black"}` } } onClick={() => {setSelectedList('now_playing')}} >Now Playing</p>
              <p className={styles.duration} style={{color : `${selectedList === "popular"? "white" : "black"}` } } onClick={() => setSelectedList('popular')} >Popular</p>
              <p className={styles.duration} style={{color : `${selectedList === "top_rated"? "white" : "black"}` } } onClick={() => setSelectedList('top_rated')} >Top Rated</p>
              <p className={styles.duration} style={{color : `${selectedList === "upcoming"? "white" : "black"}` } } onClick={() => setSelectedList('upcoming')} >Upcoming</p>
            </div>
            <div style={{ display: selectedList === 'now_playing' ? 'flex' : 'none' }} className={styles.trendingList}>
              {moviesNowPlaying.results.map( (movie) => (
                  <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'popular' ? 'flex' : 'none' }} className={styles.trendingList}>
              {moviesPopular.results.map( (movie) => (
                  <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'top_rated' ? 'flex' : 'none' }} className={styles.trendingList}>
              {moviesTopRated.results.map( (movie) => (
                  <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'upcoming' ? 'flex' : 'none' }} className={styles.trendingList}>
              {moviesUpcoming.results.map( (movie) => (
                  <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
    </section>
  )
}

export default Movies
