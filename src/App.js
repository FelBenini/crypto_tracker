import './style/App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import SideMenu from './components/side-menu.js'
import Homepage from './pages/homepage.js'
import SearchPage from './pages/searchPage';
import MobileMenu from './components/mobile-menu';
import CoinPage from './pages/coinpage';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <SideMenu/>
        <MobileMenu/>
        <section id="body-section">
        <Routes>
          <Route path="" element={<Homepage/>}/>
          <Route path="search">
          <Route exact path=":query" element={<SearchPage/>}/>
          </Route>
          <Route path="coin">
          <Route exact path=":id" element={<CoinPage/>}/>
          </Route>
        </Routes>
        </section>
      </BrowserRouter>
  );
}

export default App;
