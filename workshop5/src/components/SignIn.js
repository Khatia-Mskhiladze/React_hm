import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../constants/Routes';


const correctCountry = "Georgia";

const SignIn = ({setIsLoggedIn}) => {

    const [country, setCountry] = useState({
        countryName: '',
    });


    const isButtonAble = country.countryName === correctCountry;
    
    const submit = ()=>{
        setIsLoggedIn(true);
    }
   

    return (
        <div className='inputContainer'>
            
            <input  onChange={(e)=>{setCountry((prev)=>({...prev, [e.target.name] : e.target.value}))} } type='search' name='countryName'
            placeholder='ქვეყნის დასახელება' />

            <button onClick={submit} disabled={!isButtonAble}>
                <NavLink to={routes.universities}>Enter</NavLink>
            </button>

        </div>
    )
}

export default SignIn;