import React from 'react'
import styles from './TV.module.css'
import TvCard from '../../components/TvCard';
import { API } from '../../API/tmbd';
import { useState } from 'react';

const tvAiringToday = await API('tv/airing_today');
const tvOnTheAir = await API('tv/on_the_air');
const tvPopular = await API('tv/popular');
const tvTopRated = await API('tv/top_rated');


function TV() {
  const [selectedList, setSelectedList] = useState('airing_today');
  const [tvAiringToday, setTvAiringToday] = useState({ results: [] });
  const [tvOnTheAir, setTvOnTheAir] = useState({ results: [] });
  const [tvPopular, setTvPopular] = useState({ results: [] });
  const [tvTopRated, setTvTopRated] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const [airingToday, onTheAir, popular, topRated] = await Promise.all([
          tv('airing_today'),
          tv('on_the_air'),
          tv('popular'),
          tv('top_rated')
        ]);
        
        setTvAiringToday(airingToday || { results: [] });
        setTvOnTheAir(onTheAir || { results: [] });
        setTvPopular(popular || { results: [] });
        setTvTopRated(topRated || { results: [] });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
        // Set empty results on error
        setTvAiringToday({ results: [] });
        setTvOnTheAir({ results: [] });
        setTvPopular({ results: [] });
        setTvTopRated({ results: [] });
        setLoading(false);
      }
    };

    fetchTvShows();
  }, []);

  if (loading) {
    return (
      <section className={styles.movies}>
        <h2 className={styles.heading}>TV Shows</h2>
        <p>Loading...</p>
      </section>
    );
  }

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
              <p className={styles.duration} style={{color : `${selectedList === "airing_today"? "white" : "black"}` } } onClick={() => {setSelectedList('airing_today')}} >Airing Today</p>
              <p className={styles.duration} style={{color : `${selectedList === "on_the_air"? "white" : "black"}` } } onClick={() => setSelectedList('on_the_air')} >On The Air</p>
              <p className={styles.duration} style={{color : `${selectedList === "popular"? "white" : "black"}` } } onClick={() => setSelectedList('popular')} >Popular</p>
              <p className={styles.duration} style={{color : `${selectedList === "top_rated"? "white" : "black"}` } } onClick={() => setSelectedList('top_rated')} >Top Rated</p>
            </div>
            <div style={{ display: selectedList === 'airing_today' ? 'flex' : 'none' }} className={styles.trendingList}>
              {tvAiringToday.results.map( (movie) => (
                  <TvCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'on_the_air' ? 'flex' : 'none' }} className={styles.trendingList}>
              {tvOnTheAir.results.map( (movie) => (
                  <TvCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'popular' ? 'flex' : 'none' }} className={styles.trendingList}>
              {tvPopular.results.map( (movie) => (
                  <TvCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div style={{ display: selectedList === 'top_rated' ? 'flex' : 'none' }} className={styles.trendingList}>
              {tvTopRated.results.map( (movie) => (
                  <TvCard key={movie.id} movie={movie} />
              ))}
            </div>
    </section>
  )
}

export default TV
