import { createContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const baseProjects = [
    {
      id: 1,
      title: "Todo List",
      description:
        "Simple todo list where you can add and remove items built with React",
      techUsed: ["React", "Tailwind"],
      codeLink: "https://github.com/emblaah/ws-react-todolist",
      // image: "" // Add image of choice here
    },
  ];
  const [projects, setProjects] = useState(baseProjects);

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

  const editProject = (index, project) => {
    const newProjects = [...projects];
    newProjects[index] = project;
    setProjects(newProjects);
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        addProject,
        deleteProject,
        baseProjects,
        editProject,
      }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContext;
