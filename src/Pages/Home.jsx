import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DataTable from "../components/DataTable";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (user) => {
    const updatedUsers = users.filter((item) => item.id !== user.id);
    setUsers(updatedUsers);
  };
  const handleUpdate = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user,
    );

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <DataTable
          users={users}
          onView={(user) => navigate(`/view/${user.id}`, { state: user })}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;
