import React, { useState } from 'react';
import '../assets/profile.css'; // Ensure the CSS is properly imported

const Profile = () => {
    // Initial state values (you can fetch these from an API or authentication context)
    const [username, setUsername] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');
    const [profilePic, setProfilePic] = useState('path-to-default-profile-picture.jpg');
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newProfilePic, setNewProfilePic] = useState(null);

    // Handle Edit Profile button click
    const toggleEditProfile = () => {
        setIsEditing(!isEditing);
    };

    // Handle Logout button click
    const handleLogout = () => {
        // Add logout functionality (e.g., clearing authentication tokens)
        console.log('Logging out...');
    };

    // Handle form submission to save profile changes
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        setUsername(newUsername || username);
        setEmail(newEmail || email);
        if (newProfilePic) {
            setProfilePic(URL.createObjectURL(newProfilePic));
        }
        setIsEditing(false); // Close the edit form after saving changes
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

            {/* Profile Card Section */}
            <div className="profile-card">
                <img src={profilePic} alt="Profile Picture" className="profile-picture" id="profilePic" />
                <h2 id="usernameDisplay">{username}</h2>
                <p className="profile-info"><span>Email:</span> <span id="emailDisplay">{email}</span></p>
                <p className="profile-info"><span>Account Type:</span> Premium User</p>

                <button className="edit-profile-btn" id="editProfileButton" onClick={toggleEditProfile}>
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
                <button className="logout-btn" id="logoutButton" onClick={handleLogout}>Logout</button>

                {isEditing && (
                    <form className="edit-form" id="editProfileForm" onSubmit={handleProfileSubmit}>
                        <label htmlFor="newUsername">Update Username</label>
                        <input
                            type="text"
                            id="newUsername"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            placeholder="Enter new username"
                        />

                        <label htmlFor="newEmail">Update Email</label>
                        <input
                            type="email"
                            id="newEmail"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            placeholder="Enter new email"
                        />

                        <label htmlFor="newProfilePic">Update Profile Picture</label>
                        <input
                            type="file"
                            id="newProfilePic"
                            accept="image/*"
                            onChange={(e) => setNewProfilePic(e.target.files[0])}
                        />

                        <button type="submit" className="submit-btn">Save Changes</button>
                    </form>
                )}
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

export default Profile;
