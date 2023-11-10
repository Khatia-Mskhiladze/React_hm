import './App.css';
import './reset.css';
import Universities from './pages/Universities/Universities';
import Home from './pages/Home/Home';
import NotFound from './pages/not_found/NotFound';
import { Route, Routes } from 'react-router-dom';
import routes from './constants/Routes';




function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path={routes.home} Component={Home} />
        <Route path={routes.universities} Component={Universities} />
        <Route path={routes.notfound} Component={NotFound} />
      </Routes>

    </div>
  );
}

export default App;
