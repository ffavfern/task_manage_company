import React from 'react';
import MaterialList from '../components/MaterialList';
import EmployeeList from '../components/EmployeeList';

const ResourceManagementPage = ({ projectId }) => {
  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-dark">การจัดการทรัพยากร</h1>
      <div className="grid grid-cols-1 gap-10">
      <MaterialList projectId={projectId}  />
      <EmployeeList projectId={projectId} />
      </div>
      
    </div>
  );
};

export default ResourceManagementPage;
