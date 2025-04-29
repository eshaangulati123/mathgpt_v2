import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link when location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#353337]">
      {/* Floating Cylindrical SaaS Navbar */}
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 px-4 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="max-w-6xl mx-auto">
          {/* Floating cylindrical navbar container with enhanced glass effect */}
          <div
            className={`
              relative rounded-full
              ${isScrolled
                ? "bg-white/85 backdrop-blur-md shadow-lg"
                : "bg-white/75 backdrop-blur-sm shadow-md"
              }
              transition-all duration-300 ease-in-out
              border border-gray-200/40
              px-6 py-3
              before:content-[''] before:absolute before:inset-0 before:rounded-full
              before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
              before:pointer-events-none
            `}
            style={{
              boxShadow: isScrolled
                ? '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.6)'
                : '0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.5)'
            }}
          >
            <div className="flex items-center justify-between relative z-10">
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center z-10 transition-transform duration-200 hover:scale-105"
                onClick={() => setActiveLink("/")}
              >
                <img
                  src="https://ext.same-assets.com/600722722/411997835.png"
                  alt="MathGPT.AI Logo"
                  className="h-8 w-auto"
                />
              </Link>

              {/* Navigation Links - Desktop */}
              <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
                {[
                  { path: "/", label: "Home" },
                  { path: "/features", label: "Features" },
                  { path: "/demo", label: "Demo" },
                  { path: "/pricing", label: "Pricing" },
                  { path: "/about", label: "About Us" },
                  { path: "/news", label: "News" }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-all duration-200 relative px-3 py-1 rounded-full
                      ${activeLink === link.path
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-600"
                      }
                      before:content-[''] before:absolute before:inset-0 before:rounded-full
                      before:bg-blue-50/0 hover:before:bg-blue-50/70 before:transition-all before:duration-200
                      before:scale-0 hover:before:scale-100 before:origin-center
                    `}
                    onClick={() => setActiveLink(link.path)}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {activeLink === link.path && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3 z-10">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors hidden md:inline-block px-3 py-1 hover:bg-gray-50/70 rounded-full"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full
                    hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300
                    before:content-[''] before:absolute before:inset-0 before:rounded-full
                    before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0
                    hover:before:opacity-100 before:transition-opacity before:duration-300 relative
                    overflow-hidden
                  "
                >
                  <span className="relative z-10">Sign up for free</span>
                </Link>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden flex items-center p-1 rounded-full hover:bg-gray-100/50 transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden fixed inset-x-0 px-4 pt-3
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
          `}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/30 p-4 mt-2">
            <nav className="flex flex-col space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/features", label: "Features" },
                { path: "/demo", label: "Demo" },
                { path: "/pricing", label: "Pricing" },
                { path: "/about", label: "About Us" },
                { path: "/news", label: "News" },
                { path: "/login", label: "Log in" }
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveLink(link.path);
                  }}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors
                    ${activeLink === link.path
                      ? "text-blue-600 bg-blue-50/50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50/50"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Add padding to the top of main content to account for fixed header */}
      <main className="w-full pt-24">
        <Outlet />
      </main>

      {/* Footer matching the original MathGPT.ai site */}
      <footer className="w-full bg-[#f7f7f8] py-12 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Logo and copyright */}
            <div className="col-span-1">
              <Link to="/" className="flex items-center mb-4">
                <img
                  src="https://ext.same-assets.com/600722722/411997835.png"
                  alt="MathGPT.AI Logo"
                  className="h-6 w-auto"
                />
                <span className="ml-2 text-sm font-semibold">MathGPT</span>
              </Link>
            </div>

            {/* Company Links */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About us</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/press" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Press</Link></li>
                <li><Link to="/help" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Tutoring Center</Link></li>
              </ul>
            </div>

            {/* Contact Links */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold mb-3">Contact</h3>
              <ul className="space-y-2">
                <li><Link to="/partnerships" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Partnerships</Link></li>
                <li><Link to="/solution" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Solution</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright and Social */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">©️ 2024 Dot It, Inc. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/mathgpt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/mathgpt/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/mathgpt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700" aria-label="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/mathgpt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;