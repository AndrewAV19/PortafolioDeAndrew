import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'; 
import Presentation from './components/presentation/Presentation';
import ImagenDestacada from './components/carousel/ImagenDestacada';
import Servicios from './components/services/Servicios';
import Trabajos from './components/works/NuestrosTrabajos';
import AcercaDe from './components/acercade/AcercaDe';
import Contacto from './components/contact/Contactanos';
import PiePagina from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <div id="inicio"> 
      <Presentation/>
    </div>
    <ImagenDestacada />
    <Servicios />
    <Trabajos />
    <div id="acerca"> 
      <AcercaDe />
    </div>
    <div id="contacto"> 
      <Contacto />
    </div>
    <PiePagina />
  </React.StrictMode>
);
