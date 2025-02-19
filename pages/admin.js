import { useContext, useState } from "react";
import PortfolioContext from "../context/PortfolioContext";

export default function Admin() {
  const { projects, addProject, deleteProject, editProject } =
    useContext(PortfolioContext);

  const [newProject, setNewProject] = useState({ title: "", description: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      if (editMode) {
        editProject(editIndex, newProject);
        setEditMode(false);
        setEditIndex(null);
      } else {
        addProject(newProject);
      }

      setNewProject({ title: "", description: "" });
    }
  };

  const handleEditProject = (index) => {
    const projectToEdit = projects[index];
    setNewProject(projectToEdit);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDeleteProject = (index) => {
    deleteProject(index);
    if (editMode && editIndex === index) {
      setEditMode(false);
      setNewProject({ title: "", description: "" });
    }
  };

  const handleLogin = () => {
    if (username === "Embla" && password === "Embla") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  };

  // if (!loggedIn) {
  //   return (
  //     <div className="flex flex-col gap-2 mt-2 w-20">
  //       <h1>Logga in</h1>
  //       <input
  //         className="border"
  //         type="text"
  //         onChange={(e) => setUsername(e.target.value)}
  //       />
  //       <h1>Lösenord</h1>
  //       <input
  //         className="border"
  //         type="text"
  //         onChange={(e) => setPassword(e.target.value)}
  //       />

  //       <button
  //       className="bg-blue-500 text-white p-2 rounded-lg"
  //        onClick={handleLogin}>Logga in</button>

  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Admin</h1>
        <div className="mb-4">
          <input
            type="text"
            className="border p-2 mr-2"
            placeholder="Project Title"
            value={newProject.title}
            onChange={(e) =>
              setNewProject({ ...newProject, title: e.target.value })
            }
          />
          <input
            type="text"
            className="border p-2 mr-2"
            placeholder="Project Description"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
          />
          <button
            onClick={handleAddProject}
            className="bg-blue-500 text-white p-2 rounded-lg">
            {editMode ? "Edit Project" : "Add Project"}
          </button>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Manage Projects</h2>
          {(projects ?? []).map((project, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 bg-white p-4 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
              <button
                className="bg-blue-500 text-white p-2 rounded-lg"
                onClick={() => handleEditProject(index)}>
                Edit
              </button>
              <button
                onClick={() => handleDeleteProject(index)}
                className="bg-red-500 text-white p-2 rounded-lg">
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
