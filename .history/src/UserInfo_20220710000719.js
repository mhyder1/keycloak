import React, { useEffect, useState } from "react";
import { useKeycloak } from '@react-keycloak-fork/web'

export default function UserInfo() {
  const { keycloak, initialized } = useKeycloak()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    console.log("keycloak", keycloak);

    keycloak.loadUserInfo().then((userInfo) => {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setId(userInfo.sub);
    });
  }, [keycloak]);

  return (
    <div className="UserInfo">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>ID: {id}</p>
    </div>
  );
}
