import './App.css';
import React from "react";
import Register from './components/register/Register';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from "react-router-dom"
import Profile from './components/profile/Profile';
import HomePage from './components/home/HomePage';
import MyTreesPage from './components/my_trees/MyTreesPage';


const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-trees" element={<MyTreesPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
