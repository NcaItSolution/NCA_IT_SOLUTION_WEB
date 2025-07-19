import { useState } from 'react';
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube
} from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    {
      name: 'ABOUT',
      submenu: ['Our Company', 'Our Team', 'Why Us?']
    },
    {
      name: 'SERVICES',
      submenu: [
        {
          category: 'Customized Web & Mobile Application',
          items: [
            'Web Application Development',
            'Database Design & Development',
            'E-Commerce Solutions',
            'Content Management Systems',
            'Mobile Application Development',
            'Maintenance & Support Services',
            'Android App Development',
            'IOS/IPhone App Development'
          ]
        },
        {
          category: 'Digital Marketing',
          items: [
            'Search Engine Optimization',
            'Digital Marketing',
            'Pay Per Click Campaigns',
            'Social Media Promotion',
            'Bulk SMS, Whatsapp & Email Solutions',
            'Business Email Solutions',
            'Multimedia Solutions',
            'Creative Content Writing'
          ]
        },
        {
          category: 'Cloud & VPS Hosting Solutions',
          items: [
            'Shared Hosting Solution',
            'VPS Server/Hosting Solution',
            'Dedicated Server Hosting Solution',
            'Cloud Server Solutions',
            'AWS/Azure Solutions',
            'IVR Solution'
          ]
        },
        {
          category: 'Event & Media Solutions',
          items: [
            'Creative Content Creation',
            'Live Streaming On Social Media',
            'PR Articles And Media Solutions'
          ]
        }
      ]
    },
    {
      name: 'PORTFOLIOS',
      submenu: ['Websites', 'Apps', 'Graphics']
    },
    {
      name: 'INDUSTRIES',
      submenu: ['Healthcare', 'Education', 'Retail']
    },
    {
      name: 'CAREERS',
      submenu: ['Openings', 'Internships']
    },
    { name: 'BLOG' },
    { name: 'CONTACT US' }
  ];

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md w-full z-50 relative">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              {/* Logo Removed */}
              <div>
                <h1 className="text-xl font-bold text-red-600 dark:text-red-400 cursor-pointer">NCA IT SOLUTION</h1>
                <p className="text-sm italic text-gray-700 dark:text-gray-300">We Create A Difference</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">DESIGN | DEVELOPMENT | BRANDING</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-2">
                <MdEmail className="text-red-600" />
                <span>contact@ncaitsolutions.com</span>
              </div>
              <span>USA: +1 (872)239-4605</span>
              <span>INDIA: +91-9718340022</span>
              <div className="flex gap-2 text-red-600 text-lg">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
              </div>
              <button
                className="md:hidden p-2 border rounded"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="text-right pr-4">
            <button
              onClick={toggleDarkMode}
              className="text-xs border px-3 py-1 rounded 
                         bg-white text-black hover:bg-gray-200
                         dark:bg-white dark:text-black dark:hover:bg-gray-100"
            >
              Toggle Dark Mode
            </button>
          </div>

          {/* Navigation */}
          <nav className={`md:flex bg-gray-100 dark:bg-gray-800 ${menuOpen ? 'block' : 'hidden'} w-full pl-0 md:pl-[215px]`}>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-6 py-2">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group px-4 py-2"
                  onMouseEnter={() => item.name === 'SERVICES' && setServicesOpen(true)}
                  onMouseLeave={() => item.name === 'SERVICES' && setServicesOpen(false)}
                >
                  <button className="font-semibold text-gray-700 dark:text-white hover:text-red-600 focus:outline-none">
                    {item.name}
                  </button>

                  {/* SERVICES mega menu */}
                  {item.name === 'SERVICES' && servicesOpen && (
                    <div className="absolute top-full left-0 bg-white dark:bg-gray-900 shadow-xl z-50 w-[1000px] grid grid-cols-4 p-6 gap-6 text-sm">
                      {item.submenu.map((section, sIdx) => (
                        <div key={sIdx}>
                          <h4 className="font-semibold text-blue-500 dark:text-blue-300 mb-2">
                            {section.category}
                          </h4>
                          <ul className="space-y-1 text-gray-700 dark:text-gray-200">
                            {section.items.map((subItem, i) => (
                              <li key={i} className="hover:underline cursor-pointer">
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Simple submenu */}
                  {item.submenu && item.name !== 'SERVICES' && (
                    <ul className="absolute top-full left-0 bg-white dark:bg-gray-900 shadow-lg z-50 w-64 text-sm hidden group-hover:block transition-all duration-200">
                      {item.submenu.map((subItem, i) => (
                        <li
                          key={i}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;




