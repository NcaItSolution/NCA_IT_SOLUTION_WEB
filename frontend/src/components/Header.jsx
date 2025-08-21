import {
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaPhone,
  FaFacebookF,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdAccessTime, MdLocationOn } from "react-icons/md";
import { useState } from "react";
import AdminLogin from "./AdminLogin";
import { Link } from "react-router-dom";

// --- Updated navItems array --- //
const navItems = [
  { name: "ABOUT", link: "/about" },
  {
    name: "SERVICES",
    submenu: [
      {
        category: "Customized Web & Mobile Application",
        items: [
          { label: "Web Application Development", link: "/services/web-app" },
          {
            label: "Database Design & Development",
            link: "/services/database",
          },
          { label: "E-Commerce Solutions", link: "/services/ecommerce" },
          { label: "Content Management Systems", link: "/services/cms" },
          {
            label: "Mobile Application Development",
            link: "/services/mobile-app",
          },
          {
            label: "Maintenance & Support Services",
            link: "/services/support",
          },
          { label: "Android App Development", link: "/services/android" },
          { label: "IOS/IPhone App Development", link: "/services/ios" },
        ],
      },
      {
        category: "Cloud & VPS Hosting Solutions",
        items: [
          {
            label: "Shared Hosting Solution",
            link: "/services/shared-hosting",
          },
          {
            label: "VPS Server/Hosting Solution",
            link: "/services/vps-hosting",
          },
          { label: "Cloud Server Solutions", link: "/services/cloud" },
          { label: "AWS/Azure Solutions", link: "/services/aws-azure" },
          { label: "IVR Solution", link: "/services/ivr" },
        ],
      },
    ],
  },

  // ---- COURSES inserted here ---- //
  { name: "COURSES", link: "/courses" },

  { name: "REGISTER", link: "/register" },
  { name: "CAREERS", link: "/career" },
  { name: "CERTIFICATE", link: "/certificate" },
  { name: "CONTACT US", link: "/contact" },
  {
    name: "STUDENT LOGIN",
    link: "https://nca-it-solution-student-learning-portal.onrender.com",
  },
];

