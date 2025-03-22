import React, { useState } from 'react';

const CreateAd = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ad Created:', formData);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Create Ad</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Ad
        </button>
      </form>
    </div>
  );
};

export default CreateAd;