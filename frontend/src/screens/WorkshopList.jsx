import React, { useState } from 'react';

const WorkshopList = () => {
  const initialWorkshops = [
    {
      id: 1,
      name: 'shoes',
      slug: 'sample-workshop',
      description: 'this is a workshop',
      date: '2024-08-05T14:00:00.000+00:00',
      duration: 2,
      capacity: 15,
    },
    {
      id: 2,
      name: 'shoes',
      slug: 'sample-workshop',
      description: 'this is a workshop',
      date: '2024-08-05T14:00:00.000+00:00',
      duration: 2,
      capacity: 15,
    },
  ];

  const [workshops, setWorkshops] = useState(initialWorkshops);
  const [editingWorkshop, setEditingWorkshop] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    slug: '',
    description: '',
    date: '',
    duration: '',
    capacity: '',
  });
  const [newWorkshop, setNewWorkshop] = useState({
    name: '',
    slug: '',
    description: '',
    date: '',
    duration: '',
    capacity: '',
  });
  const [isCreating, setIsCreating] = useState(false);

  const handleEditClick = (workshop) => {
    setEditingWorkshop(workshop.id);
    setEditFormData({
      name: workshop.name,
      slug: workshop.slug,
      description: workshop.description,
      date: workshop.date,
      duration: workshop.duration,
      capacity: workshop.capacity,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (isCreating) {
      setNewWorkshop({
        ...newWorkshop,
        [name]: type === 'checkbox' ? checked : value,
      });
    } else {
      setEditFormData({
        ...editFormData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSaveClick = () => {
    setWorkshops(
      workshops.map((workshop) =>
        workshop.id === editingWorkshop
          ? { ...workshop, ...editFormData }
          : workshop
      )
    );
    setEditingWorkshop(null);
  };

  const handleCreateClick = () => {
    setIsCreating(true);
    setNewWorkshop({
      name: '',
      slug: '',
      description: '',
      date: '',
      duration: '',
      capacity: '',
    });
  };

  const handleAddNewWorkshop = () => {
    const newId = workshops.length + 1; // Or generate a unique ID as needed
    setWorkshops([...workshops, { id: newId, ...newWorkshop }]);
    setIsCreating(false);
    setNewWorkshop({
      name: '',
      slug: '',
      description: '',
      date: '',
      duration: '',
      capacity: '',
    });
  };

  const handleCancelCreate = () => {
    setIsCreating(false);
    setNewWorkshop({
      name: '',
      slug: '',
      description: '',
      date: '',
      duration: '',
      capacity: '',
    });
  };

  const handleDeleteClick = (workshopId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this workshop?'
    );
    if (confirmDelete) {
      setWorkshops(workshops.filter((workshop) => workshop.id !== workshopId));
    }
  };

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-left text-4xl font-bold mb-6">Workshops</h1>
      </header>

      <main className="p-6">
        <div className="mb-4">
          <button
            onClick={handleCreateClick}
            className="flex bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create Workshop
          </button>
        </div>

        {isCreating && (
          <div className="mb-6">
            <h2 className="text-2xl mb-4">Add New Workshop</h2>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={newWorkshop.name}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="text"
                name="slug"
                placeholder="Slug"
                value={newWorkshop.slug}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newWorkshop.description}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={newWorkshop.date}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="number"
                name="duration"
                placeholder="Duration"
                value={newWorkshop.duration}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="number"
                name="capacity"
                placeholder="Capacity"
                value={newWorkshop.capacity}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
            </div>
            <button
              onClick={handleAddNewWorkshop}
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
            >
              Add Workshop
            </button>
            <button
              onClick={handleCancelCreate}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="py-2 px-4 text-center">ID</th>
                <th className="py-2 px-4 text-center">Name</th>
                <th className="py-2 px-4 text-center">Slug</th>
                <th className="py-2 px-4 text-center">Description</th>
                <th className="py-2 px-4 text-center">Date</th>
                <th className="py-2 px-4 text-center">Duration</th>
                <th className="py-2 px-4 text-center">Capacity</th>
                <th className="py-2 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {workshops.map((workshop) => (
                <tr key={workshop.id} className="border-t">
                  <td className="py-2 px-4">{workshop.id}</td>
                  <td className="py-2 px-4">
                    {editingWorkshop === workshop.id ? (
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      workshop.name
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editingWorkshop === workshop.id ? (
                      <input
                        type="text"
                        name="slug"
                        value={editFormData.price}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      workshop.slug
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editingWorkshop === workshop.id ? (
                      <input
                        type="text"
                        name="description"
                        value={editFormData.description}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      workshop.description
                    )}
                  </td>

                  <td className="py-2 px-4">
                    {editingWorkshop === workshop.id ? (
                      <input
                        type="number"
                        name="date"
                        value={editFormData.date}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      workshop.date
                    )}
                  </td>

                  <td className="py-2 px-4">
                    {editingWorkshop === workshop.id ? (
                      <input
                        type="number"
                        name="duration"
                        value={editFormData.duration}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      workshop.duration
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editingWorkshop === workshop.id ? (
                      <input
                        type="number"
                        name="capacity"
                        value={editFormData.capacity}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      workshop.capacity
                    )}
                  </td>

                  <td className="py-2 px-4">
                    {editingWorkshop === workshop.id ? (
                      <button
                        onClick={handleSaveClick}
                        className="text-green-500 hover:underline"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditClick(workshop)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteClick(workshop.id)}
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
      </main>
    </div>
  );
};

export default WorkshopList;
