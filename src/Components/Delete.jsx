import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Delete({ users, setUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((item) => item.id === Number(id));

  const handleDelete = () => {
    const updatedUsers = users.filter((item) => item.id !== Number(id));

    setUsers(updatedUsers);
    navigate("/");
  };

  if (!user) {
    return <h2>User not found.</h2>;
  }

  return (
    <div className="delete-container">
      <h2>Delete User</h2>

      <p>
        Are you sure you want to delete{" "}
        <strong>
          {user.firstName} {user.lastName}
        </strong>
        ?
      </p>

      <button onClick={handleDelete}>Yes, Delete</button>

      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
}

export default Delete;
