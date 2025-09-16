import React from 'react'
import styles from './PreviewPage.module.css';
import { useParams } from 'react-router-dom';
import { tvSerieDetail } from '../../API/tmbd';
import { useEffect, useState } from 'react';

function PreviewPageTv() {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchTvShow = async () => {
      const data = await tvSerieDetail(id);
      setTvShow(data);
      const data2 = await tvSerieDetail(id + '/credits');
      setCast(data2.cast);
    };
    fetchTvShow();
  }, [id]);

  return (
    <main className={styles.previewPage}>
      <section className={styles.basicInfo} style={{ background:  `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original/${tvShow?.backdrop_path}) center/cover no-repeat` }}>
          {id ? (
            <div>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${tvShow?.poster_path}`} alt={tvShow?.name} />
              <div>
                <h1>{tvShow?.name}</h1>
                <span style={{ color: tvShow?.status === 'Ended' ? '#ef4444' : '#4ade80' }} >{tvShow?.status}</span>
                <span>{tvShow?.genres.map(genre => genre.name).join(', ')}</span>
                  <div className={styles.voteIndicator}
                  style={{background: `conic-gradient(${tvShow?.vote_average >= 7 ? '#4ade80' : tvShow?.vote_average >= 5 ? '#fbbf24' : '#ef4444'} ${(tvShow?.vote_average / 10) * 360}deg, #e5e7eb 0deg)`}}>
                  <div className={styles.voteIndicatorFill}
                    style={{color: tvShow?.vote_average >= 7 ? '#4ade80' : tvShow?.vote_average >= 5 ? '#fbbf24' : '#ef4444'}}>
                    {Math.round(tvShow?.vote_average * 10)}%
                  </div>
                </div>
                <span>User Score</span>
                <h2>Overview</h2>
                <p>{tvShow?.overview}</p>
                <h2>Created By</h2>
                <p>{tvShow?.created_by.map(creator => creator.name).join(', ')}</p>
                <h2>Production Companies</h2>
                <p className={styles.productionCompanies} >{tvShow?.production_companies.map(company => company.name).join(', ')}</p>
              </div>
            </div>
          ) : (<>
            <h2>Nothing to show</h2>
            <p>No movie selected for preview.</p></>
          )}
      </section>
      <section className={styles.castList}>
        <h2>Cast</h2>
        <div className={styles.castCards}>
          {cast?.slice(0, 10).map(member => (
            <div key={member.id} className={styles.castCard}>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${member.profile_path}`} alt={member.name} />
              <div className={styles.castInfo}>
                <h3>{member.name}</h3>
                <span>{member.character}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.seasonList}>
        <h2>Seasons</h2>
        <div className={styles.seasonCards}>
          {tvShow?.seasons.map(season => (
            <div key={season.id} className={styles.seasonCard}>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${season.poster_path}`} alt={season.name} />
              <div className={styles.seasonInfo}>
                <h3>{season.name}</h3>
                <span>{season.air_date}</span>
                <p>{season.overview}</p>
                <span>Episodes: {season.episode_count}</span>
                <div className={styles.voteIndicatorSeason}
                  style={{background: `conic-gradient(${season?.vote_average >= 7 ? '#4ade80' : season?.vote_average >= 5 ? '#fbbf24' : '#ef4444'} ${(season?.vote_average / 10) * 360}deg, #e5e7eb 0deg)`}}>
                  <div className={styles.voteIndicatorSeasonFill}
                    style={{color: season?.vote_average >= 7 ? '#4ade80' : season?.vote_average >= 5 ? '#fbbf24' : '#ef4444'}}>
                    {Math.round(season?.vote_average * 10)}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default PreviewPageTv

