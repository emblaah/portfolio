import { createContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const baseProjects = [
    {
      id: 1,
      title: "Todo List",
      description: // give a brief description of the project

        "A simple todo list application where users can add, remove, and manage their tasks. Built with React and styled using Tailwind CSS.",
      techUsed: ["React", "Tailwind"],
      codeLink: "https://github.com/emblaah/ws-react-todolist",
      image: "/assets/TodoListImage.png",
    },
    {
      id: 2,
      title: "Pokemon API Site",
      description:
        "A website that dynamically connects to the Pokemon API to display information about different Pokemon. Built with React and styled using Tailwind CSS.",
      techUsed: ["React", "Tailwind"],
      codeLink: "https://github.com/zarhaselene/chas_pokemon.git",
      image: "/assets/PokemonSite.png",
    },
    {
      id: 3,
      title: "QuizMaster",
      description:
        "A quiz website where users can add questions, play the game, and view a leaderboard. Built with React and styled using Tailwind CSS.",
      techUsed: ["React", "Tailwind", "Next.js"],
      codeLink: "https://github.com/zarhaselene/chas_quiz.git",
      image: "/assets/QuizMaster.png",
    },
  ];

  const baseSkills = [
    { id: 1, name: "HTML", icon: "html5" },
    { id: 2, name: "CSS", icon: "css3" },
    { id: 3, name: "React", icon: "react" },
    { id: 4, name: "Next.js", icon: "nextjs" },
    { id: 5, name: "JavaScript", icon: "javascript" },
    { id: 6, name: "Vite", icon: "vitejs" },
    { id: 7, name: "VS Code", icon: "vscode" },
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

  const editProject = (id, updatedProject) => {
    const updatedProjects = projects.map((proj) =>
      proj.id === id ? { ...proj, ...updatedProject } : proj
    );
    setProjects(updatedProjects);
  };

  const addTechSkill = (skill) => {
    setTechSkills([...techSkills, { ...skill, id: Date.now() }]);
  };

  const deleteTechSkill = (id) => {
    setTechSkills(techSkills.filter((skill) => skill.id !== id));
  };

  const editTechSkill = (id, updatedSkill) => {
    const updatedSkills = techSkills.map((skill) =>
      skill.id === id ? { ...skill, ...updatedSkill } : skill
    );
    setTechSkills(updatedSkills);
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
