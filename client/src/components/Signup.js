// client/src/pages/AuthForm.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ formType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;
      if (formType === 'signup') {
        response = await axios.post('/api/auth/register', { email, password });
        console.log('Signup successful:', response.data.message);
      } else if (formType === 'login') {
        response = await axios.post('/api/auth/login', { email, password });
        console.log('Login successful:', response.data.token);
      }
      // Optionally handle successful signup/login (e.g., redirect or show success message)
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      console.error(`${formType} failed:`, error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>{formType === 'signup' ? 'Signup' : 'Login'}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{formType === 'signup' ? 'Signup' : 'Login'}</button>
      </form>
    </div>
  );
};

export default Signup;
