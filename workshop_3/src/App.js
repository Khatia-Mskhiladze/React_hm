import { useState } from "react";
import './App.css';
import './reset.css';
import Validation from './components/Validation';
import Users from './components/Users';


function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  return (
    <div className="userValidation">
      {isUserLoggedIn ? <Users /> : < Validation setIsUserLoggedIn={setIsUserLoggedIn} /> }


    </div>
  );
}

export default App;
