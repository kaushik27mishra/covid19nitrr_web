import React, { useState } from 'react'
import { useUserDispatch, loginUser } from "../Context/UserContext";
import './login.css';

function Login(props) {
    var userDispatch = useUserDispatch();
    var [isLoading, setIsLoading] = useState(false);
    var [error, setError] = useState(null);
    var [activeTabId, setActiveTabId] = useState(0);
    var [nameValue, setNameValue] = useState("");
    var [loginValue, setLoginValue] = useState("");
    var [passwordValue, setPasswordValue] = useState("");
    return (
        <div className="card " id="wrap-card">
        <div className="card" id="login-card"   >
        <div className="card-title">
              <p>Login</p>
              </div>
              
            <form  className="" onSubmit={() =>loginUser(userDispatch,loginValue,passwordValue,props.history,setIsLoading,setError)}>
            
            <input type="text" id="login-form" className="form-group" placeholder="Username" value={loginValue} onChange={(e)=> setLoginValue(e.target.value) }></input>
            <br />
            <input type="password" id="pass-form" className="form-group" placeholder="Password" value={passwordValue} onChange={(e)=> setPasswordValue(e.target.value) }></input>
            <br />
             <input id="login-button" type="submit" value="Sign in" ></input>
            </form>
            </div>
        
        </div>
    )
}

export default Login;

//() =>loginUser(userDispatch,loginValue,passwordValue,props.history,setIsLoading,setError,)
// onClick={() =>
//     loginUser(
//       userDispatch,
//       loginValue,
//       passwordValue,
//       props.history,
//       setIsLoading,
//       setError,
//     )
//   }
