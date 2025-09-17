import React from 'react'
import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../../API/tmbd';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies(2)
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
        <section className="home">
            <h1>Welcome to the Movie App</h1>
            <p>Discover the latest movies and TV shows.</p>
        </section>
        <section className="popular-movies">
            <h2>Popular Movies</h2>
            <div className="movie-list">
                {movies && movies.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <h3>{movie.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; }} />
                        <p>Release Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                        </div>
                ))}
                {console.log(movies)}
            </div>
        </section>

    </>
  )
}

export default Home
