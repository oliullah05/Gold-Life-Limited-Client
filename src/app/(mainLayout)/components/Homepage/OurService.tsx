import React from 'react';
import ServiceCard from '../shared/ServiceCard/ServiceCard';



const cardData = [
    {
      title: 'Implants',
      description: 'Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
      imageSrc: "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
      linkText: 'Learn More',
    },
    {
      title: 'Braces',
      description: 'Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
      imageSrc: "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
      linkText: 'Learn More',
    },
    {
      title: 'Teeth Whitening',
      description: 'Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
      imageSrc: "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
      linkText: 'Learn More',
    },
    {
      title: 'Teeth Removal',
      description: 'Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
      imageSrc: "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
      linkText: 'Learn More',
    },
    {
      title: 'Tooth Checkup',
      description: 'Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
      imageSrc: "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
      linkText: 'Learn More',
    },
    {
      title: 'Straighten Teeth',
      description: 'Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
      imageSrc: "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
      linkText: 'Learn More',
    },
  ];

export default function Home() {
  return (
    <div className="primary-container bg-red-500 mx-auto  grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-between">
    {cardData.map((data, index) => (
      <ServiceCard
        key={index}
        title={data.title}
        description={data.description}
        imageSrc={data.imageSrc}
        linkText={data.linkText}
      />
    ))}
  </div>
  );
}