import React, { useRef } from "react";
import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";

export default function Home() {
  const { projects, techSkills } = useContext(PortfolioContext);
  const sectionRef = useRef(null);

  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold tracking-tight text-base-content">
                Hi, I'm Embla
                <span className="block text-primary mt-2">
                  A Frontend Developer
                </span>
              </h1>

              <p className="text-xl text-base-content">
                I create exceptional digital experiences that inspire and
                engage. Specializing in modern web applications and user-centric
                design.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn"
                  size="lg">
                  View Projects
                </button>
                <button className="btn" size="lg" variant="outline">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-base-content">
            Technologies I Work With
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techSkills.map((skill) => (
              <div key={skill.id} className="bg-base-200 shadow-lg rounded-lg">
                <div className="flex justify-between items-center p-4">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                    alt={`${skill.name} logo`}
                    width={40}
                  />
                  <h3 className="text-lg font-semibold text-base-content flex">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section ref={sectionRef} className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-base-content">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(projects ?? []).map((project) => (
              <div key={project.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="object-cover h-48 w-full"
                    src={project.image}
                    alt={project.name}
                  />
                </figure>
                <div className="p-6 card-body">
                  <h3 className="text-xl card-title font-semibold mb-2 text-base-content">
                    {project.title}
                  </h3>
                  <p className="text-base-content mb-4">
                    {project.description}
                  </p>
                  {/* Optionally add a list of technologies used */}
                  <div className="flex gap-2 mb-4">
                    {project.techUsed.map((tech) => (
                      <span key={tech} className="badge badge-primary badge-lg">
                        {tech}
                      </span>
                    ))}{" "}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm">
                      View Code
                    </a>
                    {/* Optionally add a live demo link if available */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
