import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './Login/index'
import Home from './Home/index'
import { UserProvider } from './context/UserContext'
import { ArtistsProvider } from './context/ArtistsContext';
import { TracksProvider } from './context/TracksContext';

  
function App() {
  return (  
      <Switch>
        <Route exact path='/' component={Login}/>
          <UserProvider>
            <ArtistsProvider>
              <TracksProvider>
                <Route exact path='/home' component={Home} />
              </TracksProvider>
            </ArtistsProvider>
          </UserProvider>
      </Switch>
  );
}

export default App;
