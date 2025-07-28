import {
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaPhone,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Updated navItems array --- //
const navItems = [
  { name: 'ABOUT', link: '/about' },
  {
    name: 'SERVICES',
    submenu: [
      {
        category: 'Customized Web & Mobile Application',
        items: [
          { label: 'Web Application Development', link: '/services/web-app' },
          { label: 'Database Design & Development', link: '/services/database' },
          { label: 'E-Commerce Solutions', link: '/services/ecommerce' },
          { label: 'Content Management Systems', link: '/services/cms' },
          { label: 'Mobile Application Development', link: '/services/mobile-app' },
          { label: 'Maintenance & Support Services', link: '/services/support' },
          { label: 'Android App Development', link: '/services/android' },
          { label: 'IOS/IPhone App Development', link: '/services/ios' },
        ],
      },
      {
        category: 'Cloud & VPS Hosting Solutions',
        items: [
          { label: 'Shared Hosting Solution', link: '/services/shared-hosting' },
          { label: 'VPS Server/Hosting Solution', link: '/services/vps-hosting' },
          { label: 'Cloud Server Solutions', link: '/services/cloud' },
          { label: 'AWS/Azure Solutions', link: '/services/aws-azure' },
          { label: 'IVR Solution', link: '/services/ivr' },
        ],
      },
    ],
  },

  // ---- COURSES inserted here ---- //
  { name: 'COURSES', link: '/courses' },

  { name: 'INDUSTRIES', link: '/industries' },
  { name: 'CAREERS', link: '/career' },
  { name: 'BLOG', link: '/blog' },
  { name: 'CONTACT US', link: '/contact' },
];

const Header = () => {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const linkedInUrl = 'https://www.linkedin.com/in/nca-it-solution-aa3515375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const instagramUrl = 'https://www.instagram.com/ncaitsolution_noida?igsh=ODgxY2lqa2JtYmN1';

  return (
    <header className="bg-black text-white w-full shadow-md z-50">
      <div className="w-[85%] max-w-[1600px] mx-auto px-5 pt-5 pb-2">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Logo + Hamburger */}
          <div className="flex items-start justify-between w-full lg:w-auto">
            <Link to="/" className="block">
              <div className="flex items-center space-x-4">
                <img src="../../Public/img/logo.png" alt="logo" className="w-20 h-20" />
                <h1 className="text-xl lg:text-3xl font-bold">NCA IT SOLUTION</h1>
              </div>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                setMobileServicesOpen(false);
              }}
              className="lg:hidden text-2xl text-white"
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>

          {/* Desktop Contact + Nav */}
          <div className="hidden lg:flex flex-col items-end w-full max-w-[70%]">
            <div className="flex items-center justify-end flex-wrap gap-x-4 text-sm mb-1">
              <MdEmail className="text-red-400" />
              <span>ncaitsolution90@gmail.com</span>
              <span>+91 8287584509</span>
              <div className="flex gap-4 text-red-400 text-xl ml-4">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-500 transition-colors"
                >
                  <FaLinkedinIn className="cursor-pointer" />
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-pink-500 transition-colors"
                >
                  <FaInstagram className="cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Nav */}
            <ul className="flex gap-6 text-base font-semibold justify-end flex-wrap">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group"
                  onMouseEnter={() =>
                    item.name === 'SERVICES' && setDesktopServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    item.name === 'SERVICES' && setDesktopServicesOpen(false)
                  }
                >
                  {/* If item has a link, Link to it. If not, render as button etc. */}
                  {"submenu" in item ? (
                    <>
                      <Link to={item.link || "#"} className="hover:text-red-400">
                        {item.name}
                      </Link>
                      {/* Desktop SERVICES Dropdown */}
                      {item.name === 'SERVICES' && desktopServicesOpen && (
                        <div className="absolute left-0 top-full bg-gray-900 shadow-xl z-50 w-screen max-w-xl grid grid-cols-1 md:grid-cols-2 p-6 gap-6 text-sm">
                          {item.submenu.map((section, sIdx) => (
                            <div key={sIdx}>
                              <h4 className="font-semibold text-blue-300 mb-2">
                                {section.category}
                              </h4>
                              <ul className="space-y-1 text-gray-200">
                                {section.items.map((subItem, i) => (
                                  <li key={i}>
                                    <Link
                                      to={subItem.link}
                                      className="hover:underline cursor-pointer truncate"
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
                    <Link to={item.link} className="hover:text-red-400">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Contact Row */}
        <div className="lg:hidden mt-4 flex justify-between items-center text-red-400 text-xl">
          <div className="flex gap-4">
            <MdEmail title="Email" />
            <FaPhone title="Phone" />
          </div>
          <div className="flex gap-3">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedinIn className="cursor-pointer" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <ul className="lg:hidden mt-4 bg-gray-800 rounded-md p-4 space-y-2 text-sm">
            {navItems.map((item, idx) => (
              <li key={idx}>
                {item.name === 'SERVICES' ? (
                  <>
                    <button
                      className="w-full text-left font-medium hover:text-red-400 flex items-center justify-between"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                    >
                      {item.name}
                      <span className="ml-2">
                        {mobileServicesOpen ? '▲' : '▼'}
                      </span>
                    </button>
                    {/* Mobile SERVICES Dropdown */}
                    {mobileServicesOpen && (
                      <div className="mt-2 ml-2 bg-gray-700 rounded-md p-3 space-y-3">
                        {item.submenu.map((section, sIdx) => (
                          <div key={sIdx}>
                            <h4 className="text-blue-300 font-semibold mb-1">
                              {section.category}
                            </h4>
                            <ul className="text-gray-200 space-y-1">
                              {section.items.map((subItem, i) => (
                                <li key={i}>
                                  <Link
                                    to={subItem.link}
                                    className="hover:underline cursor-pointer"
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
                    className="block font-medium hover:text-red-400"
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
