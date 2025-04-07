import React, { useState } from 'react';

function RegistrationForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, password });
    alert('Registration successful!');
    
  
    setName('');
    setEmail('');
    setPassword('');
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    backgroundColor: 'white'
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px'
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <div style={formStyle}>
      <h2 style={headingStyle}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <input
          type="email"
          placeholder="Email Address"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;