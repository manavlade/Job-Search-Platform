import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-800 py-10 mt-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Company Information */}
                <div>
                    <h2 className="text-xl font-semibold text-purple-700 mb-3">Company Name</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorum?
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-purple-700 mb-3">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-600 transition duration-200">Home</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition duration-200">Jobs</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition duration-200">About Us</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition duration-200">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media and Contact */}
                <div>
                    <h2 className="text-xl font-semibold text-purple-700 mb-3">Connect with Us</h2>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-200"><Facebook size={24} /></a>
                        <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-200"><Twitter size={24} /></a>
                        <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-200"><Linkedin size={24} /></a>
                        <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-200"><Instagram size={24} /></a>
                    </div>
                    <p className="text-gray-600">Email: info@company.com</p>
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                </div>
            </div>

            <div className="border-t border-gray-200 mt-10 pt-6 text-center">
                <p className="text-gray-500 text-sm">&copy; 2023 Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
