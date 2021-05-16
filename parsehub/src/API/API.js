const API_URL = 'http://localhost:5001';

export async function getDir(pathway) {
    const res = await fetch(`${API_URL}/path/${pathway}`);
    return res.json();
}
