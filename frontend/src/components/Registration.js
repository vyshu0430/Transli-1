import React, { useState } from 'react';
import '../assets/dashboard.css'; // Ensure to import your styles for proper styling

const Registration = () => {
    // State for form inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const registerUser = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
            alert('User registered successfully');
            window.location.href = '/dashboard'; // Redirect to dashboard
        } else {
            alert('Failed to register user');
        }
    };

    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="header-container">
                    <h1>Translator Website</h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="home.html">HOME</a></li>
                        <li><a className="reservation" href="login.html">LOGIN</a></li>
                        <li><a href="Transli.html">TRANSLI</a></li>
                        <li><a href="registration.html">Registration</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a href="profile.html">Profile</a></li>
                    </ul>
                </div>
            </header>

            {/* Registration Form */}
            <div className="registration-container">
                <h2>Register for Your Free Account</h2>
                <form id="registration-form" onSubmit={registerUser}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="submit-btn">
                            Register
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer Section */}
            <footer>
                <div className="footer-container">
                    <p>&copy; 2024 Translator Website | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Registration;
