import React from "react";

interface TextCardProps {
  number: string;
  title: string;
  description: string;
}

const TextCard: React.FC<TextCardProps> = ({ number, title, description }) => {
  return (
    <div
      className="flex h-full transform flex-col justify-between rounded-2xl bg-gray-50
     p-8 transition-transform hover:scale-102 hover:bg-indigo-400 hover:text-white"
    >
      <p className="text-regular">{number}</p>
      <div>
        <h2 className="text-3xl">{title}</h2>
        <div className="p-2"></div>
        <p className="text-regular">{description}</p>
      </div>
    </div>
  );
};

export default TextCard;
