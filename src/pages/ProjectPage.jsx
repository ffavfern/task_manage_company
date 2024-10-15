import React, { useState, useEffect } from 'react';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} from '../services/apiService';
import ProjectFilter from '../components/ProjectFilter';


const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]); 
  
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    budget: 0,
    spent: 0,
    status: 'not-started'
  });

  // ดึงข้อมูลโปรเจกต์ทั้งหมดเมื่อโหลดหน้า
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
      setFilteredProjects(data); // กำหนดค่าเริ่มต้นให้กับ filteredProjects
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleFilterProjects = (filters) => {
    const { status, startDate, endDate } = filters;
    let result = projects;

    if (status) {
      result = result.filter(project => project.status === status);
    }
    if (startDate) {
      result = result.filter(project => new Date(project.startDate) >= new Date(startDate));
    }
    if (endDate) {
      result = result.filter(project => new Date(project.endDate) <= new Date(endDate));
    }
    setFilteredProjects(result);
  };

  const handleCreateProject = async () => {
    if (newProject.name && newProject.description && newProject.startDate && newProject.endDate && newProject.budget) {
      try {
        await createProject(newProject);
        fetchProjects();  // อัปเดตรายการโปรเจกต์หลังจากสร้างใหม่
        setNewProject({
          name: '',
          description: '',
          startDate: '',
          endDate: '',
          budget: 0,
          spent: 0,
          status: 'not-started'
        });
      } catch (error) {
        console.error('Error creating project:', error);
      }
    } else {
      alert("กรุณากรอกข้อมูลทุกช่อง");
    }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm("คุณต้องการลบโปรเจกต์นี้หรือไม่?")) {
      try {
        await deleteProject(id);
        fetchProjects();  // อัปเดตรายการโปรเจกต์หลังจากลบ
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      
      <h1 className="text-4xl font-bold text-dark mb-6">จัดการโปรเจกต์</h1>
      {/* ฟิลเตอร์สำหรับกรองโปรเจกต์ */}
      <ProjectFilter onFilter={handleFilterProjects} />
      {/* Form สำหรับสร้างโปรเจกต์ใหม่ */}
      <div className="mb-6 bg-gray p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-light mb-4">สร้างโปรเจกต์ใหม่</h2>
        <input
          type="text"
          placeholder="ชื่อโปรเจกต์"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          className="bg-dark text-light p-2 border border-primary rounded-md mb-2 w-full"
        />
        <input
          type="text"
          placeholder="รายละเอียด"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="bg-dark text-light p-2 border border-primary rounded-md mb-2 w-full"
        />
        <div className="flex space-x-2 mb-2">
          <input
            type="date"
            placeholder="วันที่เริ่ม"
            value={newProject.startDate}
            onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
            className="bg-dark text-light p-2 border border-primary rounded-md w-full"
          />
          <input
            type="date"
            placeholder="วันส่งมอบ"
            value={newProject.endDate}
            onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
            className="bg-dark text-light p-2 border border-primary rounded-md w-full"
          />
        </div>
        <input
          type="number"
          placeholder="งบประมาณ"
          value={newProject.budget}
          onChange={(e) => setNewProject({ ...newProject, budget: parseFloat(e.target.value) })}
          className="bg-dark text-light p-2 border border-primary rounded-md mb-4 w-full"
        />
        <button
          onClick={handleCreateProject}
          className="bg-primary text-light p-2 w-full rounded-md font-bold hover:bg-light hover:text-primary transition duration-300"
        >
          เพิ่มโปรเจกต์
        </button>
      </div>

      {/* แสดงรายการโครงการ */}
      <div className="bg-dark p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-light mb-4">โครงการที่กำลังดำเนินอยู่</h2>
        {filteredProjects.length > 0 ? (
          <ul className="space-y-4">
             {filteredProjects.map(project => (
             <li key={project.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
             <div className="absolute inset-0 opacity-5 rounded-lg pointer-events-none"></div>
             
             <h3 className="font-bold text-dark text-xl mb-2">
               <span className="inline-block p-1 rounded-full mr-2">🎯</span>
               {project.name}
             </h3>
             
             <p className="text-dark mb-2">
               <span className="font-semibold">รายละเอียด:</span> {project.description}
             </p>
             
             <div className="grid grid-cols-2 gap-2 mb-2">
               <p className="text-dark">
                 <span className="font-semibold">วันที่เริ่ม:</span> {project.startDate}
               </p>
               <p className="text-dark">
                 <span className="font-semibold">วันส่งมอบ:</span> {project.endDate}
               </p>
             </div>
             
             <div className="grid grid-cols-2 gap-2 mb-2">
               <p className="text-dark">
                 <span className="font-semibold">งบประมาณ:</span> {project.budget} บาท
               </p>
               <p className="text-dark">
                 <span className="font-semibold">ค่าใช้จ่าย:</span> {project.spent} บาท
               </p>
             </div>
             
             <p className="text-sm font-bold text-dark">
               สถานะ: 
               <span className={`${project.status === "Completed" ? "text-dark" : project.status === "In Progress" ? "text-dark" : "text-red-600"}`}>
                 {project.status}
               </span>
             </p>
           
             <button
               onClick={() => handleDeleteProject(project.id)}
               className="bg-red-600 text-white px-3 py-1 mt-4 rounded-lg font-semibold hover:bg-red-400 transition-colors duration-300 w-full"
             >
               ลบโปรเจกต์
             </button>
           </li>
           
           
            ))}
          </ul>
        ) : (
          <p className="text-light">ไม่มีโครงการในขณะนี้</p>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
