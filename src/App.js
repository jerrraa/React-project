import React, { useState, useEffect } from 'react';
import {Route, Routes, NavLink, HashRouter} from "react-router-dom";
import axios from "axios";
//router for items
import Items from "./Items";
import Category from "./Category";
import logo from './logo.svg';
import './App.css';



//i couldn't use switch or router as it kept crashing my program.
//using hash router fixed the issue.
const App = () => {
  return (
    <HashRouter>
      <ul>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/Items">Items</NavLink>
        </li>
        <li>
          <NavLink to="/category">Categories</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact></Route>
        <Route path="/Items" element={<Items />}></Route>
        <Route path="/category" element= {<Category />}></Route>
      </Routes>
    </HashRouter>
          
  );
};

export default App;



