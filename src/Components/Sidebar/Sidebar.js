import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default function Sidebar() {
 
  return (
    <div className="wrapper">
    <nav id="sidebar">

        <ul className="list-unstyled components">
            {/* <p>Dummy Heading</p> */}
            <li>
            <FontAwesomeIcon icon="home"/>
            <Link to='/app/dashboard'>Dashboard</Link>
            </li>
            <li>
                <Link to='/app/register'>Add User</Link>
            </li>
            <li>
            <Link to='/app/profiles'>Profiles</Link>
            </li>
        </ul>

    </nav>
 
    <div id="content">

    </div>
</div>
  );
  
}
