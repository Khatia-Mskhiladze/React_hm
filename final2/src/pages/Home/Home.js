import React from "react";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { logOutAction } from "../../context/auth/actions";
import Fetching from "../../api/fetching/Fetching";
import Styles from './Home.module.css';

const Home = () => {
  const { dispatch } = useAuthContext();
  return (
    <div className={Styles.homeBackground}>
        
      <button className={Styles.logUotButton}
        onClick={() => {
          dispatch(logOutAction());
        }}
      >
        log out
      </button>
      <Fetching/>
    </div>
  );
};

export default Home;
