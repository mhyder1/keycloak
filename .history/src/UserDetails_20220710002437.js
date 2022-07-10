import UserInfo from "./UserInfo";
import Logout from "./Logout";
import React from "react";
import { useKeycloak } from '@react-keycloak-fork/web'
export default function UserDetails() {
  const { keycloak, initialized } = useKeycloak()

  return (
    <div>
      {
        (keycloak?.hasResourceRole("manager") ||
          keycloak?.hasResourceRole("user")) && (
          <div>
            <div>loggin succeed</div>
            <div>
              {" "}
              <UserInfo />
            </div>
            <div>
              <Logout />
            </div>
          </div>
        )}
      {!keycloak?.authenticated && (
        <div>
          <button onClick={() => keycloak.login()}>Login</button>
        </div>
      )}
    </div>
  );
}
