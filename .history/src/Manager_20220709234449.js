import React from 'react'
import useKeyCloak from './UseKeyCloak';

function Manager() {
  const keycloak = useKeyCloak();
  console.log({keycloak})
  return (
    <div>
      {keycloak?.hasResourceRole("manager") ?
        <div>
          <div>
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Second Name</th>
                <th>Id</th>
              </tr>
              <tr>
                <td>Martin</td>
                <td>McFly</td>
                <td>1985</td>
              </tr>
              <tr>
                <td>Hemmet</td>
                <td>Brown</td>
                <td>1955</td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
        :<div>Access denied. You don't have right to access this page.</div>
      }
    </div>
  )
}
export default Manager