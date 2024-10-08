import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';
import './pages.css';

export default function Register() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setUser(
        enteredValues.email,
        enteredValues.password,
        enteredValues.firstName,
        enteredValues.lastName
      );
      console.log(enteredValues);
      navigate('/login'); 
    }
  }

  function setUser(email, password, firstName, lastName) {
    const hashedPassword = bcrypt.hashSync(password, 10); 
    localStorage.setItem('user', JSON.stringify({ email, password: hashedPassword, firstName, lastName }));
  }

  function validateForm() {
    const errors = {};
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!enteredValues.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(enteredValues.email)) {
      errors.email = 'Invalid email format';
    }
    
   
    if (!enteredValues.password) {
      errors.password = 'Password is required';
    } else if (enteredValues.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    
   
    if (!enteredValues.firstName) {
      errors.firstName = 'First Name is required';
    }
    
  
    if (!enteredValues.lastName) {
      errors.lastName = 'Last Name is required';
    }

    return errors;
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [identifier]: '' 
    }));
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
            className="large-input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValues.password}
            className="large-input"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            onChange={(event) => handleInputChange('firstName', event.target.value)}
            value={enteredValues.firstName}
            className="large-input"
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            onChange={(event) => handleInputChange('lastName', event.target.value)}
            value={enteredValues.lastName}
            className="large-input"
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="form-actions">
          <button type="submit" className="button">Register</button>
        </div>
        <div className="register-footer">
          <h5>Already have an account? Log in.</h5> 
          <Link to="/login">
            <button type="button" className="button">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
