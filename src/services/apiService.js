import axios from 'axios';

// URL  API
const API_URL = 'http://localhost:3000/api';

// ฟังก์ชัน API 
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project by ID:', error);
    throw error;
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await axios.post(`${API_URL}/projects/create`, projectData);
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const response = await axios.put(`${API_URL}/projects/update/${id}`, projectData);
    return response.data;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/projects/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

// ฟังก์ชัน API  Task
export const getTasksByProjectId = async (projectId) => {
  try {
    const response = await axios.get(`${API_URL}/tasks/project/${projectId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks by project ID:', error);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${API_URL}/tasks/create`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/update/${id}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

// ฟังก์ชัน API สำหรับ Material (วัสดุและอุปกรณ์)
export const getMaterialsByProjectId = async (projectId) => {
    try {
      const response = await axios.get(`${API_URL}/materials/project/${projectId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching materials:', error);
      throw error;
    }
  };
  
  export const createMaterial = async (materialData) => {
    try {
      const response = await axios.post(`${API_URL}/materials/create`, materialData);
      return response.data;
    } catch (error) {
      console.error('Error creating material:', error);
      throw error;
    }
  };
  
  export const deleteMaterial = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/materials/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting material:', error);
      throw error;
    }
  };
  
  // ฟังก์ชัน API สำหรับ Employee (พนักงาน)
  export const getEmployees = async () => {
    try {
      const response = await axios.get(`${API_URL}/employees`);
      return response.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  };
  
  export const createEmployee = async (employeeData) => {
    try {
      const response = await axios.post(`${API_URL}/employees/create`, employeeData);
      return response.data;
    } catch (error) {
      console.error('Error creating employee:', error);
      throw error;
    }
  };
  
  export const assignEmployeeToProject = async (assignmentData) => {
    try {
      const response = await axios.post(`${API_URL}/employees/assign`, assignmentData);
      return response.data;
    } catch (error) {
      console.error('Error assigning employee:', error);
      throw error;
    }
  };
  
  export const getAssignmentsByProjectId = async (projectId) => {
    try {
      const response = await axios.get(`${API_URL}/employees/assignments/project/${projectId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching assignments:', error);
      throw error;
    }
  };