import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { TbBrandTelegram } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { BsPlayBtn } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";

const Navbar = ({ setOpenSearch }) => {
  const [open, setOpen] = useState(false);

  const textClass = "text-lg font-medium hidden lg:block"; // Large screens par text dikhayein

  const navItem = (to, Icon, label, extraClass = "") => (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer transition group
        ${isActive ? "bg-white text-black" : "text-white hover:bg-white/10"} ${extraClass}`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`w-7 h-7 md:w-8 md:h-8 shrink-0 transition-colors duration-200
              ${isActive ? "text-black" : "text-gray-400 group-hover:text-white"}`}
          />
          {open && <span className="text-lg font-medium hidden md:block">{label}</span>}
        </>
      )}
    </NavLink>
  );

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`fixed top-0 left-0 h-screen bg-black text-white hidden md:flex flex-col p-3 transition-all duration-300 z-50 border-r border-gray-800
          ${open ? "w-64" : "w-20"}`}
      >
        {/* Logo */}
        <div className="mb-8 px-2">
          {open ? (
             <h1 className="text-2xl font-bold italic tracking-tighter">Instagram</h1>
          ) : (
            <IoLogoInstagram className="w-8 h-8 shrink-0" />
          )}
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-2">
          {navItem("/", GoHome, "Home")}
          
          <div
            onClick={() => setOpenSearch(true)}
            className="flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer text-white hover:bg-white/10"
          >
            <IoMdSearch className="w-8 h-8 text-gray-400 hover:text-white" />
            {open && <span className="text-lg font-medium">Search</span>}
          </div>

          {navItem("/Explore", MdOutlineExplore, "Explore")}
          {navItem("/Reel", BsPlayBtn, "Reels")}
          {navItem("/Msge", TbBrandTelegram, "Messages")}
          {navItem("/Notification", FaRegHeart, "Notifications")}
          {navItem("/Create", IoAdd, "Create")}
          {navItem("/Profile", CgProfile, "Profile")}
        </div>

        {/* More Button at Bottom */}
        <div className="mt-auto">
          {navItem("/More", FaBars, "More")}
        </div>
      </div>

      {/* Mobile Bottom Navigation (Visible only on small screens) */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around items-center p-2 md:hidden z-50">
        <NavLink to="/" className="p-2 text-white"><GoHome className="w-7 h-7" /></NavLink>
        <NavLink to="/Explore" className="p-2 text-white"><MdOutlineExplore className="w-7 h-7" /></NavLink>
        <NavLink to="/Reel" className="p-2 text-white"><BsPlayBtn className="w-7 h-7" /></NavLink>
        <div onClick={() => setOpenSearch(true)} className="p-2 text-white"><IoMdSearch className="w-7 h-7" /></div>
        <NavLink to="/Create" className="p-2 text-white"><IoAdd className="w-7 h-7" /></NavLink>
        <NavLink to="/Profile" className="p-2 text-white"><CgProfile className="w-7 h-7" /></NavLink>
      </div>
    </>
  );
};

export default Navbar;





