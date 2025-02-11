// context/ProjectContext.js
import { createContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([]);

  // Load projects from local storage when the app loads
  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Save projects to local storage whenever projects array changes
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <PortfolioContext.Provider value={{ projects, addProject, deleteProject }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContext;
