import React, { useState } from "react";
import axios from "axios";

const SearchUser = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!id) return;

    try {
      const response = await axios.get(`http://localhost:8080/software-engineer/${id}`);
      setUser(response.data);
      setError("");
    } catch (err) {
      setUser(null);
      setError("User not found or error fetching user.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>🔍 Search User by ID</h1>
      <input
        type="number"
        placeholder="Enter user ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Search
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {user && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f1f1f1",
          borderRadius: "8px"
        }}>
          <h3>👤 User Found</h3>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Tech Stack:</strong> {user.techStack}</p>
        </div>
      )}
    </div>
  );
};

export default SearchUser;