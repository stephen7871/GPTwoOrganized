import logo from './logo.svg';
import './App.css';
import Home from './Home';
//import Characters from './Characters';
// import Films from './Films';
// import Planets from './Planets';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' exact Component={Home}/>
        {/* <Route path='/characters/:id' exact Component={Characters}/> */}
        {/* <Route path='/films/:id' exact Component={Films}/>
        <Route path='/planets/:id' exact Component={Planets}/> */}
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
