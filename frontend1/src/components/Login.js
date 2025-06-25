// import React, { useState } from 'react';

// const Login = ({ setToken, setUser }) => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form)
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);
//       setToken(data.token);
//       setUser(data.user);
//     } catch (err) {
//       setMessage(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input placeholder="Email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /><br />
//       <input placeholder="Password" type="password" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} /><br />
//       <button type="submit">Login</button>
//       <p>{message}</p>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import './Login.css'; // Optional: if you want to use a separate CSS file for Login

const Login = ({ setToken, setUser }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setToken(data.token);
      setUser(data.user);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2 className="form-title">Login</h2>
        <input
          className="form-input"
          placeholder="Email"
          type="email"
          required
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="form-input"
          placeholder="Password"
          type="password"
          required
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button className="form-button" type="submit">Login</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
