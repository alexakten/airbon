import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  serviceIcon: string;
  serviceTitle: string;
  serviceDescription: string;
  serviceButtonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceIcon,
  serviceTitle,
  serviceDescription,
  serviceButtonText,
}) => {
  const iconUrl = `/icons/${serviceIcon}`;

  return (
    <div className="flex h-[28rem] w-full flex-col items-center justify-between rounded-3xl bg-bluegray px-8 py-10">
      <Image src={iconUrl} width="140" height="140" alt={serviceTitle} />

      <div>
        <h3 className="text-2xl">{serviceTitle}</h3>
        <p>{serviceDescription}</p>
      </div>

      <button className="rounded-xl border border-darkgreen w-full py-3 hover:bg-darkgreen hover:text-bluegray">
        {serviceButtonText}
      </button>
    </div>
  );
};

export default ServiceCard;
