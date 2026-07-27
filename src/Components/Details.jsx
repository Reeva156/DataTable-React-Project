import React from "react";
import { useLocation, Link } from "react-router-dom";

function Details() {
  const location = useLocation();
  const user = location.state;

  if (!user) {
    return (
      <div className="container">
        <h2>No User Data Found</h2>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>User Details</h2>

      <div className="card">
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Details;
