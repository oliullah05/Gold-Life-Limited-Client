import React from "react";
import ServiceCard from "../shared/ServiceCard/ServiceCard";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
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
    <section className="my-10 bg-silver_color_dark py-20 flex justify-center items-center">
      <div className="primary-container">
        <div className="flex justify-between items-center">
        <SectionTitle Title="Our Service" subTitle="Services We Provide." />
        <button className="bg-blue-600 text-sm py-4 text-white font-semibold  px-4 rounded-lg hover:bg-blue-700 transition">
              Discover More
            </button>
        </div>

        <div className="  place-items-center   justify-items-center mx-auto  grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {cardData.map((data, index) => (
            <ServiceCard
              key={index}
              title={data.title}
              description={data.description}
              imageSrc={data.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
