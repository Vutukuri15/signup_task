import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from './userSlice';
import { RootState, AppDispatch } from './store';

const SignupForm: React.FC = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [localError, setLocalError] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, success } = useSelector((state: RootState) => state.user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setLocalError('Passwords do not match.');
      return;
    }
    setLocalError('');
    dispatch(signupUser({ username: form.username, email: form.email, password: form.password }));
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={titleStyle}>Create Account</h2>

        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {localError && <p style={errorStyle}>{localError}</p>}
        {error && <p style={errorStyle}>{JSON.stringify(error)}</p>}
        {success && <p style={successStyle}>User created successfully!</p>}
        {loading && <p style={loadingStyle}>Loading...</p>}

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: '#f4f6f8',
};

const formStyle: React.CSSProperties = {
  maxWidth: '400px',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  background: '#fff',
  width: '100%',
};

const titleStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '20px',
};

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '12px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '14px',
};

const errorStyle: React.CSSProperties = {
  color: 'red',
  textAlign: 'center',
  marginBottom: '12px',
};

const successStyle: React.CSSProperties = {
  color: 'green',
  textAlign: 'center',
  marginBottom: '12px',
};

const loadingStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '12px',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background 0.3s',
};

export default SignupForm;
