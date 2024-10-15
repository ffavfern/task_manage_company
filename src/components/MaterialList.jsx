import React, { useState, useEffect } from 'react';
import { getMaterialsByProjectId, createMaterial, deleteMaterial } from '../services/apiService';

const MaterialList = ({ projectId }) => {
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({
    name: '',
    quantity: 1,
    unit: 'pcs',
    status: 'available',
    projectId: projectId
  });

  useEffect(() => {
    fetchMaterials();
  }, [projectId]);

  const fetchMaterials = async () => {
    try {
      const data = await getMaterialsByProjectId(projectId);
      setMaterials(data);
    } catch (error) {
      console.error('Error fetching materials:', error);
    }
  };

  const handleCreateMaterial = async () => {
    try {
      await createMaterial(newMaterial);
      fetchMaterials();
      setNewMaterial({ name: '', quantity: 1, unit: 'pcs', status: 'available', projectId });
    } catch (error) {
      console.error('Error creating material:', error);
    }
  };

  const handleDeleteMaterial = async (id) => {
    try {
      await deleteMaterial(id);
      fetchMaterials();
    } catch (error) {
      console.error('Error deleting material:', error);
    }
  };

  return (
    <div className="bg-dark p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">วัสดุและอุปกรณ์</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="ชื่อวัสดุ"
          value={newMaterial.name}
          onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
          className="p-2 mr-2 text-dark"
        />
        <input
          type="number"
          placeholder="จำนวน"
          value={newMaterial.quantity}
          onChange={(e) => setNewMaterial({ ...newMaterial, quantity: parseInt(e.target.value) })}
          className="p-2 mr-2  text-dark"
        />
        <input
          type="text"
          placeholder="หน่วย"
          value={newMaterial.unit}
          onChange={(e) => setNewMaterial({ ...newMaterial, unit: e.target.value })}
          className="p-2 mr-2  text-dark"
        />
        <button onClick={handleCreateMaterial} className="bg-red-600 text-white p-2 rounded-md hover:bg-white hover:text-dark">เพิ่มวัสดุ</button>
      </div>
      <ul>
        {materials.map((material) => (
          <li key={material.id} className="border p-2 rounded mb-2 flex justify-between items-center">
            {material.name} - {material.quantity} {material.unit} 
            <button onClick={() => handleDeleteMaterial(material.id)} className="bg-red-500 text-white ml-4 p-1 px-5  rounded">ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialList;
