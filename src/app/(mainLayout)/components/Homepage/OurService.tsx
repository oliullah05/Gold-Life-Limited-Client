import React from "react";
import ServiceCard from "../shared/ServiceCard/ServiceCard";
const cardData = [
  {
    title: "Implants",
    description:
      "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    imageSrc:
      "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
  },
  {
    title: "Braces",
    description:
      "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    imageSrc:
      "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
  },
  {
    title: "Teeth Whitening",
    description:
      "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    imageSrc:
      "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
  },
  {
    title: "Teeth Removal",
    description:
      "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    imageSrc:
      "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
  },
  {
    title: "Tooth Checkup",
    description:
      "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    imageSrc:
      "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
  },
  {
    title: "Straighten Teeth",
    description:
      "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    imageSrc:
      "https://medito-react.vercel.app/static/media/service-2-1.964b5d28b409e4d88b30.jpg",
  },
];

export default function OurService() {
  return (
    <div className="primary-container  place-items-center border justify-items-center mx-auto  grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
      {cardData.map((data, index) => (
        <ServiceCard
          key={index}
          title={data.title}
          description={data.description}
          imageSrc={data.imageSrc}
        />
      ))}
    </div>
  );
}
