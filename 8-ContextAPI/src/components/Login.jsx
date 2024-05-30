import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <div>
            <div>
                <h2>Login</h2>
                <input type="text" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"  />
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}