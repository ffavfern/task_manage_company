import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="border p-4 my-2">
          <h2 className="font-bold">{project.name}</h2>
          <p>Start Date: {project.startDate}</p>
          <p>End Date: {project.endDate}</p>
          <p>Budget: {project.budget}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
