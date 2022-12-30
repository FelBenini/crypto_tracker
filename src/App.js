import './style/App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import SideMenu from './components/side-menu.js'
import Homepage from './pages/homepage.js'

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <SideMenu/>
        <section id="body-section">
        <Routes>
          <Route path="" element={<Homepage/>}/>
          <Route path="otherpage" element={<OtherPage/>}/>
        </Routes>
        </section>
      </BrowserRouter>
  );
}

function OtherPage() {
  return (
    <div>
      Another page here
    </div>
  )
}

export default App;
