import React from "react";
import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";

export default function Home() {
  const { projects } = useContext(PortfolioContext);

  return (
    <div className=" flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p>Hello! I'm Embla Andersson.</p>
      </section>

      <section>
        <div className="flex flex-col mb-2">
          <h2 className="text-3xl font-bold mb-4">My Tech Stacks</h2>
          <div className="flex gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              width={20}
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              width={20}
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              width={20}
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              width={20}
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              width={20}
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
              width={20}
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              width={20}
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(projects ?? []).map((project) => (
              <div
                key={project.id}
                className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
