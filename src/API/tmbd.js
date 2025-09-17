const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`
  }
};

export async function API( option = '', additional = '') {
    try {
        const res = await fetch(`${BASE_URL}/${option}?${additional}`, options);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        if (json.errors) {
            throw new Error(`API error! message: ${json.errors.join(', ')}`);
        }
        return json;
    } catch (err) {
        return console.error(err);
    }
}