import React, { useState } from 'react';


const faqsData = [
  {
    pregunta: 'Pregunta 1',
    respuesta:
      'Respuesta a la pregunta 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    pregunta: 'Pregunta 2',
    respuesta:
      'Respuesta a la pregunta 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // Add more questions and answers here...
];

const FAQs = () => {
  const [showFullAnswer, setShowFullAnswer] = useState(-1);

  const toggleAnswer = (index) => {
    setShowFullAnswer((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="bg-gray-100 py-8">
      {/* Primer container */}
      <div className="container mx-auto max-w-[1280px] px-32 flex items-center gap-10 justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-800">Preguntas frecuentes</h1>
          <p className="text-lg text-gray-600 mt-4">
            Resuelve cualquier duda que tengas sobre nosotros en esta sección de FAQ’s
          </p>
        </div>
      </div>

      {/* Segundo container */}
      <div className="container mx-auto mt-12">
        {faqsData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="cursor-pointer" onClick={() => toggleAnswer(index)}>
              <h2 className="text-xl font-semibold text-purple-800">
                {faq.pregunta}
              </h2>
            </div>
            <p
              className={`mt-2 text-gray-600 ${showFullAnswer === index ? 'block' : 'hidden'}`}
            >
              {faq.respuesta}
            </p>
            <button
              className={`mt-2 text-purple-800 font-semibold ${showFullAnswer !== index ? 'block' : 'hidden'}`}
              onClick={() => toggleAnswer(index)}
            >
              {showFullAnswer === index ? 'Mostrar menos' : 'Mostrar más'}
            </button>
          </div>
        ))}
      </div>

      {/* Tercer container */}
      <div className="container mx-auto mt-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Add your images and member names here */}
        </div>
        <p className="text-lg text-gray-600 mt-6">¿Aún tienes dudas sin resolver?</p>
        <p className="text-gray-600">Si aún tienes dudas sin resolver, ¡contáctanos!</p>
        <button className="bg-purple-800 text-white rounded-lg px-4 py-2 mt-4">
          Contactar equipo
        </button>
      </div>
    </div>
  );
};

export default FAQs;


