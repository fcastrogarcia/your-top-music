// import React, { useEffect, useState, useContext } from 'react'
// import { AuthContext } from '../context/AuthContext'
// import axios from 'axios'


// export default () => {
//   //Context
//   const { token } = useContext(AuthContext)
//   //State (moverlo a Context)
//   const initialState = {
//     name: '',
//   }
//   const [ artistsData, setArtistsData ] = useState(initialState)
//   const [ isLoading, setIsLoading ] = useState(true) //mudarlo a un state global


//   useEffect(() => {
//     async function getArtistsData() {
//       if ( token === '' || token === null ) {
//         return
//       }
//       const spotify = axios.create({
//         baseURL: 'https://api.spotify.com/v1/me',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       })
//       const artistsRes = await spotify('/top/artists?limit=50')
//       .then( res => { return res.data.items })
//       setArtistsData({
//         name: artistsRes[0].name
//       })
//       setIsLoading(false);
//     }
//     getArtistsData()
//   }, [token])
//   const data = {
//     artistsData,
//     isLoading
//   } 
//   return data
// }