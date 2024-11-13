const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Path to the JSON file where registrations will be stored
const jsonFilePath = path.join(__dirname, 'registrations.json');

// Read registrations from the file
const readRegistrations = (callback) => {
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return callback([]);
    }
    const registrations = data ? JSON.parse(data) : [];
    callback(registrations);
  });
};

// Write registrations to the file
const writeRegistrations = (registrations, callback) => {
  fs.writeFile(jsonFilePath, JSON.stringify(registrations, null, 2), (err) => {
    if (err) {
      return callback(false);
    }
    callback(true);
  });
};

// Endpoint to save registration data to JSON file
app.post('/api/register', (req, res) => {
  const registrationData = req.body;

  readRegistrations((registrations) => {
    const existingUser = registrations.find(user => user.username === registrationData.username);
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

    registrations.push(registrationData);

    writeRegistrations(registrations, (success) => {
      if (!success) {
        return res.status(500).send('Error saving registration data');
      }
      res.status(200).send('Registration saved successfully');
    });
  });
});

// Endpoint to validate login credentials
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  readRegistrations((registrations) => {
    const user = registrations.find(user => user.username === username && user.password === password);

    if (user) {
      return res.status(200).send('Login successful');
    } else {
      return res.status(400).send('Invalid username or password');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
