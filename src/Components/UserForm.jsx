import React, { useState } from  'react';
import Display from './Display';
    
const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <div>
            <form>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                    {
                        firstName.length < 2 && firstName.length > 0 ? <p style={{color: "red"}}>First Name must be at least 2 characters. </p>:<p></p>
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                    {
                        lastName.length < 2 && lastName.length > 0 ? <p style={{color: "red"}}>Last Name must be at least 2 characters. </p>:<p></p>
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    {
                        email.length < 5 && email.length > 0 ? <p style={{color: "red"}}>Email must be at least 5 characters. </p>:<p></p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                    {
                        password.length < 8 && password.length > 0 && <p style={{color: "red"}}>Password must be at least 8 characters. </p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                    {
                        confirmPassword.length < 8 && confirmPassword.length > 0 && <p style={{color: "red"}}>Password must be at least 8 characters.</p>
                    }
                    {
                        confirmPassword.length >= 8 && password !== confirmPassword && <p style={{color: "red"}}>Password and confirm password must match.</p>
                    }
                </div>
            </form>
            <Display firstName = {firstName} lastName = {lastName} email = {email} password = {password} confirmPassword = {confirmPassword} />
        </div>
    );
};

export default UserForm;