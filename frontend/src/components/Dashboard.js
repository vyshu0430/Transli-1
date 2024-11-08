import React, { useState, useEffect } from 'react';
import '../assets/dashboard.css'; // Assuming the CSS file is located in the same folder

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    // Simulating fetching user data, in real-life scenario use fetch or Axios to get data
    useEffect(() => {
        // Here, you'd fetch the user data from an API or database.
        // For demo purposes, we use a static array.
        const fetchedUsers = [
            { username: 'user1', email: 'user1@example.com' },
            { username: 'user2', email: 'user2@example.com' },
            { username: 'user3', email: 'user3@example.com' }
        ];

        setUsers(fetchedUsers);
    }, []); // Empty dependency array means it runs once when the component mounts

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

            {/* Dashboard Section */}
            <div className="table-container">
                <h2>Registered Users</h2>
                <table id="userTable">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

export default Dashboard;
