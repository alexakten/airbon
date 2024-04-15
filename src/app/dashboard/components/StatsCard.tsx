import React from 'react';

interface StatsCardProps {
  tagText?: string;
  title: string;


}

const StatsCard: React.FC<StatsCardProps> = ({
  tagText,
  title,

}) => {



  return (
    <div
      className={`bg-white h-full border border-zinc-100 p-6 shadow-md justify-between text-center  md:max-w-none md:text-left items-center md:items-start flex flex-col  w-full rounded-xl transform transition duration-300 ease-in-out`}
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">

          <p className="opacity-40 text-sm">{tagText}</p>
        </div>
      </div>
      {/* <p className="text-sm">{tagText}</p> */}
      <div className="mt-12">
        <h3 className="text-2xl font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default StatsCard;