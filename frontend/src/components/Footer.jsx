import React from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Logo & Important Links */}
        <div>
          <div className="mb-6">
            <img
              src="/img/logo.png"
              alt="logo"
              className="h-20 w-20 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold mb-5">Important Links</h3>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-gray-700">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
            <li className="cursor-default">Privacy Policy</li>
            <li className="cursor-default">Terms & Conditions</li>
          </ul>

          <h4 className="mt-6 font-semibold">Call Us Today</h4>
          <p>INDIA +91 - 8287584509</p>
          <p className="flex items-center mt-2 text-gray-600">
            <Mail className="w-5 h-5 mr-2" />
            ncaitsolution90@gmail.com
          </p>
        </div>

        {/* Contact and Map */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Address</h3>
          <p className="text-gray-600">
            <strong>Corp. Office:</strong> Office No. 705A, Iconic Corenthum
            Tower, 7th Floor, Sector-62, Noida, UP-201301, India.
          </p>

          {/* Embedded Google Map */}
          <div className="mt-6 w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="NCA IT Solution Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.519534096737!2d77.38316151508221!3d28.6153775824126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4607fa9da7d%3A0x43864eca4360d31f!2sIconic%20Corenthum%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201301%2C%20India!5e0!3m2!1sen!2sus!4v1660834571529!5m2!1sen!2sus"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex space-x-6 justify-center md:justify-start">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nca-it-solution-aa3515375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-blue-600 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6 cursor-pointer" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/ncaitsolution_noida?igsh=ODgxY2lqa2JtYmN1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-pink-500 transition-colors duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
