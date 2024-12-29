import React from 'react';

const ClientLogos = () => {
  const logos = [
    {
      name: 'Airsuite',
      src: 'https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6efc4171fc1eb2b665c9b_logo-p-500.png',
      className: 'h-7 opacity-90 brightness-200'
    },
    {
      name: 'ELATE',
      src: 'https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6ef3a8716b43026efd910_2024-03-13__2_-removebg-preview-p-500.png',
      className: 'h-10 opacity-90 brightness-200'
    },
    {
      name: 'Proton',
      src: 'https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66e323d23e13ba1522e13228_proton.png',
      className: 'h-16 opacity-90 brightness-200'
    },
    {
      name: 'Instantly',
      src: 'https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66e32397a43751f0cf189f3f_instantly.png',
      className: 'h-28 opacity-90 brightness-200'
    },
    {
      name: 'VENTION',
      src: 'https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66e323ea6abeba72d48ce9ab_ventor-p-500.png',
      className: 'h-24 opacity-90 brightness-200'
    }
  ];

  return (
    <div className="mt-32 max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-16">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="opacity-90 hover:opacity-100 transition-opacity flex items-center"
          >
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              className={logo.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;