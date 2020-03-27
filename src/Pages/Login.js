import React from 'react'
import { useUserDispatch, loginUser } from "../Context/UserContext";

function Login(props) {
    var userDispatch = useUserDispatch();
    var [isLoading, setIsLoading] = useState(false);
    var [error, setError] = useState(null);
    var [activeTabId, setActiveTabId] = useState(0);
    var [nameValue, setNameValue] = useState("");
    var [loginValue, setLoginValue] = useState("");
    var [passwordValue, setPasswordValue] = useState("");
    return (
        <div>
            
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
