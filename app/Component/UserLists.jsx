"use client";

import { useState } from "react";

export default function UsersList({ users }) {
  const [data, setData] = useState(users || []);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [updateId, setUpdateId] = useState(null);

  // VALIDATION FUNCTION
  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // ADD USER
  const handleAddUser = () => {
    if (!validate()) return;

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      isLocal: true,
    };

    setData([...data, newUser]);
    setFormData({ name: "", email: "" });
    setErrors({ name: "", email: "" });
    setShowForm(false);
  };

  // OPEN UPDATE
  const handleUpdate = (user) => {
    setUpdateId(user.id);
    setFormData({ name: user.name, email: user.email });
    setErrors({ name: "", email: "" });
    setShowForm(true);
  };

  // SAVE UPDATE
  const saveUpdate = () => {
    if (!validate()) return;

    const updatedData = data.map((user) =>
      user.id === updateId ? { ...user, name: formData.name, email: formData.email } : user
    );

    setData(updatedData);
    setUpdateId(null);
    setFormData({ name: "", email: "" });
    setErrors({ name: "", email: "" });
    setShowForm(false);
  };

  // DELETE USER
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setData(data.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Profile</h1>
        <button
          onClick={() => { setShowForm(true); setUpdateId(null); setFormData({ name: "", email: "" }); setErrors({ name: "", email: "" }) }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="font-semibold text-xl mb-3">
              {updateId ? "Update User" : "Add User"}
            </h2>

            <div>
              <input
                type="text"
                placeholder="Name"
                className="border w-full p-2 rounded mb-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm mb-2">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="border w-full p-2 rounded mb-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-2">{errors.email}</p>
              )}
            </div>

            <button
              onClick={updateId ? saveUpdate : handleAddUser}
              className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700"
            >
              {updateId ? "Save Changes" : "Save User"}
            </button>

            <button
              onClick={() => { setShowForm(false); setUpdateId(null); setFormData({ name: "", email: "" }); setErrors({ name: "", email: "" }) }}
              className="bg-gray-300 w-full py-2 rounded-md hover:bg-gray-400 mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* USERS LIST */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data.map((user) => (
          <div key={user.id} className="flex justify-center">
            <div className="flex flex-col bg-white shadow-md rounded-xl w-64 p-4 items-center border">
              <div className="h-28 w-full bg-gray-100 rounded-lg flex justify-center items-center overflow-hidden">
                <img
                  src="/person2.png"
                  alt="profile"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-3 text-center">
                <h1 className="text-lg font-semibold text-gray-900">{user.name}</h1>
                <h3 className="text-sm text-gray-600">{user.email}</h3>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => { setShowForm(true); setUpdateId(null); setFormData({ name: "", email: "" }); setErrors({ name: "", email: "" }) }}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  Add
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(user)}
                  className="bg-green-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
