import logo from './logo.svg';
import './App.css';

import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Soporte from './Pages/Soporte';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/soporte' element={<Soporte/>} />
      </Routes>
    </>
  );
}

export default App;
