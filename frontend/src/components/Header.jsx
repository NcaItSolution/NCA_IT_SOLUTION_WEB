import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaPhone,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'ABOUT', link: '/about' },
  {
    name: 'SERVICES',
    link: '/services',
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
          { label: 'Dedicated Server Hosting Solution', link: '/services/dedicated-hosting' },
          { label: 'Cloud Server Solutions', link: '/services/cloud' },
          { label: 'AWS/Azure Solutions', link: '/services/aws-azure' },
          { label: 'IVR Solution', link: '/services/ivr' },
        ],
      },
    ],
  },
  { name: 'INDUSTRIES', link: '/industries' },
  { name: 'CAREERS', link: '/careers' },
  { name: 'BLOG', link: '/blog' },
  { name: 'CONTACT US', link: '/contact' },
];

const Header = () => {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-black text-white w-full shadow-md z-50">
      <div className="w-[85%] max-w-[1600px] mx-auto px-5 pt-5 pb-2">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Logo + Hamburger */}
          <div className="flex items-start justify-between w-full lg:w-auto">
            <Link to="/" className="block">
              <h1 className="text-xl lg:text-3xl font-bold">NCA IT SOLUTION</h1>
              <p className="italic text-sm text-gray-300">We Create a Difference</p>
              <p className="text-xs text-gray-400">
                DESIGN | DEVELOPMENT | BRANDING
              </p>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                setMobileServicesOpen(false);
              }}
              className="lg:hidden text-2xl text-white"
            >
              <FaBars />
            </button>
          </div>

          {/* Desktop Contact + Nav */}
          <div className="hidden lg:flex flex-col items-end w-full max-w-[70%]">
            <div className="flex items-center justify-end flex-wrap gap-x-4 text-sm mb-1">
              <MdEmail className="text-red-400" />
              <span>contact@ncaitsolutions.com</span>
              <span>+1 (872) 239-4605</span>
              <span>+91-9718340022</span>
              <div className="flex gap-3 text-red-400 text-lg ml-2">
                <FaFacebookF className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaLinkedinIn className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
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
                  <Link to={item.link} className="hover:text-red-400">
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
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
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
