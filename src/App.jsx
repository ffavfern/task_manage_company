import React, { useState } from 'react';
import NavbarSide from './components/NavbarSide';
import ProjectPage from './pages/ProjectPage';
import ResourceManagementPage from './pages/ResourceManagementPage';
import LoginForm from './components/LoginForm';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('project');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="flex">
      {/* Sidebar Navbar */}
      <NavbarSide activePage={activePage} setActivePage={setActivePage} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-100">
        {activePage === 'project' ? (
          <ProjectPage />
        ) : (
          <ResourceManagementPage projectId={1} />
        )}
      </div>
    </div>
  );
};

export default App;
