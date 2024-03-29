import React from "react";
import Image from "next/image";

interface WhyCardProps {
  whyIcon: string;
  whyTitle: string;
  whyDescription: string;
}

const WhyCard: React.FC<WhyCardProps> = ({
  whyIcon,
  whyTitle,
  whyDescription,
}) => {
  const iconUrl = `/icons/${whyIcon}`;

  return (
    <div className="flex h-[16rem] w-full flex-col text-left items-start justify-between rounded-3xl bg-bluegray px-8 py-8">
      <Image src={iconUrl} width="40" height="40" alt={whyTitle} />

      <div>
        <h3 className="text-2xl">{whyTitle}</h3>
        <p>{whyDescription}</p>
      </div>
    </div>
  );
};

export default WhyCard;
