import React, {useState} from "react";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";

import "./entry.style.css";

export const Entry = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleOnChange = e =>{
    const  {name, value} = e.target
    console.log(name, value)
  }


  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        <LoginForm handleOnChange={handleOnChange}
        email={email}
        pass={password}
        />
      </Jumbotron>
    </div>
  );
};

