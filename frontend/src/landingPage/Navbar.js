import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ check login status
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // simple refresh
  };

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/">
          <img src="/media/images/04_logo.svg" alt="Logo" className="h-8" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/support">Support</Link>

          {/* ✅ AUTH BUTTONS */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="px-4 py-2 border rounded-md">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Logout
            </button>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/support">Support</Link>

            {!isLoggedIn ? (
              <>
                <Link to="/login">Login</Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white text-center py-2 rounded-md"
                >
                  Signup
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 rounded-md"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
