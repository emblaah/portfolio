import React from "react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import ThemeColorBtn from "./ThemeColorBtn";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-base-200 text-base-content">
      <div className="mx-auto md:flex justify-between items-center">
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <h1 className="text-2xl font-bold">Embla Andersson</h1>
          </Link>

          {/* Mobile hamburger open and close button */}
          <div className="flex gap-2 items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border rounded p-1 hover:bg-base-300 md:hidden flex justify-center items-center">
              {isOpen ? <CgClose /> : <FaBars />}
            </button>
            <div className="md:hidden flex">
              <ThemeColorBtn />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col md:hidden top-16 p-4 shadow-lg items-center bg-base-200 text-base-content">
              <li>
                <Link href="/aboutMe" className="hover:text-gray-400">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact Me
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-gray-400">
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        )}
        {/* Desktop Menu */}
        <nav className="hidden md:flex md:justify-between">
          <ul className="flex space-x-4 mr-4 items-center justify-center">
            <li>
              <Link href="/aboutMe" className="hover:text-gray-400">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact Me
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:text-gray-400">
                Admin
              </Link>
            </li>
            <li className="flex">
              <ThemeColorBtn />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
