import React, { Fragment, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import '../style.css';

const LoginButton = () => {

  const [ loaded, setLoaded ] = useState(true)

  const handleClick = () => {
    setLoaded(!loaded)
    const redirect = window.location = 'http://localhost:8888/login';
    return redirect
  }
  // setTimeout(() => {
    //   setLoaded(loaded)
    // }, 3200)  
    
  return (
    <Fragment>
        <button className={ loaded ? 'button' : 'button loading' } onClick={ handleClick }>
        { loaded && <span className='button-text'>Connect  </span> }
        { loaded && <i class="fab fa-spotify"></i> }
        { !loaded && <ScaleLoader color={'#FFFFFF'} height={'22'} /> }
        </button>
    </Fragment>
  )
}
export default LoginButton

