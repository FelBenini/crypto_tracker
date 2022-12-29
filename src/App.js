import './style/App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import SideMenu from './components/side-menu.js'

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <section id="body-section">
          <SideMenu/>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="otherpage" element={<OtherPage/>}/>
        </Routes>
        </section>
      </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      Hey
    </div>
  )
}

function OtherPage() {
  return (
    <div>
      Another page here
    </div>
  )
}

export default App;
