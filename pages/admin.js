import { useContext, useState, useRef } from "react";
import PortfolioContext from "../context/PortfolioContext";
import Link from "next/link";

export default function Admin() {
  const {
    projects,
    techSkills,
    addProject,
    deleteProject,
    editProject,
    addTechSkill,
    deleteTechSkill,
    editTechSkill,
  } = useContext(PortfolioContext);

  const [newProject, setNewProject] = useState({
    id: null,
    title: "",
    description: "",
    codeLink: "",
    techUsed: [],
    image: "",
  });
  const [newSkill, setNewSkill] = useState({ name: "", icon: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Refs for forms
  const projectFormRef = useRef(null);
  const skillFormRef = useRef(null);

  const handleAddProject = () => {
    if (
      newProject.title &&
      newProject.description &&
      newProject.codeLink &&
      newProject.techUsed
    ) {
      if (editMode) {
        editProject(newProject.id, newProject);
        setEditMode(false);
      } else {
        addProject({ ...newProject, id: Date.now() });
      }

      setNewProject({
        title: "",
        description: "",
        codeLink: "",
        techUsed: [],
        image: "",
      });
    }
  };

  const handleEditProject = (id) => {
    const projectToEdit = projects.find((project) => project.id === id);
    if (projectToEdit) {
      setNewProject(projectToEdit);
      setEditMode(true);

      projectFormRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDeleteProject = (id) => {
    deleteProject(id);
    if (editMode && newProject.id === id) {
      setEditMode(false);
      setNewProject({ title: "", description: "", codeLink: "", techUsed: [] });
    }
  };

  const handleAddTechSkill = () => {
    if (newSkill.name && newSkill.icon) {
      if (editMode) {
        editTechSkill(newSkill.id, newSkill);
        setEditMode(false);
      } else {
        addTechSkill({ ...newSkill, id: Date.now() });
      }
      setNewSkill({ name: "", icon: "" });
    }
  };

  const handleEditTechSkill = (id) => {
    const skillToEdit = techSkills.find((skill) => skill.id === id);
    if (skillToEdit) {
      setNewSkill(skillToEdit);
      setEditMode(true);

      skillFormRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDeleteTechSkill = (id) => {
    deleteTechSkill(id);
    if (editMode && newSkill.id === id) {
      setEditMode(false);
      setNewSkill({ name: "", icon: "" });
    }
  };

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-base-100 flex justify-center items-center flex-col gap-2">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="h-4 w-4 opacity-70">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="text-base-content"
            fill="currentColor"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="text-base-content"
            fill="currentColor"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn rounded-lg" onClick={handleLogin}>
          Log in
        </button>
      </div>
    );
  }
  console.log("techSkills", techSkills);

  return (
    <div className="min-h-screen bg-base-100 transition-colors p-8 flex justify-center">
      <section>
        <h1 className="text-4xl text-base-content font-bold mb-4">Admin</h1>
        <div className="mb-4 flex flex-col gap-2">
          {/* Form to edit projects */}
          <form
            className="bg-base-300 p-8 flex flex-col gap-2 rounded-lg"
            ref={projectFormRef}>
            <h2 className="text-base-content text-lg font-semibold">
              Edit Project
            </h2>
            <input
              type="text"
              className="input input-bordered w-full text-base-content"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
            />
            <textarea
              className="textarea textarea-bordered w-full text-base-content"
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />
            <input
              type="url"
              className="input input-bordered text-sm w-full text-base-content"
              placeholder="Insert GitHub link here"
              value={newProject.codeLink}
              onChange={(e) =>
                setNewProject({ ...newProject, codeLink: e.target.value })
              }
            />
            <input
              type="text"
              className="input input-bordered w-full text-base-content capitalize"
              placeholder="Tech Used seperated by comma"
              value={newProject.techUsed.join(", ")}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  techUsed: e.target.value.split(/,\s*/),
                })
              }
            />
            <input
              type="url"
              className="input input-bordered w-full text-base-content"
              placeholder="Link to image"
              value={newProject.image}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  image: e.target.value,
                })
              }
            />

            <button type="submit" onClick={handleAddProject} className="btn">
              {editMode ? "Edit Project" : "Add Project"}
            </button>
          </form>
        </div>

        {/* Form to Edit Tech Skills */}

        <div className="mb-4 flex flex-col gap-2">
          {/* Form to edit projects */}
          <form
            className="bg-base-300 p-8 flex flex-col gap-2 rounded-lg"
            ref={skillFormRef}>
            <h2 className="text-base-content text-lg font-semibold">
              Edit Tech Skill
            </h2>
            <input
              type="text"
              className="input input-bordered w-full text-base-content capitalize"
              placeholder="Skill Name"
              value={newSkill.name}
              onChange={(e) =>
                setNewSkill({ ...newSkill, name: e.target.value })
              }
            />
            <input
              type="text"
              className="input input-bordered w-full text-base-content"
              placeholder="Skill icon ex: html5"
              value={newSkill.icon}
              onChange={(e) =>
                setNewSkill({ ...newSkill, icon: e.target.value })
              }
            />

            <button type="submit" onClick={handleAddTechSkill} className="btn">
              {editMode ? "Edit Tech Skill" : "Add Tech Skill"}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-base-content">
            Manage Projects
          </h2>
          {projects?.map((project) => (
            <div
              key={project.id}
              className="flex justify-between items-center mb-4 p-4 rounded-lg shadow-md gap-2 bg-base-200">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-base-content">
                  {project.title}
                </h3>
                <p className="text-base-content">{project.description}</p>
                <Link
                  className="link text-base-content"
                  href={project.codeLink}>
                  {project.codeLink}
                </Link>

                <p className="text-base-content capitalize flex gap-1">
                  {project.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="badge capitalize badge-primary badge-lg">
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-blue-500 text-white p-2 rounded-lg"
                  onClick={() => handleEditProject(project.id)}>
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="bg-red-500 text-white p-2 rounded-lg">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-base-content">
            Manage Tech Skills
          </h2>
          <div className="grid grid-cols-2 gap-x-4">
            {(techSkills ?? []).map((skill) => (
              <div
                key={skill.id}
                className="flex justify-between items-center mb-4 p-4 rounded-lg shadow-md gap-2 bg-base-200">
                <div>
                  <h3 className="text-xl font-semibold text-base-content">
                    {skill.name}
                  </h3>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                    alt={`${skill.name} logo`}
                    width={40}
                  />{" "}
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-500 text-white p-2 rounded-lg"
                    onClick={() => handleEditTechSkill(skill.id)}>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTechSkill(skill.id)}
                    className="bg-red-500 text-white p-2 rounded-lg">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
