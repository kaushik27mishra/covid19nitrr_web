import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Sidebar() {
 
  return (
    <div className="wrapper">
    <nav id="sidebar">

        <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li>
            <FontAwesomeIcon icon="home"/>
            <a href="#">Dashboard</a>
            </li>
            <li>
                <a href="#">Add User</a>
            </li>
            <li>
            <a href="#">Profiles</a>
            </li>
        </ul>

    </nav>
 
    <div id="content">

    </div>
</div>
  );
  
}
