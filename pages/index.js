// pages/index.js
import { useContext } from "react";
import PortfolioContext from "./context/PortfolioContext";

export default function Home() {
  const { projects } = useContext(PortfolioContext);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p>Hello! I'm Embla Andersson.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
