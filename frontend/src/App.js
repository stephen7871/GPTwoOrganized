import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Characters from './Characters';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/characters' exact Component={Characters}/>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
