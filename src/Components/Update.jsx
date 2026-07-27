import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state;

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [age, setAge] = useState(user?.age || "");

  if (!user) {
    return (
      <div className="container">
        <h2>No User Selected</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
      age: Number(age),
    };

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = savedUsers.map((item) =>
      item.id === updatedUser.id ? updatedUser : item,
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/");
  };

  return (
    <div className="container">
      <h2>Update User</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          {" "}
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
