import React, {useState} from 'react';
import SignIn from '../../components/SignIn';
import Universities from '../Universities/Universities';




const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

     
  
    return (
        <div className='homePageContainer'>
            <h1 className='mainText'>კეთილი იყოს თქვენი მობრძანება უნივერსიტეტების გვერდზე, სადაც შეგიძლიათ გაიგოთ ინფორმაცია სასურველი უნივერსიტეტის შესახებ</h1>

            <div className='searchDiv'>
                <h2 className='searchText'>აირჩიეთ სასურველი ქვეყანა:</h2>

              
                {isLoggedIn ? <Universities /> : <SignIn setIsLoggedIn={setIsLoggedIn} />}
               
            </div>


        </div>
    )
}

export default Home