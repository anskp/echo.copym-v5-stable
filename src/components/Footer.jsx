import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative">
      <div className="relative z-10 bg-black backdrop-blur-sm rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              loading="lazy"
              src="assets/copym/png/Copym-01-1.png"
              alt="COPYM"
              className="h-10 w-auto sm:h-16 md:h-16 object-contain"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Investing for outliers. Build wealth with our modern investment
              platform designed for the next generation.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Stocks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  ETFs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Crypto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Options
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Retirement
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  API
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 COPYM. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}