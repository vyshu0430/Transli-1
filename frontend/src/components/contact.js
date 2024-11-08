import React, { useState } from 'react';
import '../assets/contact.css'; // Assuming the CSS file is located in the same folder

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you could implement email sending logic (e.g., using a backend API or a service like EmailJS)
        alert('Message sent successfully!');
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

            {/* Contact Section */}
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us using the form below:</p>
                <form onSubmit={handleSubmit} id="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
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
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="submit-btn">Send Message</button>
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

export default Contact;
