import React, { useState } from 'react';

const UserList = () => {
  const initialUsers = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      isAdmin: true,
    },
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
      isAdmin: false,
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [editFormData, setEditFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    isAdmin: false,
  });

  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setEditFormData({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSaveClick = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUser ? { ...user, ...editFormData } : user
      )
    );
    setEditingUser(null);
  };

  const handleDeleteClick = (userId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this user?'
    );
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-left text-4xl font-bold mb-6">Users</h1>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="py-2 px-4 text-center">ID</th>
              <th className="py-2 px-4 text-center">First Name</th>
              <th className="py-2 px-4 text-center">Last Name</th>
              <th className="py-2 px-4 text-center">Email</th>
              <th className="py-2 px-4 text-center">Is Admin</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">
                  {editingUser === user.id ? (
                    <input
                      type="text"
                      name="firstname"
                      value={editFormData.firstname}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.firstname
                  )}
                </td>
                <td className="py-2 px-4">
                  {editingUser === user.id ? (
                    <input
                      type="text"
                      name="lastname"
                      value={editFormData.lastname}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.lastname
                  )}
                </td>
                <td className="py-2 px-4">
                  {editingUser === user.id ? (
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="py-2 px-4">
                  {editingUser === user.id ? (
                    <input
                      type="checkbox"
                      name="isAdmin"
                      checked={editFormData.isAdmin}
                      onChange={handleInputChange}
                    />
                  ) : user.isAdmin ? (
                    'Yes'
                  ) : (
                    'No'
                  )}
                </td>
                <td className="py-2 px-4">
                  {editingUser === user.id ? (
                    <button
                      onClick={handleSaveClick}
                      className="text-green-500 hover:underline"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(user)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
