import React from 'react'
import styles from './PagePreview.module.css';
import { useParams } from 'react-router-dom';
import { movieDetail } from '../../API/tmbd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PreviewPageMovie() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await movieDetail(id);
      setMovie(data);
      const data2 = await movieDetail(id + '/credits');
      setCast(data2.cast);
      const data3 = await movieDetail(id + '/similar');
      setSimilarMovies(data3.results);
    };
    fetchMovie();
  }, [id]);

  return (
    <main className={styles.tvPreviewContainer}>
      <section className={styles.tvHeroSection} style={{ background:  `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}) center/cover no-repeat` }}>
          {id ? (
            <div className={styles.tvMainInfo}>
              <img className={styles.tvPosterImage} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`} alt={movie?.title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; }} />
              <div className={styles.tvDetailsContainer}>
                <h1>{movie?.title}</h1>
                <span>Release Date: {movie?.release_date}</span>
                <span>Runtime: {movie?.runtime} minutes</span>
                <span>{movie?.genres?.map(genre => genre.name).join(', ')}</span>
                  <div className={styles.voteIndicator}
                  style={{background: `conic-gradient(${movie?.vote_average >= 7 ? '#4ade80' : movie?.vote_average >= 5 ? '#fbbf24' : '#ef4444'} ${(movie?.vote_average / 10) * 360}deg, #e5e7eb 0deg)`}}>
                  <div className={styles.voteIndicatorFill}
                    style={{color: movie?.vote_average >= 7 ? '#4ade80' : movie?.vote_average >= 5 ? '#fbbf24' : '#ef4444'}}>
                    {Math.round(movie?.vote_average * 10)}%
                  </div>
                </div>
                <span>User Score</span>
                <h2>Overview</h2>
                <p>{movie?.overview}</p>
                <h2>Budget</h2>
                <p>${movie?.budget?.toLocaleString()}</p>
                <h2>Revenue</h2>
                <p>${movie?.revenue?.toLocaleString()}</p>
                <h2>Production Companies</h2>
                <p className={styles.productionCompanies} >{movie?.production_companies?.map(company => company.name).join(', ')}</p>
              </div>
            </div>
          ) : (<>
            <h2>Nothing to show</h2>
            <p>No movie selected for preview.</p></>
          )}
      </section>
      {cast?.length > 0 && <section className={styles.castList}>
        <h2>Cast</h2>
        <div className={styles.castCards}>
          {cast?.slice(0, 10).map(member => (
            <div key={member.id} className={styles.castCard} onClick={() => {
              window.scrollTo(0, 0);
              navigate('/person/' + member.id);
            }} style={{cursor: 'pointer'}}>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${member.profile_path}`} alt={member.name} onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; }} />
              <div className={styles.castInfo}>
                <h3>{member.name}</h3>
                <span>{member.character}</span>
              </div>
            </div>
          ))}
        </div>
      </section> }
      <section className={styles.similarShows}>
        <h2>Similar Movies</h2>
        <div className={styles.seasonCards}>
          {similarMovies?.map(movie => (
            <div key={movie.id} className={styles.seasonCard} onClick={() => {
              window.scrollTo(0, 0);
              navigate('/preview/movie/' + movie.id);
            }}>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; }} />
              <div className={styles.similarShowInfo}>
                <div className={styles.voteIndicatorSeason}
                  style={{background: `conic-gradient(${movie?.vote_average >= 7 ? '#4ade80' : movie?.vote_average >= 5 ? '#fbbf24' : '#ef4444'} ${(movie?.vote_average / 10) * 360}deg, #e5e7eb 0deg)`}}>
                  <div className={styles.voteIndicatorSeasonFill}
                    style={{color: movie?.vote_average >= 7 ? '#4ade80' : movie?.vote_average >= 5 ? '#fbbf24' : '#ef4444'}}>
                    {Math.round(movie?.vote_average * 10)}%
                  </div>
                </div>
                <h3>{movie.title}</h3>
                <span>{movie.release_date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default PreviewPageMovie