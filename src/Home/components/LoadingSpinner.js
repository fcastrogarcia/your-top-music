import React from 'react'
import { BarLoader } from 'react-spinners'

export default () => (
  <div className='spinner-body'>
    <span className='' role='img' aria-label='emojis'>
      🎧
    </span>
    <p>We're getting to know you</p>
    <BarLoader width={140} color={'#002280'} />
  </div>
)

