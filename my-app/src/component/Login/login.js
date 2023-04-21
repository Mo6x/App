import React, { useState } from 'react'
import "../Login/login.css";


function login (){

   const [ email, setEmail ] = useState("");
   const [[password, setPassword]] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {setEmail(value);
    }
    if (id === "password") {setPassword(value);
    }
     if (id === "confirmPassword") {setConfirmPassword (value);
    }
}

const handleSubmit = () => {
    if (email && password && confirmPassword && password === confirmPassword) {
        
    }
}
    return(
        <div className="form">
            <div className="form-body">
               
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">login</button>
            </div>
        </div>
       
    )       
}
export default login;