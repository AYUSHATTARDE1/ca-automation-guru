
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Bell, Search, Settings, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setShowMobileMenu(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
          scrolled || !isHomePage
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center">
            {!isHomePage && (
              <button
                onClick={toggleSidebar}
                className="mr-4 p-1 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
              >
                <Menu size={24} />
              </button>
            )}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary mr-1">CA</span>
              <span className="text-xl font-bold text-primary">AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#features" className="font-medium text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#pricing" className="font-medium text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="#about" className="font-medium text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#contact" className="font-medium text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </>
            ) : (
              <div className="relative mx-auto w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="search"
                  className="block w-full pl-10 pr-3 py-2 rounded-full bg-secondary text-sm outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Search..."
                />
              </div>
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center">
            {isHomePage ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="mr-2 hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-transparent hover:bg-secondary rounded-full transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/dashboard"
                  className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors duration-200"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-1">
                <button className="p-2 rounded-full hover:bg-secondary transition-colors duration-200">
                  <Bell size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-secondary transition-colors duration-200">
                  <Settings size={20} />
                </button>
                <button className="ml-1 p-[6px] rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200">
                  <User size={20} />
                </button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="ml-4 p-1 rounded-full md:hidden hover:bg-secondary transition-colors duration-200"
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col pt-20 pb-6 px-6 bg-white"
          >
            <nav className="flex flex-col space-y-6 mt-4">
              {isHomePage ? (
                <>
                  <a href="#features" className="text-lg font-medium">
                    Features
                  </a>
                  <a href="#pricing" className="text-lg font-medium">
                    Pricing
                  </a>
                  <a href="#about" className="text-lg font-medium">
                    About
                  </a>
                  <a href="#contact" className="text-lg font-medium">
                    Contact
                  </a>
                  <hr className="border-t border-secondary my-2" />
                  <Link to="/dashboard" className="text-lg font-medium">
                    Sign In
                  </Link>
                  <Link
                    to="/dashboard"
                    className="mt-4 flex items-center justify-center px-4 py-3 font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <>
                  <div className="relative w-full mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search size={20} className="text-gray-400" />
                    </div>
                    <input
                      type="search"
                      className="block w-full pl-10 pr-3 py-3 rounded-lg bg-secondary text-base outline-none"
                      placeholder="Search..."
                    />
                  </div>
                  <Link to="/dashboard" className="text-lg font-medium">
                    Dashboard
                  </Link>
                  <Link to="/accounting" className="text-lg font-medium">
                    Accounting
                  </Link>
                  <Link to="/taxes" className="text-lg font-medium">
                    Taxes
                  </Link>
                  <Link to="/analytics" className="text-lg font-medium">
                    Analytics
                  </Link>
                  <Link to="/business" className="text-lg font-medium">
                    Business
                  </Link>
                  <hr className="border-t border-secondary my-2" />
                  <Link to="/settings" className="text-lg font-medium">
                    Settings
                  </Link>
                  <Link to="/" className="text-lg font-medium">
                    Sign Out
                  </Link>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
