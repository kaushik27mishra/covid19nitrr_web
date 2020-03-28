import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default function Sidebar() {
 
  return (
    <div className="wrapper" style={{border:"1px solid grey", boxShadow:"1px 1px 10px grey"}}>
    <nav id="sidebar" style={{background:"white"}}>

        <ul className="list-unstyled components">
            {/* <p>Dummy Heading</p> */}
            <li style={{marginLeft:"5vw"}}>
            {/*<FontAwesomeIcon icon="home"/>*/}
            <Link to='/app/dashboard' style={{color:"grey"}}>Dashboard</Link>
            </li>
            <li style={{marginLeft:"5vw"}}>
                <Link to='/app/register' style={{color:"grey"}}>Add User</Link>
            </li>
            <li style={{marginLeft:"5vw"}}>
            <Link to='/app/profiles' style={{color:"grey"}}>Profiles</Link>
            </li>
        </ul>

    </nav>
 
    <div id="content">

    </div>
</div>
  );
  
}
