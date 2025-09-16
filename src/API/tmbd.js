const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.AUTHORIZATION}`
  }
};

export async function API( option = '') {
    try {
        const res = await fetch(`${BASE_URL}/${option}?api_key=${API_KEY}`, options);
        const json = await res.json();
        return json;
    } catch (err) {
        return console.error(err);
    }
}