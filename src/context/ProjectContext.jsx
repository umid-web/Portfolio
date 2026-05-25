import React, { createContext, useState, useEffect, useCallback } from 'react';

export const ProjectContext = createContext({
  projects: [],
  addProject: () => {},
  editProject: () => {},
  deleteProject: () => {},
});

export const ProjectProvider = ({ children }) => {
  // Synchronous initialization prevents UI flicker and empty data override
  const [projects, setProjects] = useState(() => {
    try {
      const stored = localStorage.getItem('portfolioProjects');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse stored projects', e);
      return [];
    }
  });

  // Cross-tab synchronization
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'portfolioProjects') {
        try {
          const newData = e.newValue ? JSON.parse(e.newValue) : [];
          setProjects(newData);
        } catch (error) {
          console.error('Error syncing projects from localStorage:', error);
        }
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Centralized save function
  const saveProjects = useCallback((newProjects) => {
    setProjects(newProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(newProjects));
  }, []);

  const addProject = (project) => {
    const newProjects = [...projects, { ...project, id: Date.now().toString() }];
    saveProjects(newProjects);
  };

  const editProject = (id, updated) => {
    const newProjects = projects.map((p) => (p.id === id ? { ...p, ...updated } : p));
    saveProjects(newProjects);
  };

  const deleteProject = (id) => {
    const newProjects = projects.filter((p) => p.id !== id);
    saveProjects(newProjects);
  };

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, editProject, deleteProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
