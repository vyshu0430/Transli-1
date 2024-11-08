
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/Translator')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing POST request bodies (for form data)
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Path to the JSON file where user data is stored in the data folder
const usersFile = path.join(__dirname, 'data', 'users.json');

// Ensure that the users.json file exists
if (!fs.existsSync(usersFile)) {
  fs.writeFileSync(usersFile, '[]');
}

// Function to read users from JSON file
function readUsers() {
  try {
    const data = fs.readFileSync(usersFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Function to write users to JSON file
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});



app.get('/registration', (req, res) => {
  res.render('registration', { title: 'Register' });
});


app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

app.get('/transli', (req, res) => {
  res.render('transli', { title: 'Transli' });
});

// app.get('/dashboard', (req, res) => {
//   res.render('dashboard');
// });

app.get('/profile', (req, res) => {
  res.render('profile');
});


// Registration route
app.post('/register', async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.render('registration', { title: 'Register', error: 'Username already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword, // Storing hashed password
      firstName,
      lastName
    });

    // Save the user to the database
    await newUser.save();

    // Redirect to the dashboard
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error registering user:', error);
    res.render('registration', { title: 'Register', error: 'Failed to register user' });
  }
});

app.get('/dashboard', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    
    // Render the dashboard and pass the users data
    res.render('dashboard', { title: 'Dashboard', users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.render('dashboard', { title: 'Dashboard', error: 'Failed to load user details' });
  }
});


// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.render('login', { title: 'Login', error: 'Invalid email or password' });
    }

    // Compare the entered password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.render('login', { title: 'Login', error: 'Invalid email or password' });
    }

    // Successful login - redirect to the dashboard or another page
    res.redirect('/transli');
  } catch (error) {
    console.error('Error during login:', error);
    res.render('login', { title: 'Login', error: 'An error occurred. Please try again.' });
  }
});



// Start the server
require('dotenv').config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

