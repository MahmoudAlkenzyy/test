import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]  relative z-[500] pt-10">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* أيقونات وسائل التواصل الاجتماعي */}
        <div className="flex flex-row justify-center gap-4 mb-[20px]">
    

          {/* لينكد إن */}
          <a
            href="https://www.linkedin.com/in/reem-gbr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          {/* جيت هاب */}
          <a
            href="https://github.com/reemmgbr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-500 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>

          {/* واتساب */}
          <a
            href="https://wa.me/01029386477"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
          </a>

    
        </div>

        {/* حقوق النشر */}
        <div className="mb-[20px] text-[15px] text-center">
        &copy; 2025 Reem Gbr. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;