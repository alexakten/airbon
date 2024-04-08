import React from 'react';

interface StepCardProps {
  showTag?: boolean;
  showBorder?: boolean;
  tagColor?: string;
  tagText?: string;
  title: string;
  description: string;
  hoverEffect?: boolean;

}

const StepCard: React.FC<StepCardProps> = ({
  showTag = true,
  showBorder = true,
  tagColor,
  tagText,
  title,
  description,
  hoverEffect = true,

}) => {
  const bgColorClass = tagColor && ["purple", "yellow", "green", "blue", "lightblue", "cyan", "orange", "pink"].includes(tagColor)
    ? `bg-${tagColor}`
    : "bg-default";

  const borderClass = showBorder ? "border border-zinc-100 p-6 shadow-md text-left" : "text-center max-w-[280px]";
  const hoverClass = hoverEffect ? "hover:-translate-y-2" : "";


  return (
    <div
      className={`bg-white h-full ${borderClass} justify-between md:text-left items-center md:items-start flex flex-col  w-full rounded-xl transform transition duration-300 ease-in-out ${hoverClass}`}
    >
      <div className="flex items-center gap-2">
        {showTag && tagText && (
          <div className="flex items-center gap-2">
            {tagColor && <div className={`w-2.5 h-2.5 ${bgColorClass} rounded-full`}></div>}
            <p className="opacity-40 text-sm">{tagText}</p>
          </div>
        )}
      </div>
      {/* <p className="text-sm">{tagText}</p> */}
      <div className="mt-12">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 opacity-40">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;