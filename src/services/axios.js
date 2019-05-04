import axios from 'axios'
import queryString from 'query-string'


export function spotify(token) {
  return axios.create({
    baseURL: 'https://api.spotify.com/v1/me',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export async function getNewToken(refreshToken) {
  
  const newToken = axios.create({
    baseURL: 'https://accounts.spotify.com/api/token',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    }
  });
  const data = queryString.stringify({
    grant_type: 'refresh_token',
    refresh_token: `${refreshToken}`
  })
  return await newToken.post('/', data)
}