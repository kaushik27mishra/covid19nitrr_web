import React, { useState } from 'react'
import { useUserDispatch, loginUser } from "../Context/UserContext";

function Login(props) {
    var userDispatch = useUserDispatch();
    var [isLoading, setIsLoading] = useState(false);
    var [error, setError] = useState(null);
    // var [activeTabId, setActiveTabId] = useState(0);
    // var [nameValue, setNameValue] = useState("");
    var [loginValue, setLoginValue] = useState("");
    var [passwordValue, setPasswordValue] = useState("");
    return (
        <div>
            <h1>Login page</h1>
            <h6>Email</h6>
            <input type="text" onChange={(e) => {setLoginValue(e.target.value)}} value={loginValue}></input>
            <h6>Password</h6>
            <input type="text" onChange={(e) => {setPasswordValue(e.target.value)}} value={passwordValue}></input>
            <button onClick={() =>
    loginUser(
      userDispatch,
      loginValue,
      passwordValue,
      props.history,
      setIsLoading,
      setError,
    )
  }>Login</button>
        </div>
    )
}

export default Login


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
