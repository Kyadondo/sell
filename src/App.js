import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import CartPage from './pages/CartPage';
import UserAccountPage from './pages/UserAccountPage';

import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage'
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OrderHistory from './components/OrderHistory';
import Orders from './pages/Orders';
import Profile from './pages/Profile'
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/About" element={<AboutUsPage/>} />
        <Route path="/account" element={<UserAccountPage />} />
        <Route path="/signin" element={<LoginPage/>} />
        <Route path= "/register" element={<SignupPage/> } />

        <Route
          path="/dashboard"
          element={<ProtectedRoute element={Dashboard} />}
        />
      <Route path="/Orders" element={< Orders/>} />
      <Route path="/profile" element={< Profile /> } />
      <Route path="/settings" element = {<Settings/>} />
      <Route path="/Notifications" element={<Notifications/>}/> 


        

        

      </Routes>
    </Router>
  );
}

export default App;
