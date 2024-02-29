import React, { useState } from "react";
import styles from "./form.module.css";
import { signUp } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE, SIGN_IN_PAGE } from "../../constants/routes";
import {PacmanLoader} from 'react-spinners';
const Form = () => {
  const [info, setInfo] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signUpHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    signUp(info)
      .then(() => {
        navigate(SIGN_IN_PAGE, { state: { success: true } });
      })
      .catch((err) => {
        setInfo(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <form className={styles.formWrapper}>
      <label htmlFor="userName">UserName</label>
      <input
        autoComplete="true"
        type="text"
        placeholder="username"
        name="userName"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />

      <label htmlFor="email">email</label>
      <input
        autoComplete="true"
        type="text"
        placeholder="E-mail"
        name="email"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        autoComplete="true"
        type="password"
        placeholder="password"
        name="password"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />
       {loading && <PacmanLoader color="#36d7b7" />}
      <button className={styles.submit} type="" onClick={signUpHandler}>
        Submit
      </button>
      <button className={styles.backButton}>
        <Link to={HOME_PAGE}>back to home page</Link>
      </button>
    </form>
  );
};

export default Form;
