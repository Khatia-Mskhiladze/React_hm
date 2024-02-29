import React from "react";
import Form from "../../components/SignInForm/Form";
import { useLocation } from "react-router-dom";
import Styles from './SignIn.module.css';

const SignIn = () => {
  const location = useLocation();
  const success = location?.state?.success;
  return (
    <div className={Styles.congrats}>
          {success && <h1>Congratulations! You are successfully signed up!</h1>}
      <Form />
    </div>
  );
};

export default SignIn;
