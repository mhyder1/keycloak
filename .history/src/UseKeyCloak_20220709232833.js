import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";

function useKeyCloak() {
  const [keycloak, setKeycloak] = useState(null);

  useEffect(() => {
    const initSetting = {
      // onLoad: 'login-required',
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
    };
    const keycloak = new Keycloak();

    console.log("before init - authenticated: ", keycloak.authenticated);

    keycloak.init(initSetting).then(() => {
      console.log("init - authenticated");
      setKeycloak(keycloak);
    });
    console.log("afer init - authenticated: ", keycloak.authenticated);
  }, []);

  return keycloak;
}

export default useKeyCloak;
