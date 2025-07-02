// Build a basic routing setup with the React Router

import React from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

export default function Route1() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
            <li>
                <Link to = '/'>Home</Link>
            </li>
            <li>
                <Link to = '/about'>About</Link>
            </li>
            <li>
                 <Link to = '/contact'>Contact</Link>
            </li>
        </ul>
      </nav>
            <Routes>
                <Route path = '/' element = {<Home/>}></Route>
                <Route path = '/about' element = {<About/>}></Route>
                <Route path = '/contact' element = {<Contact/>}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  )
};

