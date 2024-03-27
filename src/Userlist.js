import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
  ]);

  const duplicateUser = (userId) => {
    const userToDuplicate = users.find((user) => user.id === userId);
    if (userToDuplicate) {
      const newUser = { ...userToDuplicate, id: Math.random() }; // Generate a new random id for the duplicated user
      setUsers([...users, newUser]);
    }
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <Button variant="primary" onClick={() => duplicateUser(user.id)}>
              Duplicate
            </Button>
            <Button variant="danger" onClick={() => deleteUser(user.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
