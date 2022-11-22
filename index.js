import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Theme } from './theme';
import Blog from "./Blog"
import Services from "./Users"
import Contact from "./Widgets"
import Login from "./login"
import Post from "./Post"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/Services' element={<Services />} ></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Post/:id' element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);

