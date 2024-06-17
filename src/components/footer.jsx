import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made by Harsh Raj{" "}
          <a href="https://github.com/harshraj099">
            <FaGithub />
          </a>{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
