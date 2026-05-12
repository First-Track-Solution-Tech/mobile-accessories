


// import React from "react";
// import {
//   Home,
//   LayoutGrid,
//   ShoppingCart,
//   Info,
//   User,
// } from "lucide-react";

// import { Link, useLocation } from "react-router-dom";

// const BottomNav = () => {
//   const location = useLocation();

//   const menus = [
//     {
//       name: "Home",
//       icon: Home,
//       path: "/",
//     },
//     {
//       name: "Category",
//       icon: LayoutGrid,
//       path: "/products",
//     },
//     {
//       name: "Cart",
//       icon: ShoppingCart,
//       path: "/cart",
//     },
//     {
//       name: "About",
//       icon: Info,
//       path: "/about",
//     },
//     {
//       name: "Login",
//       icon: User,
//       path: "/login",
//     },
//   ];

//   return (
//     <div className="fixed bottom-0 left-0 w-full md:hidden z-50">
      
//       {/* Bottom Navigation */}
//       <div className="h-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl flex items-center justify-around">
        
//         {menus.map((menu, index) => {
//           const Icon = menu.icon;
//           const isActive = location.pathname === menu.path;

//           return (
//             <Link
//               key={index}
//               to={menu.path}
//               className="flex flex-col items-center justify-center"
//             >
              
//               {/* Icon */}
//               <div
//                 className={`p-2 rounded-full transition-all duration-300 ${
//                   isActive
//                     ? "bg-yellow-400 text-black -translate-y-1 shadow-lg"
//                     : "text-white"
//                 }`}
//               >
//                 <Icon size={20} />
//               </div>

//               {/* Text */}
//               <span
//                 className={`text-[10px] mt-1 font-medium ${
//                   isActive
//                     ? "text-white"
//                     : "text-white/80"
//                 }`}
//               >
//                 {menu.name}
//               </span>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BottomNav;




import React from "react";
import {
  Home,
  LayoutGrid,
  ShoppingCart,
  Info,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const menus = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Category", icon: LayoutGrid, path: "/products" },
    { name: "Cart", icon: ShoppingCart, path: "/cart" },
    { name: "About", icon: Info, path: "/about" },
    { name: "Login", icon: User, path: "/login" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden z-50 safe-area-bottom">

      <div className="h-16 pb-[env(safe-area-inset-bottom)] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl flex items-center justify-around">

        {menus.map((menu, i) => {
          const Icon = menu.icon;
          const isActive = location.pathname === menu.path;

          return (
            <Link
              key={i}
              to={menu.path}
              className="flex flex-col items-center"
            >
              <div
                className={`p-2 rounded-full transition ${
                  isActive
                    ? "bg-yellow-400 text-black -translate-y-1"
                    : "text-white"
                }`}
              >
                <Icon size={20} />
              </div>

              <span className={`text-[10px] ${isActive ? "text-white" : "text-white/80"}`}>
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