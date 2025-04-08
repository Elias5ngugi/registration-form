import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const validate = () => {
    const newErrors = { fullName: '', email: '', password: '' };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
      isValid = false;
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    alert(`🎉 Welcome, ${formData.fullName}! Registration successful.`);
    setFormData({ fullName: '', email: '', password: '' });
  };

 
  const styles = {
    container: {
      background: 'linear-gradient(135deg, #2c3e50, #3498db)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
    },
    formBox: {
      background: '#fff',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '400px',
      animation: 'fadeIn 0.6s ease-in-out',
    },
    title: {
      fontSize: '24px',
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '25px',
    },
    input: {
      width: '100%',
      padding: '14px',
      marginBottom: '10px',
      fontSize: '15px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      outline: 'none',
    },
    inputFocus: {
      borderColor: '#3498db',
      boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.1)',
    },
    error: {
      color: '#e74c3c',
      fontSize: '13px',
      marginBottom: '10px',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#3498db',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#2980b9',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.formBox} onSubmit={handleSubmit}>
        <h2 style={styles.title}>
          Create Your Account</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.fullName && <p style={styles.error}>{errors.fullName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.password && <p style={styles.error}>{errors.password}</p>}

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
