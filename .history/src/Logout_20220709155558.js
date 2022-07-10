import React from 'react';
import { useHistory } from 'react-router-dom'

function Logout(props) {
  const history = useHistory()
  function logout() {
    history.push('/');
    props.keycloak.logout();
  }

  return (
    <button onClick={() => logout()}>
      Logout
    </button>
  );
}

export default Logout;