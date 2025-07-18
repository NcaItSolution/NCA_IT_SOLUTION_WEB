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
                    <p>USA +1 (872) 239-4605</p>
                    <p>INDIA +91-9718340022</p>
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
                        <li>Healthcare Website & Digital Marketing</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Address</h3>
                    <p>
                        <strong>Corp. Office:</strong> H 138, Ground Floor, H Block, Sector 63, Noida, UP-201301, India
                    </p>
                    <p className="mt-4">
                        <strong>USA:</strong> 1348 S FINLEY RD, Lombard, IL 60148 USA
                    </p>
                </div>
            </div>

            <div className="mt-10 flex space-x-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-500" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            </div>

            <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-3">
                <div className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer">
                    Have a Query?
                </div>
                <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer"></div>
            </div>

            <div className="fixed bottom-5 left-5">
                <div className="bg-green-500 p-3 rounded-full shadow-lg cursor-pointer">
                    <img
                        src="http://upload.wikimedia.org/wikipedia/common/6/6b/whatsApp.svg"
                        alt="whatsApp"
                        className="w-6 h-6"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
