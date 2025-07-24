import React from "react";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div>
            <img
              src="../../Public/img/logo.png"
              alt="logo"
              className="h-20 w-20"
            />
          </div>
          <h3 className="text-xl font-bold mb-4">Important Link</h3>
          <ul className="space-y-2">
          <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/career">
              <li>Career</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>

            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <h4 className="mt-4 font-semibold">Call Us Today</h4>

          <p>INDIA +91 - 8287584509</p>
          <p className="flex items-center mt-2">
            <Mail className="w-4 h-4 mr-2" />
            ncaitsolution90@gmail.com
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Other Links</h3>
          <ul className="space-y-2">
            <Link to='/web-app' className="space-y-2"> <li>Web Development</li></Link>
            <Link to='/mobile-app' className="space-y-2"> <li>Mobile Apps</li></Link>
            
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Address</h3>
          <p>
            <strong>Corp. Office:</strong> Office No. 705A, Iconic Corenthum Tower,
            7th Floor, Sector-62, Noida, UP-201301, India.
          </p>

          {/* Embedded Google Map */}
          <div className="mt-4 w-full rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <iframe
              title="NCA IT Solution Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.519534096737!2d77.38316151508221!3d28.6153775824126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4607fa9da7d%3A0x43864eca4360d31f!2sIconic%20Corenthum%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201301%2C%20India!5e0!3m2!1sen!2sus!4v1660834571529!5m2!1sen!2sus"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-10 flex space-x-4">
        <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
        <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-500" />
        <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
      </div>
    </footer>
  );
};

export default Footer;
