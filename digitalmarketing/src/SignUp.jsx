import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({ onSignUp }) => {
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between sign in and sign up
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission for both sign-in and sign-up
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    console.log("Form Submitted"); // Debugging: Check if form submission is triggered

    if (isRegistering) {
      console.log("Registering User...");

      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      try {
        // Check if the email is already registered
        const response = await fetch(`http://localhost:3001/users?email=${formData.email}`);
        const existingUsers = await response.json();

        console.log("Existing users check:", existingUsers); // Debugging

        if (existingUsers.length > 0) {
          alert('Email already registered! Please sign in.');
        } else {
          // Register the new user
          const newUser = {
            username: formData.username,
            email: formData.email,
            password: formData.password
          };

          console.log("New User Data:", newUser); // Debugging

          // Send POST request to add new user to db.json
          const postResponse = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
          });

          if (postResponse.ok) {
            console.log("User registered successfully");
            alert('Registration successful! You can now sign in.');
            onSignUp(); // Optional: Redirect or call a parent handler
          } else {
            console.log("Failed to register user:", postResponse);
            alert('Registration failed. Please try again.');
          }
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert('There was an error registering the user. Please check the server.');
      }

    } else {
      console.log("Signing In User...");

      try {
        // Sign-in logic: Check if the user exists
        const response = await fetch(`http://localhost:3001/users?email=${formData.email}`);
        const users = await response.json();

        // Debugging: Check the fetched users
        console.log("Fetched users:", users);

        // Verify if the user exists and if the password is correct
        if (users.length === 0) {
          alert('No account found with this email. Please register first.');
        } else if (users[0].password !== formData.password) {
          alert('Incorrect password. Please try again.');
        } else {
          console.log('Sign-in successful:', users[0]);
          alert('Sign-in successful!');
          onSignUp(); // Optional: Redirect or call a parent handler
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
        alert('There was an error signing in. Please check the server.');
      }
    }
  };

  // Toggle between registration and sign-in form
  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="sign-up-container">
      <h1 className="logo">Digi-Marketing Pro</h1>
      <h2>{isRegistering ? 'Register' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {isRegistering && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit" className="sign-up-button">
          {isRegistering ? 'Register' : 'Sign In'}
        </button>
      </form>

      <p>
        {isRegistering ? 'Already have an account?' : 'Don’t have an account?'}{' '}
        <button type="button" onClick={toggleForm} className="toggle-button">
          {isRegistering ? 'Sign In' : 'Register'}
        </button>
      </p>
    </div>
  );
};

export default SignUp;

