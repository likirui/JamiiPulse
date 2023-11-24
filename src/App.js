import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import AllFeed from './pages/allfeed/AllFeed';
import FriendFeed from './pages/friendfeed/FriendFeed';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Home user={user} onLogout={handleLogout} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/home" element={<Home user={user} onLogout={handleLogout} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/feed" element={<Profile user={user} />} />
        <Route path="/allfeed" element={<AllFeed user={user} />} />
        <Route path="/friendfeed" element={<FriendFeed user={user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
