import React from 'react';
import './Footer.css'; 
import { FaFacebookF, FaLinkedin, FaYoutube, FaGithub, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Andrew Alonso</h2>
          <p>Desarrollador Full-Stack.</p>
        </div>
        <div className="footer-section">
          <h3>Contáctame</h3>
          <ul>
            <li><a href="mailto:andrewav19@outlook.com">andrewav19@outlook.com</a></li>
            <li><a href="https://wa.me/3931062765" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /> 3931062765</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/andrew-emmanuel-alonso-valenzuela-061a93293/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@AlonsoCorporation" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://github.com/AndrewAV19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/AlonsoCorpotationDB" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Descarga mi CV</h3>
          <a href="../../../public/cv/CV Andrew Alonso.pdf" download>Haz clic aquí para descargar</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PortafolioAndrewAlonso. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
