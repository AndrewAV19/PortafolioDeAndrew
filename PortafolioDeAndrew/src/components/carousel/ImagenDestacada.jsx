import React from 'react';
import './ImagenDestacada.css';
import imagen from '../../../public/images/software.png';

const ImagenDestacada = () => {
  return (
    <div className="imagen-destacada">
      <img src={imagen} alt="Imagen destacada" />
    </div>
  );
};

export default ImagenDestacada;
