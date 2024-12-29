import React from 'react';
import IngredientCard from './IngredientCard';

const SystemIngredients = () => {
  const ingredients = [
    {
      number: "01",
      title: "AI-Enhanced, Human-Crafted Communication",
      description: "AI is terrible at writing entire emails, and people can easily detect when it's used. But, AI is great at writing tightly-constrained variables. We place these variables inside thoughtful templates written by humans, ensuring that each email feels personal and unique."
    },
    {
      number: "02",
      title: "Pain-Point Targeting",
      description: "We'll scour the internet to find buyers that actually have the pain your product solves (ex. open job roles, customer reviews, company news, job changes, and more). Then, we reach out to them with our aligned offer."
    },
    {
      number: "03",
      title: "Scalable Infrastructure",
      description: "Gone are the volume bottlenecks of 1 SDR = 1 inbox. When you work with us, you send at whatever scale you'd like to send at. Our single control center manages >75 inboxes efficiently."
    }
  ];

  return (
    <div className="bg-[#0D0B1F] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Scale fast and get new clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              predictably
            </span>
          </h2>
          <p className="text-xl text-white/80">
            Here are the ingredients that make up our system:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={index}
              number={ingredient.number}
              title={ingredient.title}
              description={ingredient.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemIngredients;