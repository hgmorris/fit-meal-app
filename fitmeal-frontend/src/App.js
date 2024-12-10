// src/App.js (Frontend)
import React, { useEffect, useState } from 'react';
import { fetchUsers, updateUser } from './services/api';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: '' });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateUser = async (id) => {
    try {
      const updatedUser = await updateUser(id, formData);
      setUsers(users.map(user => (user.id === id ? updatedUser : user)));
      setSelectedUser(null);
      setFormData({ name: '', email: '', password: '', role: '' });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => setSelectedUser(user)}>Edit</button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h2>Edit User</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdateUser(selectedUser.id); }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder="Role"
            />
            <button type="submit">Update User</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

