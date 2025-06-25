// import React, { useState } from 'react';

// const Register = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form)
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);
//       setMessage('Registration successful. You can login now.');
//     } catch (err) {
//       setMessage(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input placeholder="Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /><br />
//       <input placeholder="Email" required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /><br />
//       <input placeholder="Password" required type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} /><br />
//       <button type="submit">Register</button>
//       <p>{message}</p>
//     </form>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import './Register.css'; // Import CSS file for styling

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setMessage('Registration successful. You can login now.');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Register</h2>
        <input
          className="form-input"
          placeholder="Name"
          required
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-input"
          placeholder="Email"
          required
          type="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="form-input"
          placeholder="Password"
          required
          type="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button className="form-button" type="submit">Register</button>
        <p className="form-message">{message}</p>
      </form>
    </div>
  );
};

export default Register;
