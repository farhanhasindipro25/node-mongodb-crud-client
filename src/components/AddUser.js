import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User added succesfully");
          event.target.reset();
          navigate("/");
        }
      });
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h2>Add Users</h2>
      <br />
      <form onSubmit={handleAddUser} className="add-user-form">
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="Address"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
