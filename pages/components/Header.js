import React from "react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Embla Andersson</h1>

          <button
            onClick={toggleMenu}
            className="border rounded p-1 hover:bg-gray-600 md:hidden flex justify-center items-center">
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <nav className="md:hidden">
            <ul className="flex flex-col gap-2 md:hidden absolute bg-base-100 top-16 right-0 w-48 p-4 shadow-lg items-center bg-gray-800">
              <li>
                <a href="/aboutMe" className="hover:text-gray-400">
                  About Me
                </a>
              </li>
              <li>
                <a href="/project" className="hover:text-gray-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/admin" className="hover:text-gray-400">
                  Admin
                </a>
              </li>
            </ul>
          </nav>
        )}
        {/* Desktop Menu */}
        <nav className="hidden md:flex md:justify-between">
          <ul className="flex space-x-4">
            <li>
              <a href="/aboutMe" className="hover:text-gray-400">
                About Me
              </a>
            </li>
            <li>
              <a href="/project" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/admin" className="hover:text-gray-400">
                Admin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
