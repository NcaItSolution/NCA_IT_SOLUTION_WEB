import React from "react";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-black text-white p-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Important Link</h3>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Blog</li>
                        <li className="text-blue-400">Clients</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                    <h4 className="mt-4 font-semibold">Call Us Today</h4>
                    
                    <p>INDIA +91 - 8287584509</p>
                    <p className="flex items-center mt-2">
                        <Mail className="w-4 h-4 mr-2" />
                        contact@ncaitsolution.com
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Other Links</h3>
                    <ul className="space-y-2">
                        <li>Web Development</li>
                        <li>Mobile Apps</li>
                        <li><a href="Service.jsx">Services</a></li>
                        <li> Digital Marketing</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Address</h3>
                    <p>
              <strong>Corp. Office:</strong> Office No. 705A, Iconic Corenthum Tower, 7th Floor, Sector-62, Noida, UP-201301, India.
                    </p>

                    
                    
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