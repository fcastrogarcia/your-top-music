import React, { Fragment } from 'react'
import LoginButton from './components/LoginButton'
import './style.css'

const style = {
  'container': {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'height': '70vh',
    'width': 'auto',
    'margin': 'auto',
    'padding': 'auto',
    'text-align': 'center',
    },
  'loginCard': {
    'height': 'auto'
  }
}

const Login = () => (
  <Fragment>    
    <div className='container' style={style.container}>
      <div style={style.loginCard}>
        <span role='img' aria-label='emojis' className='emojis'>
          🤘🎧🎵        
        </span>
        <p className='text'>
          Find out who your most played artists and songs are.  
        </p>
      </div>
    </div>   
    <div className='bottom'>
      <LoginButton />    
    </div>
  </Fragment>    
)


export default Login