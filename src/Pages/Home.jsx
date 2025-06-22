import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "Segoe UI, sans-serif" }}>
      <h1 style={{ color: "#007bff" }}>🚀 Welcome to the Developer Hub</h1>
      <p>This is a full-stack application that allows you to manage software engineers using a Spring Boot backend and React frontend.</p>

      <h2 style={{ marginTop: "30px" }}>🧭 Features</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li><Link to="/users">View All Users</Link></li>
        <li><Link to="/new-user">Add New User</Link></li>
        <li><Link to="/search-user">Search User by ID</Link></li>
        <li><Link to="/edit-user">Edit User (Coming Soon)</Link></li>
        <li>Delete User (available in Users table)</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>🛠 Tech Stack</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li><strong>Frontend:</strong> React, Vite, Axios, CSS Modules</li>
        <li><strong>Backend:</strong> Spring Boot, Spring Data JPA, PostgreSQL</li>
        <li><strong>API Communication:</strong> RESTful endpoints, CORS Configured</li>
        <li><strong>Tools:</strong> Postman, IntelliJ IDEA, VSCode</li>
      </ul>

      <p style={{ marginTop: "40px", fontStyle: "italic" }}>
        Use the navigation bar to get started managing your engineers!
      </p>
    </div>
  );
};

export default Home;