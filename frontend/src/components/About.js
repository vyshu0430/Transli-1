import React from 'react';
import '../assets/about.css'; // Assuming the CSS file is located in the same folder

const About = () => {
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
                        <li><a className="reservation" href="#login">LOGIN</a></li>
                        <li><a href="Transli.html">TRANSLI</a></li>
                        <li><a href="registration.html">Registration</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a href="profile.html">Profile</a></li>
                    </ul>
                </div>
            </header>

            {/* About Us Section */}
            <div className="about-container">
                <h2>About Us</h2>
                <p>Welcome to Translator Website! We are passionate about breaking language barriers and making communication easier for people around the world.</p>

                <h3>Our Mission</h3>
                <p>Our mission is to provide fast, accurate, and reliable translation services using advanced technology and human expertise. We aim to connect people, businesses, and cultures by overcoming language challenges.</p>

                <h3>Our Team</h3>
                <div className="team-container">
                    <div className="team-member">
                        <img src="../public/assests/img/girl.jpg" alt="Team Member 1" className="team-photo" />
                        <h4>Anuhya</h4>
                        <p>221fa04621</p>
                    </div>
                    <div className="team-member">
                        <img src="../public/assests/img/boy.jpg" alt="Team Member 2" className="team-photo" />
                        <h4>Devendra</h4>
                        <p>221fa04626</p>
                    </div>
                    <div className="team-member">
                        <img src="../public/assests/img/boy.jpg" alt="Team Member 3" className="team-photo" />
                        <h4>Avinash</h4>
                        <p>221fa04683</p>
                    </div>
                    <div className="team-member">
                        <img src="../public/assests/img/girl.jpg" alt="Team Member 4" className="team-photo" />
                        <h4>Amrutha</h4>
                        <p>221fa04698</p>
                    </div>
                    <div className="team-member">
                        <img src="../public/assests/img/girl.jpg" alt="Team Member 5" className="team-photo" />
                        <h4>Vyshnavi</h4>
                        <p>221fa04704</p>
                    </div>
                    <div className="team-member">
                        <img src="../public/assests/img/boy.jpg" alt="Team Member 6" className="team-photo" />
                        <h4>Manjunadh</h4>
                        <p>221fa04721</p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer>
                <div className="footer-container">
                    <p>&copy; 2024 Translator Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default About;
