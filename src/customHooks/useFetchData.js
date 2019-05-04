import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { ArtistsContext } from '../context/ArtistsContext'
import { TracksContext } from '../context/TracksContext'
import { spotify } from '../services/axios'
import { endpoint } from '../services/endpoints'



export default function useFetchUserData(token) {
  //Context
  const { setUserData, setIsError } = useContext(UserContext)
  const { artistsDispatch, artistsState } = useContext(ArtistsContext)
  const { tracksDispatch, tracksState } = useContext(TracksContext)

  //local state
  const [ isLoading, setIsLoading ] = useState(true)


  useEffect(() => {
    async function getData() {
      if (token === '' || token === null ) {
        return
      }
      console.log(token)
      //Request del profile del usuario
      const userRes = await spotify(token)('/')
      .then( res => { return res.data })
      .catch( e => { setIsError(true) })
      if (userRes) { setUserData( {...userRes} ) }
       console.log('hola user data')
      //Request Artists Data short term
      const oneMonthArtists = await spotify(token)(endpoint('artists', 'short_term'))
      .then( res => { return res.data.items })
      .catch( e => { setIsError(true) })
      if (oneMonthArtists) { artistsDispatch({ type: 'SHORT_TERM', payload: oneMonthArtists }) }

      //Request Artists Data medium term
      const sixMonthArtists = await spotify(token)(endpoint('artists', 'medium_term'))
      .then( res => { return res.data.items })
      .catch( e => { setIsError(true) })
      if (sixMonthArtists) { artistsDispatch({ type: 'MEDIUM_TERM', payload: sixMonthArtists }) }
      
      //Request Artists Data long term
      const allTimeArtists = await spotify(token)(endpoint('artists', 'long_term'))
      .then( res => { return res.data.items })
      .catch( e => { setIsError(true) })
      if (allTimeArtists) { artistsDispatch({ type: 'LONG_TERM', payload: allTimeArtists }) }

      //Request tracks short term
      const oneMonthTracks = await spotify(token)(endpoint('tracks', 'short_term'))
      .then( res => { return res.data.items })
      .catch( e => { setIsError(true) })
      if (oneMonthTracks) { tracksDispatch({ type: 'SHORT_TERM', payload: oneMonthTracks }) }
      
      //Request tracks medium term
      const sixMonthTracks = await spotify(token)(endpoint('tracks', 'medium_term'))
      .then( res => { return res.data.items })
      .catch( e => { setIsError(true) })
      if (sixMonthTracks) { tracksDispatch({ type: 'MEDIUM_TERM', payload: sixMonthTracks }) }
      
      //Request tracks long term
      const allTimeTracks = await spotify(token)(endpoint('tracks', 'long_term'))
      .then( res => { return res.data.items })
      .catch( e => { setIsError(true) })
      if (allTimeTracks) { tracksDispatch({ type: 'LONG_TERM', payload: allTimeTracks }) }

      console.log('INNER LOG Artists: ', artistsState)
      console.log('INNER LOG Tracks: ', tracksState)
      setIsLoading(false);
    }

    getData()
  }, [token])
  
  console.log('Artists: ', artistsState)
  console.log('Tracks: ', tracksState)

  const data = {
    isLoading
  }
  return data
}