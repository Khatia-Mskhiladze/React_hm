import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../../constants/Routes';


const Home = () => {
    return (
        <div>
            <h1>ეს არის უნივერსიტეტების გვერდი და შეგიძლიათ გაიგოთ ინფორმაცია სასურველი უნივერსიტეტის შესახებ</h1>

            <h2>აირჩიეთ სასურველი ქვეყანა</h2>

            <input type='search' placeholder='ქვეყნის დასახელება'/>
               <button>
                <NavLink to={routes.universities}>Enter</NavLink>
                </button> 
        
        </div>
    )
}

export default Home