import "./login.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Hard-coded credentials for this example
      if (username === 'Bret' && password === '92988-3874') {
        // Fetch user with id 1 from the JSONPlaceholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();

        // Call the onLogin function passed as a prop with the user data
        onLogin(user);

        // Redirect to the dashboard
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">JamiiPulse</h3>
          <span className="loginDesc">
            Connect with friends and the community around you on JamiiPulse.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" value={username} placeholder="Username or Email" className="loginInput" onChange={(e) => setUsername(e.target.value)} />
            <input value={password} placeholder="Password" className="loginInput" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
