import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Register from './Components/Register';
import Login from './Components/Login'
import Aboutus from './Components/Aboutus';
import Home from './Components/Home';
import '../src/Components/Register.css';
import { useState } from 'react';
import Error from './Components/Error';
import Edit from './Components/Edit';


function App() {
  const[color,setColor]=useState(0)
  return (
    <>
    <Navbar />
    <div>
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/about' element={<Aboutus />} />
        <Route  path='/'element={<Home/>}/>
        <Route path='*'element={<Error/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
    </>
  );
}
export default App;
