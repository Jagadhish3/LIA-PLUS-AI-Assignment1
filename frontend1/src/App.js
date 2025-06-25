
import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Posts from './components/Posts';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [page, setPage] = useState('login');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [token, user]);

  const logout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setPage('login');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Blogs</h1>
      {!token ? (
        page === 'login' ? (
          <>
            <Login setToken={setToken} setUser={setUser} />
            <p>Don't have an account? <button onClick={() => setPage('register')}>Register</button></p>
          </>
        ) : (
          <>
            <Register />
            <p>Already have an account? <button onClick={() => setPage('login')}>Login</button></p>
          </>
        )
      ) : (
        <>
          <p>Welcome, {user?.name} <button onClick={logout}>Logout</button></p>
          <Posts token={token} />
        </>
      )}
    </div>
  );
};

export default App;

