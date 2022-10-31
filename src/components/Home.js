import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete the user ${user.name}`
    );
    console.log(agree);
    if (agree) {
      console.log("Deleting User", user._id);
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("User Deleted Successfully");
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div>
      <h3>Users: {displayUsers.length}</h3>
      <div>
        {displayUsers.map((user) => (
          <div className="users" key={user._id}>
            <p>Name: {user.name}</p>
            <p>Address: {user.address}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => handleDelete(user)}>Delete User</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
