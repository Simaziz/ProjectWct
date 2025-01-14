"use client";

import { usePathname } from "next/navigation"; // Use App Router's usePathname for current path detection
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    { name: "Overview", href: "/traineeOverview", icon: "grid" },
    { name: "Workout", href: "/traineeWorkout", icon: "grid" },
    { name: "My Schedule", href: "/traineeSchedule", icon: "calendar" },
    { name: "Back Home", href: "/traineeHomeafterpay", icon: "Home" },
  ];

  return (
    <div className="flex flex-col h-full bg-white shadow-md w-[250px]">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-xl font-bold text-center text-gray-900">GymMotive</h1>
        <hr className="mt-4 border-gray-200" />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 p-2 rounded-md ${
                  pathname === item.href
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {/* Icon */}
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon === "grid" ? (
                    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                  ) : (
                    <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2-2 0 012-2zm0 2v2h14V5H5zm0 6h14v6H5v-6zm0 8v2h14v-2H5z" />
                  )}
                </svg>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
