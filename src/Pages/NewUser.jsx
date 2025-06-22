import React, { useState } from "react";
import axios from "axios";
import styles from "./NewUser.module.css";

const NewUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    techStack: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/software-engineer", formData);
      alert("User created successfully!");
      setFormData({ name: "", techStack: "" }); 
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to create user.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New User</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="techStack">Tech Stack</label>
          <input
            type="text"
            id="techStack"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default NewUser;