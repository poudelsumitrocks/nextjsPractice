"use client";

import { useState } from "react";

export default function InternshipsList({ internships }) {
  const [data, setData] = useState(internships || []);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    duration: "",
    stipend: "",
    description: "",
    requirements: [],
  });
  const [currentIntern, setCurrentIntern] = useState(null);

  // Add Internship
  const handleAddIntern = () => {
    let valid = true;
    let newErrors = {
      title: "",
      company: "",
      requirements: "",
      location: "",
    };
    if (!formData.title) {
      newErrors.title = "Title is required";
      valid = false;
    }
    if (!formData.company) {
      newErrors.company = "Company is required";
      valid = false;
    }
    if (!formData.location) {
      newErrors.location = "Location is required";
      valid = false;
    }
    if (!formData.requirements) {
      newErrors.requirements = "Enter the requirements";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    if (!formData.title || !formData.company) {
      alert("Title and Company are required!");
      return;
    }

    const newIntern = {
      id: Date.now(),
      ...formData,
      isLocal: true,
    };
    setData([...data, newIntern]);
    setFormData({
      title: "",
      company: "",
      location: "",
      duration: "",
      stipend: "",
      description: "",
      requirements: [],
    });
    setShowAddForm(false);
  };

  // Delete Internship
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this internship?")) {
      setData(data.filter((intern) => intern.id !== id));
    }
  };

  // Open Update Modal
  const handleOpenUpdateForm = (intern) => {
    setCurrentIntern(intern);
    setShowUpdateForm(true);
  };

  // Save Updated Internship
  const handleSaveUpdate = () => {
    setData(data.map((i) => (i.id === currentIntern.id ? currentIntern : i)));
    setShowUpdateForm(false);
    setCurrentIntern(null);
  };

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">Internships</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
        >
          Add Internship
        </button>
      </div>

      {/* ADD INTERNSHIP FORM */}
      {showAddForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="font-semibold text-xl mb-3">Add Internship</h2>
            {["title", "company", "location", "duration", "stipend"].map(
              (field) => (
                <div key={field}>
                  <input
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="border w-full p-2 rounded mb-1"
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm">{errors[field]}</p>
                  )}
                </div>
              )
            )}

            <textarea
              placeholder="Description"
              className="border w-full p-2 rounded mb-2"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <div>
              <input
                type="text"
                placeholder="Requirements (comma separated)"
                className="border w-full p-2 rounded mb-2"
                value={formData.requirements.join(",")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    requirements: e.target.value.split(","),
                  })
                }
              />
              {errors.requirements && (
                <p className="text-red-500 text-sm">{errors.requirements}</p>
              )}
            </div>

            <button
              onClick={handleAddIntern}
              className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 mb-2"
            >
              Save Internship
            </button>

            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-300 w-full py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* UPDATE INTERNSHIP FORM */}
      {showUpdateForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="font-semibold text-xl mb-3">Update Internship</h2>
            <div>
              {["title", "company", "location", "duration", "stipend"].map(
                (field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="border w-full p-2 rounded mb-2"
                    value={currentIntern?.[field] || ""}
                    onChange={(e) =>
                      setCurrentIntern({
                        ...currentIntern,
                        [field]: e.target.value,
                      })
                    }
                  />
                )
              )}
            
            </div>
            <div>
              <textarea
                placeholder="Description"
                className="border w-full p-2 rounded mb-2"
                value={currentIntern?.description || ""}
                onChange={(e) =>
                  setCurrentIntern({
                    ...currentIntern,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Requirements (comma separated)"
                className="border w-full p-2 rounded mb-2"
                value={currentIntern?.requirements?.join(",") || ""}
                onChange={(e) =>
                  setCurrentIntern({
                    ...currentIntern,
                    requirements: e.target.value.split(","),
                  })
                }
              />
            </div>

            <button
              onClick={handleSaveUpdate}
              className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 mb-2"
            >
              Save Changes
            </button>

            <button
              onClick={() => setShowUpdateForm(false)}
              className="bg-gray-300 w-full py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* INTERNSHIP CARDS */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {data.map((intern) => (
          <div key={intern.id} className="flex justify-center">
            <div className="flex flex-col bg-white shadow-md rounded-xl w-64 p-4 border gap-2">
              <h1 className="text-lg font-semibold mb-2">
                Title: {intern.title}
              </h1>
              <p className="text-sm text-gray-600 mb-1">
                Company: {intern.company}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Location: {intern.location}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Duration: {intern.duration}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Stipend: {intern.stipend}
              </p>
              <p className="text-sm text-gray-600 truncate mb-1 hover:cursor-pointer">
                Description: {intern.description}
              </p>

              <h2 className="text-md font-semibold ">
                Requirements:
                <ul className="flex flex-col gap-1 mt-1 ml-8 list-disc">
                  {intern.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="text-md font-medium text-gray-800"
                    >
                      {req}
                    </li>
                  ))}
                </ul>
              </h2>

              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
                <button
                  onClick={() => handleDelete(intern.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleOpenUpdateForm(intern)}
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
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
