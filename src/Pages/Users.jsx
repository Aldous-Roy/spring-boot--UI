import { useEffect, useState } from "react";
import axios from "axios";
import "./User.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios
      .get("http://localhost:8080/software-engineer")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:8080/software-engineer/${id}`)
        .then(() => {
          alert("User deleted successfully");
          fetchUsers(); // Refresh user list
        })
        .catch((err) => {
          console.error("Error deleting user:", err);
          alert("Failed to delete user");
        });
    }
  };

  return (
    <div className="user-container">
      <h2 style={{
        textAlign: "center",
      }}>Users List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Tech Stack</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.techStack}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;