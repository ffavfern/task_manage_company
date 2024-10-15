import React, { useState } from 'react';

const ProjectFilter = ({ onFilter }) => {
  const [statusFilter, setStatusFilter] = useState('');
  const [startDateFilter, setStartDateFilter] = useState('');
  const [endDateFilter, setEndDateFilter] = useState('');

  const handleFilter = () => {
    onFilter({ status: statusFilter, startDate: startDateFilter, endDate: endDateFilter });
  };

  return (
    <div className="bg-dark p-4 rounded-lg mb-6">
      <h2 className="text-lg font-semibold mb-4">กรองข้อมูลโปรเจกต์</h2>
      <select
        className="p-2 border rounded-md mb-2 w-full text-dark"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">ทุกสถานะ</option>
        <option value="not-started">ยังไม่เริ่ม</option>
        <option value="in-progress">กำลังดำเนินการ</option>
        <option value="completed">เสร็จสิ้น</option>
      </select>
      <input
        type="date"
        className="p-2 border rounded-md mb-2 w-full text-dark"
        placeholder="วันที่เริ่มต้น"
        value={startDateFilter}
        onChange={(e) => setStartDateFilter(e.target.value)}
      />
      <input
        type="date"
        className="p-2 border rounded-md mb-4 w-full text-dark"
        placeholder="วันสิ้นสุด"
        value={endDateFilter}
        onChange={(e) => setEndDateFilter(e.target.value)}
      />
      <button onClick={handleFilter} className="bg-red-600 text-white p-2 w-full rounded-md font-bold">
        กรองข้อมูล
      </button>
    </div>
  );
};

export default ProjectFilter;
