import React, { useState } from 'react';
import '../assets/home.css'; // Assuming the CSS file is located in the same folder

const Login = () => {
    // State to store form input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the login form submission (e.g., authentication)
        console.log("Form submitted with:", { email, password });
    };

    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="header-container">
                    <h1>Translator Website</h1>
                </div>
                <div className="container"></div>
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

            {/* Login Form Section */}
            <section id="login">
            <div className="content">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>

            </section>

            {/* Footer Section */}
            <footer>
                <div className="footer-container">
                    <p>&copy; 2024 Translator Website | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Login;
