export async function API( option = '', additional = '') {
    try {
        const res = await fetch(`https://backend-for-apis.onrender.com/api/tmdb/${option}?${additional}`);
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