import React, { useState } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import NavigationMenu from "./component/NavigationMenu";
import Portal from "./Pages/Portal";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Services from "./Pages/Services";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/:name/:number" element={<Portal />}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} >
          <Route index element={<Navigate to='products' />}/>
          <Route path="products" element={<Products />}/>
          <Route  path="services" element={<Services />}/>
        </Route>
        <Route path="/contact" element={isLoggedIn?<Contact /> : <Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;



