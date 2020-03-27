import React from 'react'
import { useUserDispatch, signOut } from "../../Context/UserContext";

function Header(props) {
  var userDispatch = useUserDispatch();

  return (
    <div>
        <nav id="navbar-example2" class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">MI19 Admin Panel</a>
            <ul class="nav nav-pills">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Profile</a>
                <div class="dropdown-menu">
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" onClick={() => signOut(userDispatch, props.history)}>Logout</a>
                </div>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
