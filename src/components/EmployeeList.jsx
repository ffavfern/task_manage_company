import React, { useState, useEffect } from 'react';
import { getEmployees, createEmployee, assignEmployeeToProject, getAssignmentsByProjectId } from '../services/apiService';

const EmployeeList = ({ projectId }) => {
  const [employees, setEmployees] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    contact_info: ''
  });
  const [assignment, setAssignment] = useState({
    employeeId: '',
    role: 'Worker',
    projectId: projectId
  });

  useEffect(() => {
    fetchEmployees();
    fetchAssignments();
  }, [projectId]);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchAssignments = async () => {
    try {
      const data = await getAssignmentsByProjectId(projectId);
      setAssignments(data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleCreateEmployee = async () => {
    try {
      await createEmployee(newEmployee);
      fetchEmployees();
      setNewEmployee({ name: '', position: '', contact_info: '' });
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  const handleAssignEmployee = async () => {
    try {
      await assignEmployeeToProject(assignment);
      fetchAssignments();
      setAssignment({ employeeId: '', role: 'Worker', projectId });
    } catch (error) {
      console.error('Error assigning employee:', error);
    }
  };

  return (
    <div className="bg-dark p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">พนักงาน</h2>

      {/* เพิ่มพนักงาน */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="ชื่อพนักงาน"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          className="p-2 mr-2"
        />
        <input
          type="text"
          placeholder="ตำแหน่ง"
          value={newEmployee.position}
          onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
          className="p-2 mr-2"
        />
        <input
          type="text"
          placeholder="ข้อมูลติดต่อ"
          value={newEmployee.contact_info}
          onChange={(e) => setNewEmployee({ ...newEmployee, contact_info: e.target.value })}
          className="p-2 mr-2"
        />
        <button onClick={handleCreateEmployee} className="bg-red-600 text-white p-2 rounded-md hover:bg-white hover:text-dark">เพิ่มพนักงาน</button>
      </div>

      {/* มอบหมายงานให้พนักงาน */}
      <div className="mb-4 text-dark">
        <select onChange={(e) => setAssignment({ ...assignment, employeeId: e.target.value })} value={assignment.employeeId} className="p-2 mr-2">
          <option value="">เลือกพนักงาน</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>{emp.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="บทบาท"
          value={assignment.role}
          onChange={(e) => setAssignment({ ...assignment, role: e.target.value })}
          className="p-2 mr-2 text-dark"
        />
        <button onClick={handleAssignEmployee} className="bg-gray text-white p-2 rounded-md hover:bg-red-600">มอบหมายงาน</button>
      </div>

      {/* รายการการมอบหมายงาน */}
      <h3 className="text-lg font-bold mt-4 mb-2">การมอบหมายงานในโครงการ</h3>
      <ul>
        {assignments.map((assignment) => (
          <li
          key={assignment.id}
          className="bg-gray-800 p-4 rounded-lg mb-4 shadow-md flex flex-col space-y-2"
        >
          <div className="text-lg font-semibold text-white">
            พนักงาน ID: <span className="font-normal">{assignment.employeeId}</span>
          </div>
          <div className="text-lg font-semibold text-white">
            บทบาท: <span className="font-normal">{assignment.role}</span>
          </div>
          <div className="text-lg font-semibold text-white">
            สถานะ:{" "}
            <span
              className={`font-bold ${
                assignment.status === "Active"
                  ? "text-green-400"
                  : assignment.status === "Inactive"
                  ? "text-red-400"
                  : "text-yellow-400"
              }`}
            >
              {assignment.status}
            </span>
          </div>
        </li>
        
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
