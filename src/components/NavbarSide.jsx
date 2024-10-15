import React from "react";
import { IoIosLogOut } from "react-icons/io";


const NavbarSide = ({ activePage, setActivePage, onLogout }) => {
  return (
    <div className="w-64 min-h-screen bg-dark text-white flex flex-col justify-between p-5">
      <div>
        <h1 className="text-2xl font-bold mb-6">169 House</h1>
        <h1 className="text-xl  mb-6">ระบบจัดการงาน</h1>
        <hr className="w-1/2 text-gray" />
        <nav className="flex flex-col space-y-4 mt-10">
          <button
            onClick={() => setActivePage("project")}
            className={`text-left px-4 py-2 rounded transition-colors ${
              activePage === "project" ? "bg-red-800" : "hover:bg-red-800"
            }`}
          >
            จัดการโปรเจกต์
          </button>
          <button
            onClick={() => setActivePage("resource")}
            className={`text-left px-4 py-2 rounded transition-colors ${
              activePage === "resource" ? "bg-red-800" : "hover:bg-red-800"
            }`}
          >
            จัดการทรัพยากร
          </button>
        </nav>
      </div>

      {/* ปุ่ม Logout */}
      <button
        onClick={onLogout}
        className="flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 transition-colors"
      >
        <IoIosLogOut className="me-2" /> <p>ออกจากระบบ</p>

      </button>
    </div>
  );
};

export default NavbarSide;
