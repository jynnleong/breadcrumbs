const API_URL = window.location.hosename === 'localhost' ? 'http://localhost:5000' : '';

export async function getDir(pathway) {
    const res = await fetch(`${API_URL}/path/${pathway}`);
    return res.json();
}
