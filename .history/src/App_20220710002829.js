import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak-fork/web'
import keycloak from './keycloak'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Public from './PublicPage';
import UserDetails from './UserDetails';
import Manager from './Manager';
import './App.css';

function App() {

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <BrowserRouter>
        <div className="container">
          <ul>
            <li><Link to="/welcome">Welcome Page</Link></li>
            <li><Link to="/public">Public page</Link></li>
            <li><Link to="/manager">Manager page</Link></li>
            <li><Link to="/user-details">User Details</Link></li>
          </ul>
          <Route exact path="/welcome" component={Welcome} />
          <Route path="/public" component={Public} />
          <Route path="/manager" component={Manager} />
          <Route path="/user-details" component={UserDetails} />
        </div>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}
export default App;