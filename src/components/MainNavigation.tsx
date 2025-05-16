import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Home,
  ShoppingBag,
  User,
  ClipboardList,
  Briefcase,
  Settings,
  Menu,
  X,
  MessageSquare,
  Bell,
  Wallet,
  HelpCircle,
} from "lucide-react";

const MainNavigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    {
      path: "/",
      icon: <Home size={16} className="text-green-600" />,
      label: "Home",
    },
    {
      path: "/marketplace",
      icon: <ShoppingBag size={16} className="text-blue-600" />,
      label: "Marketplace",
    },
    {
      path: "/dashboard",
      icon: <User size={16} className="text-purple-600" />,
      label: "Dashboard",
    },
    {
      path: "/post-task",
      icon: <ClipboardList size={16} className="text-orange-600" />,
      label: "Post Task",
    },
    {
      path: "/post-job",
      icon: <Briefcase size={16} className="text-amber-600" />,
      label: "Post Job",
    },
    {
      path: "/messages",
      icon: <MessageSquare size={16} className="text-indigo-600" />,
      label: "Messages",
    },
    {
      path: "/notifications",
      icon: <Bell size={16} className="text-red-600" />,
      label: "Notifications",
    },
    {
      path: "/wallet",
      icon: <Wallet size={16} className="text-emerald-600" />,
      label: "Wallet",
    },
    {
      path: "/help",
      icon: <HelpCircle size={16} className="text-cyan-600" />,
      label: "Help",
    },
    {
      path: "/settings",
      icon: <Settings size={16} className="text-gray-600" />,
      label: "Settings",
    },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Menu Toggle Button */}
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 bg-white shadow-sm hover:bg-orange-500 hover:text-white"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        <span className="hidden sm:inline">Menu</span>
      </Button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 max-h-[80vh] overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                className={`flex items-center gap-2 px-4 py-2 text-sm hover:bg-orange-500 hover:text-white cursor-pointer ${location.pathname === item.path ? "bg-green-50 border-l-4 border-green-500" : ""}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainNavigation;
