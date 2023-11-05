import React, { useState } from 'react'

const correctUserName = "Jane";
const correctPassword = "jane123";

const Validation = ({ setIsUserLoggedIn }) => {


    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState({
        userName: "",
        password: "",
    });

    const isButtonDisable = user.userName === correctUserName && user.password === correctPassword;

    const submitHandler = () => {
        setIsUserLoggedIn(true);
    }

    return (
        <div>
            <input
                onChange={(e) => {
                    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                }}
                name='userName'
                placeholder='userName'
            />
            <input
                onChange={(e) => {
                    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                }}
                name='password'
                placeholder='password' />

            <button onClick={submitHandler} disabled={!isButtonDisable}>Enter</button>

        </div>
    )
}
export default Validation;
