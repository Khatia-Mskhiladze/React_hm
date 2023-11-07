import React, { useState } from 'react';


const correctEmail = "digitalAcademy@gmail.com";
const correctPassword = "iLoveReact123";

const Validation = ({ setIsUserLoggedIn }) => {

    const [user, setUser] = useState({
        userEmail: "",
        userPassword: "",
    });

    const isButtonEnable = user.userEmail === correctEmail && user.userPassword === correctPassword;

    const submitHandler = () => {
        setIsUserLoggedIn(true)
    }

    return (
        <div>
            <input
                onChange={(e) => { setUser((prev) => ({ ...prev, [e.target.name]: e.target.value })) }}
                name='userEmail'
                placeholder='E-mail' />
            <input
                onChange={(e) => { setUser((prev) => ({ ...prev, [e.target.name]: e.target.value })) }}
                name='userPassword'
                placeholder='Password' />

                <button onClick={submitHandler} disabled={!isButtonEnable}>Enter</button>
        </div>
    )
}

export default Validation;


