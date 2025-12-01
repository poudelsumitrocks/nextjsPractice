"use client";
import { useState } from "react";

export default function Users() {
  const [data, setData] = useState([
    { id: 1, name: "User 1", email: "user1@gmail.com", isLocal: false },
    { id: 2, name: "User 2", email: "user2@gmail.com", isLocal: false }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Add user
  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      isLocal: true // helps show update/delete only for new users
    };

    setData([...data, newUser]);
    setFormData({ name: "", email: "" });
    setShowForm(false);
  };

  // Delete user
  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  // Update user
  const handleUpdate = (id) => {
    const updatedName = prompt("Enter new name:");
    const updatedEmail = prompt("Enter new email:");

    setData(
      data.map((user) =>
        user.id === id
          ? { ...user, name: updatedName, email: updatedEmail }
          : user
      )
    );
  };

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Profile</h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {/* ADD USER FORM */}
      {showForm && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg w-80">
          <h2 className="font-semibold text-xl mb-3">Add User</h2>

          <input
            type="text"
            placeholder="Name"
            className="border w-full p-2 rounded mb-2"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="border w-full p-2 rounded mb-2"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <button
            onClick={handleAddUser}
            className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700"
          >
            Save User
          </button>
        </div>
      )}

      {/* USERS LIST GRID */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {data.map((user) => (
          <div key={user.id} className="flex justify-center">
            <div className="flex flex-col bg-white shadow-md rounded-xl w-64 p-4 items-center border">

              {/* Image */}
              <div className="h-28 w-full bg-gray-100 rounded-lg flex justify-center items-center overflow-hidden">
                <img
                  src="/person2.png"
                  alt="profile"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="mt-3 text-center">
                <h1 className="text-lg font-semibold text-gray-900">
                  {user.name}
                </h1>
                <h3 className="text-sm text-gray-600">{user.email}</h3>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-4">

                {/* Add Button Always Visible */} 
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                  Add
                </button>

                {/* Show Update / Delete ONLY FOR NEW ADDED USERS */}
                {user.isLocal && (
                  <>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => handleUpdate(user.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Update
                    </button>
                  </>
                )}
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
