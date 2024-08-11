import React from 'react';
import './Servicios.css';
import webImage from '../../../public/images/navegador.png';
import mobileImage from '../../../public/images/telefono-inteligente.png';
import desktopImage from '../../../public/images/ordenador-personal.png';
import htmlLogo from '../../../public/images/html-5.png';
import cssLogo from '../../../public/images/css-3.png';
import jsLogo from '../../../public/images/js.png';
import reactLogo from '../../../public/images/react-icon-512x512-u6e60ayf.png';
import androidLogo from '../../../public/images/androide.png';
import javaLogo from '../../../public/images/java.png';
import pythonLogo from '../../../public/images/piton.png';
import csharpLogo from '../../../public/images/csharp.webp';
import springBootLogo from '../../../public/images/springboot.png';  
import springFrameworkLogo from '../../../public/images/spring-icon.png'; 

const Servicios = () => {
  return (
    <div className="servicios">
      <h1 className="tech-title">Tecnologías</h1>
      <div className="servicio">
        <h2>Lenguajes</h2>
        <img src={desktopImage} alt="Desktop Development" />
        <ul className="tech-list">
          <li><img src={javaLogo} alt="Java" className="tech-logo small-logo" /> Java</li>
          <li><img src={pythonLogo} alt="Python" className="tech-logo small-logo" /> Python</li>
          <li><img src={csharpLogo} alt="C#" className="tech-logo small-logo" /> C#</li>
        </ul>
      </div>
      <div className="servicio">
        <h2>Front-End</h2>
        <img src={webImage} alt="Web Development" />
        <ul className="tech-list">
          <li><img src={htmlLogo} alt="HTML5" className="tech-logo small-logo" /> HTML5</li>
          <li><img src={cssLogo} alt="CSS3" className="tech-logo small-logo" /> CSS3</li>
          <li><img src={jsLogo} alt="JavaScript" className="tech-logo small-logo" /> JavaScript</li>
          <li><img src={reactLogo} alt="React" className="tech-logo small-logo" /> React</li>
        </ul>
      </div>
      <div className="servicio">
        <h2>Backend</h2>
        <img src={desktopImage} alt="Backend Development" />
        <ul className="tech-list">
          <li><img src={springBootLogo} alt="Spring Boot" className="tech-logo small-logo" /> Spring Boot</li>
          <li><img src={springFrameworkLogo} alt="Spring Framework" className="tech-logo small-logo" /> Spring Framework</li>
        </ul>
      </div>
      <div className="servicio">
        <h2>Mobile</h2>
        <img src={mobileImage} alt="Mobile Development" />
        <ul className="tech-list">
          <li><img src={androidLogo} alt="Android Studio" className="tech-logo small-logo" /> Android Studio</li>
        </ul>
      </div>
    </div>
  );
};

export default Servicios;
