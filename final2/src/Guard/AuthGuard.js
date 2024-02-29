import React from "react";
import { useAuthContext } from "../context/auth/AuthContextProvider";
import { Link } from "react-router-dom";
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from "../constants/routes";
import Styles from './AuthGuard.module.css';

const AuthGuard = ({ children }) => {
  const { state } = useAuthContext();
  return (
    <>
      {state.isAuthenticated ? (
        children
      ) : (
        <div className={Styles.firstPage}>
          <h1 className={Styles.firstText}>You are not AUTHENTICATED</h1>
          <h4>Please sign in or sign up</h4>
          <button className={Styles.signInButton}>
            <Link to={SIGN_IN_PAGE}>Sign IN</Link>
          </button>
          <button className={Styles.signUpButton}>
            <Link to={SIGN_UP_PAGE}>Sign UP</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default AuthGuard;
