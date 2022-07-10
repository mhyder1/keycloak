
import { useState, useEffect } from 'react'
import Keycloak from 'keycloak-js';

function useKeyCloak() {
    const [keycloak, setKeycloak] = useState(null);

    useEffect(() => {
        const initSetting = { 
            onLoad: 'login-required',
        }
        const keycloak = Keycloak('/keycloak.json');
        
        console.log("before init - authenticated: ", keycloak.authenticated)

        keycloak.init(initSetting)
            .then(() => {
                console.log("init - authenticated")
                setKeycloak(keycloak)
            });
        console.log("afer init - authenticated: ", keycloak.authenticated)
    }, []);

    return keycloak
}

export default useKeyCloak