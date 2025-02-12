import React from "react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="mx-auto">
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <h1 className="text-2xl font-bold">Embla Andersson</h1>
          </Link>

          {/* Mobile hamburger open and close button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border rounded p-1 hover:bg-gray-600 md:hidden flex justify-center items-center">
            {isOpen ? <FaBars /> : <CgClose />}
          </button>
        </div>

        {/* Mobile Menu */}
        {!isOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col md:hidden top-16 p-4 shadow-lg items-center bg-gray-800">
              <li>
                <a href="/aboutMe" className="hover:text-gray-400">
                  About Me
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-gray-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact Me
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
              <a href="/projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact Me
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
