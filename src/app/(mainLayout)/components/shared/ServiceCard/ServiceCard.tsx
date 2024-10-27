// components/Card.tsx
import Image from 'next/image';

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;

};

const ServiceCard: React.FC<CardProps> = ({ title, description, imageSrc,  }) => {
  return (
    <div className=" w-full max-w-[22rem] mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc} 
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-1000 ease-in-out transform hover:scale-110"
        /> 
      </div>
      <div className="p-4 py-8">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {description }
        </p>
        <a href="#" className="text-primary_color text-underLine-animation flex items-center gap-1">
          Learn More <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

            