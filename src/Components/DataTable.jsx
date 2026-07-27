import React from "react";

function DataTable({ users, onView, onUpdate, onDelete }) {
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>

                <td>
                  <button className="view-btn" onClick={() => onView(user)}>
                    View
                  </button>

                  <button className="update-btn" onClick={() => onUpdate(user)}>
                    Update
                  </button>

                  <button className="delete-btn" onClick={() => onDelete(user)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