const Header = () => {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const handleAdminLoginClick = () => setShowAdminLogin(true);
  const handleCloseAdminLogin = () => setShowAdminLogin(false);

  const linkedInUrl =
    "https://www.linkedin.com/in/nca-it-solution-aa3515375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const instagramUrl =
    "https://www.instagram.com/ncaitsolution_noida?igsh=ODgxY2lqa2JtYmN1";
  const facebookUrl =
    "https://www.facebook.com/people/NCAIT/61567201709977/?mibextid=qi2Omg&rdid=dlP3DA3Tbl6jdAYu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15Bh5t4DU6%2F%3Fmibextid%3Dqi2Omg";
  const justDialUrl =
    "https://www.justdial.com/Noida/Nca-It-Solution-Ai-Training-Institute-Noida-Near-Metro-Electronic-City-Noida-Sector-62/011PXX11-XX11-240812093602-I2K6_BZDET?trkid=&term=&ncatid=11294974&area=&search=Showing%20Results%20for%20%22Nca%20It%20Solution%20Near%20Electronic%20City%20Metro%20Station%20Noida%20Sector%2062%22%20in%20Noida&mncatname=Nca%20It%20Solution%20Near%20Electronic%20City%20Metro%20Station%20Noida%20Sector%2062&ftterm=Nca%20It%20Solution%20Near%20Electronic%20City%20Metro%20Station%20Noida%20Sector%2062&abd_btn=&abd_heading=&isFreetxt=1&bd=2&cat_b2b_flag=&searchfrom=lst&thumbnail=";
  return (
    <header className="bg-white text-gray-900 w-full shadow-md z-50 fixed top-0 left-0">
      <div className="w-[95%] max-w-[1600px] mx-auto py-3">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Logo + Hamburger */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex items-start gap-0">
              <img
                src="../../Public/img/logo.png"
                alt="logo"
                className="w-8 h-8 lg:w-16 lg:h-16 object-contain"
              />
              <div className="leading-tight ml-2">
                <h1 className="text-lg lg:text-2xl font-bold tracking-wide whitespace-normal lg:whitespace-nowrap">
                  NCA IT SOLUTION
                </h1>

                <span className="text-sm lg:text-base text-indigo-900 font-medium whitespace-nowrap block">
                  Artificial Intelligence Based Training
                </span>
              </div>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                setMobileServicesOpen(false);
              }}
              className="lg:hidden text-2xl text-gray-700"
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>

          {/* Desktop Contact + Nav */}
          <div className="hidden lg:flex flex-col items-end w-full max-w-[75%]">
            {/* Contact Row */}
            <div className="flex items-center justify-end gap-x-6 text-[15px] font-medium mb-2">
              {/* Admin Login Button */}
              <button
                onClick={handleAdminLoginClick}
                className="ml-4 px-4 py-2 bg-white text-white rounded-lg font-semibold  transition"
              >
                Admin Login
              </button>
              <span className="flex items-center text-gray-700">
                <MdPhone className="text-green-500 mr-1.5" /> +91 8287584509
              </span>
              <span className="flex items-center bg-indigo-50 px-3 py-1 rounded-full text-indigo-600 font-semibold shadow-sm">
                <MdAccessTime className="mr-1.5" /> 8AM - 8PM
              </span>
              <div className="flex gap-3 text-lg ml-2">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-700 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={justDialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 font-semibold tracking-wide transition"
                >
                  JustDial
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center justify-end gap-2 text-sm text-gray-600 max-w-[80%] text-right leading-snug mb-2">
              <MdLocationOn className="text-red-500" />
              <span className="font-medium">
                Iconic Corenthum Tower, Floor 7, Office 705 A, Electronic City
                Metro Station, Noida Sector 62
              </span>
            </div>

            {/* Navigation */}
            <ul className="flex gap-2 text-[16px] font-semibold justify-end flex-wrap bg-gray-50 py-2 px-5 rounded-xl shadow-sm border border-gray-200">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group"
                  onMouseEnter={() =>
                    item.name === "SERVICES" && setDesktopServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    item.name === "SERVICES" && setDesktopServicesOpen(false)
                  }
                >
                  {"submenu" in item ? (
                    <>
                      <Link
                        to={item.link || "#"}
                        className="px-3 py-1.5 rounded-md transition hover:bg-gray-200 hover:text-red-500"
                      >
                        {item.name}
                      </Link>

                      {/* Dropdown */}
                      {item.name === "SERVICES" && desktopServicesOpen && (
                        <div className="absolute left-0 top-full mt-2 bg-white shadow-xl border border-gray-200 z-50 w-screen max-w-3xl grid grid-cols-1 md:grid-cols-2 p-6 gap-6 text-sm rounded-lg">
                          {item.submenu.map((section, sIdx) => (
                            <div key={sIdx}>
                              <h4 className="font-semibold text-blue-600 mb-2 uppercase tracking-wide text-xs">
                                {section.category}
                              </h4>
                              <ul className="space-y-1.5 text-gray-700">
                                {section.items.map((subItem, i) => (
                                  <li key={i}>
                                    <Link
                                      to={subItem.link}
                                      className="hover:text-red-500 hover:underline transition truncate"
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      className="px-3 py-1.5 rounded-md transition hover:bg-gray-200 hover:text-red-500"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Admin Login Popup */}
          {showAdminLogin && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
                <button
                  onClick={handleCloseAdminLogin}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
                >
                  &times;
                </button>
                {/* AdminLogin component as popup */}
                <AdminLogin
                  onSuccess={() => {
                    handleCloseAdminLogin();
                    window.location.href = "/admin-dash";
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Contact Row */}
        <div className="lg:hidden mt-1 flex justify-between items-center text-gray-600 text-lg">
          <div className="flex items-center gap-4">
  <MdEmail title="Email" className="text-xl cursor-pointer" />
  <FaPhone title="Phone" className="text-xl cursor-pointer" />

  {/* Admin Login Button */}
  <button
    onClick={handleAdminLoginClick}
    className="px-4 py-2 bg-white text-white rounded-lg font-semibold "
  >
    Admin Login
  </button>
</div>

          <div className="flex gap-3">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <ul className="lg:hidden mt-3 bg-gray-50 rounded-lg p-3 space-y-2 shadow border border-gray-200">
            {navItems.map((item, idx) => (
              <li key={idx}>
                {item.name === "SERVICES" ? (
                  <>
                    <button
                      className="w-full text-left font-medium flex items-center justify-between hover:text-red-500"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                    >
                      {item.name}
                      <span className="text-sm">
                        {mobileServicesOpen ? "▲" : "▼"}
                      </span>
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2 ml-2 bg-gray-100 rounded-md p-3 space-y-2">
                        {item.submenu.map((section, sIdx) => (
                          <div key={sIdx}>
                            <h4 className="text-blue-500 font-semibold mb-1 text-xs">
                              {section.category}
                            </h4>

                            <ul className="space-y-1 text-gray-700">
                              {section.items.map((subItem, i) => (
                                <li key={i}>
                                  <Link
                                    to={subItem.link}
                                    className="hover:underline hover:text-red-500 transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className="block font-medium hover:text-red-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
