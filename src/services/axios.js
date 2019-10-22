import axios from "axios";
import queryString from "query-string";

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
