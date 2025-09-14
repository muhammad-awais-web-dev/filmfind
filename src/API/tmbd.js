const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.AUTHORIZATION}`
  }
};
export async function fetchPopularMovies(page = 1){
    try {
        const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`, options);
        const json = await res.json();
        return json;
    } catch (err) {
        return console.error(err);
    }
}

export async function trendingMovies(duration = 'day') {
    try {
        const res = await fetch(`${BASE_URL}/trending/movie/${duration}?api_key=${API_KEY}`, options);
        const json = await res.json();
        return json;
    } catch (err) {
        return console.error(err);
    }
}

export async function trendingTv(duration = 'day') {
    try {
        const res = await fetch(`${BASE_URL}/trending/tv/${duration}?api_key=${API_KEY}`, options);
        const json = await res.json();
        return json;
    } catch (err) {
        return console.error(err);
    }
}