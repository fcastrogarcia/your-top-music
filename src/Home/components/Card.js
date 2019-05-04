import React, { Fragment, useContext } from 'react'
import { ArtistsContext } from '../../context/ArtistsContext'
import { TracksContext } from '../../context/TracksContext'
import '../styles/Card.css'

export const Card = () => {
  
  const { artistsState } = useContext(ArtistsContext);
  const { tracksState } = useContext(TracksContext)

  const  { allTime } = artistsState

  return (
  <Fragment>
    <div className='card'>

    </div>
  </Fragment>
  )
}