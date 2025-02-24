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

  const baseSkills = [
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Vite", icon: "vitejs" },
    { name: "VS Code", icon: "vscode" },
  ];

  const [projects, setProjects] = useState(baseProjects);
  const [techSkills, setTechSkills] = useState(baseSkills);

  // Load projects from local storage when the app loads
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProjects = localStorage.getItem("portfolioProjects");
      const savedSkills = localStorage.getItem("portfolioSkills");

      if (savedProjects) setProjects(JSON.parse(savedProjects));
      if (savedSkills) setTechSkills(JSON.parse(savedSkills));
    }
  }, []);

  // Save projects to local storage whenever projects array changes
  useEffect(() => {
    localStorage.setItem("portfolioProjects", JSON.stringify(projects));
    localStorage.setItem("portfolioSkills", JSON.stringify(techSkills));
  }, [projects, techSkills]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  const editProject = (index, project) => {
    const newProjects = [...projects];
    newProjects[index] = project;
    setProjects(newProjects);
  };

  const addTechSkill = (skill) => {
    setTechSkills([...techSkills, skill]);
  };

  const deleteTechSkill = (skill) => {
    setTechSkills(techSkills.filter((s) => s !== skill));
  };

  const editTechSkill = (index, skill) => {
    const newSkills = [...techSkills];
    newSkills[index] = skill;
    setTechSkills(newSkills);
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        addProject,
        deleteProject,
        baseProjects,
        editProject,
        techSkills,
        addTechSkill,
        deleteTechSkill,
        baseSkills,
        editTechSkill,
      }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContext;
