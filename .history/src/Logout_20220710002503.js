import React from "react";
import { useHistory } from "react-router-dom";
import { useKeycloak } from '@react-keycloak-fork/web'
function Logout() {
  const { keycloak, initialized } = useKeycloak()
  const history = useHistory();
  function logout() {
    history.push('/user-details');
    keycloak.logout();
  }

  return <button onClick={() => logout()}>Logout</button>;
}

export default Logout;
