import React from "react";
import {
  Home,
  LayoutGrid,
  FileText,
  Info,
  User,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const menus = [
    {
      name: "Home",
      icon: Home,
      path: "/",
    },
    {
      name: "Category",
      icon: LayoutGrid,
      path: "/products",
    },
    {
      name: "Blog",
      icon: FileText,
      path: "/blog",
    },
    {
      name: "About",
      icon: Info,
      path: "/about",
    },
    {
      name: "Login",
      icon: User,
      path: "/login",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full h-14 bg-white border-t border-gray-200 shadow-md z-50 md:hidden">
      
      <div className="flex items-center justify-around h-full px-1">
        {menus.map((menu, index) => {
          const Icon = menu.icon;

          const isActive =
            location.pathname === menu.path;

          return (
            <Link
              key={index}
              to={menu.path}
              className={`flex flex-col items-center justify-center transition-all duration-300 ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-500"
              }`}
            >
              {/* Icon */}
              <div
                className={`p-1 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-blue-100 scale-105"
                    : ""
                }`}
              >
                <Icon size={18} />
              </div>

              {/* Text */}
              <span className="mt-0.5 text-[9px] font-medium">
                {menu.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;