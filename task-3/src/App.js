
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Contact from './component/Contact';
import NavigationMenu from './component/NavigationMenu';

function App() {

   return (
    <div className="App">
      <NavigationMenu />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </div>
  );
}

export default App;