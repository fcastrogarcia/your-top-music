import axios from "axios";
import queryString from "query-string";

//data fetching
export function spotify(token) {
  return axios.create({
    baseURL: "https://api.spotify.com/v1/me",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
//playlists creation
export function newPlaylist(user_id, token) {
  return axios.create({
    baseURL: `https://api.spotify.com/v1/users/${user_id}/playlists`,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    }
  });
}
//playlist body request
export const playlistBody = [
  {
    name: "All-Time Top Tracks",
    description: "powered by yourtopmusic.netlify.com",
    public: false
  },
  {
    name: "Last Six-Months Top Tracks",
    description: "powered by yourtopmusic.netlify.com",
    public: false
  },
  {
    name: "Last Month Top Tracks",
    description: "powered by yourtopmusic.netlify.com",
    public: false
  }
];
//add tracks to playlist and get playlist image
export function handlePlaylists(playlist_id, token) {
  return axios.create({
    baseURL: `https://api.spotify.com/v1/playlists/${playlist_id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    }
  });
}

//new token
export async function getNewToken(refreshToken) {
  const newToken = axios.create({
    baseURL: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*"
    }
  });
  const data = queryString.stringify({
    grant_type: "refresh_token",
    refresh_token: `${refreshToken}`
  });
  return await newToken.post("/", data);
}
