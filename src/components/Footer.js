import React from "react";

function Footer() {
  return (
    <div className="bg-gray-200 text-gray-600 text-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>© E.G. {new Date().getFullYear()}</div>
        <div>
          <a
            href="https://github.com/dwaxgio/merlynn_tom_api"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
