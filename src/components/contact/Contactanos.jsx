import React, { useState } from 'react';
import './Contactanos.css';

const Contactanos = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/mrbzkarr', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        message: formData.message,
      }),
    })
      .then(response => {
        if (response.ok) {
          setEnviado(true);
          setFormData({
            email: '',
            message: '',
          });
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <section className="contactanos">
      <h2 className="titulo">Contáctame</h2>
      <form className="contacto-formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
      {enviado && <p className="success-message">¡Mensaje enviado con éxito!</p>}
      {error && <p className="error-message">Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.</p>}
    </section>
  );
};

export default Contactanos;
