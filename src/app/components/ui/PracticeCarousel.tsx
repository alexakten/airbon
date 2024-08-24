"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./PracticeCard"; // Adjust the import path as necessary
import PracticeData from "@/app/PracticeData";

const PracticeCarousel: React.FC = () => {
  const [currentPracticeIndex, setCurrentPracticeIndex] = useState(0);

  // Preload the first three practice images on component mount
  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      const image = new Image();
      image.src = PracticeData[i].practiceImage;
    }
  }, []);

  // Preload next two images when the current practice changes
  useEffect(() => {
    const nextIndex1 = (currentPracticeIndex + 1) % PracticeData.length;
    const nextIndex2 = (currentPracticeIndex + 2) % PracticeData.length;

    const image1 = new Image();
    image1.src = PracticeData[nextIndex1].practiceImage;

    const image2 = new Image();
    image2.src = PracticeData[nextIndex2].practiceImage;
  }, [currentPracticeIndex]);

  const nextPractice = () => {
    setCurrentPracticeIndex(
      (prevIndex) => (prevIndex + 1) % PracticeData.length,
    );
  };

  const prevPractice = () => {
    setCurrentPracticeIndex(
      (prevIndex) =>
        (prevIndex - 1 + PracticeData.length) % PracticeData.length,
    );
  };

  const { practiceName, practiceDescription, practiceImage, slug } =
    PracticeData[currentPracticeIndex];

  return (
    <>
      <ProjectCard
        title={practiceName}
        subTitle="Our projects"
        description={practiceDescription}
        buttonText="Go regenerative"
        buttonLink={`/practices/${slug}`} // Using the slug for the button link
        tagIcon="path/to/your/icon.jpg" // You can update this based on your data or remove if not needed
        tagText={"Regenerative practices"} // Provide a default text or remove if not applicable
        imageUrl={practiceImage}
        imageAlt={practiceName}
      />
      <div className="flex w-full items-center justify-between  px-2">
        <div className="flex gap-2">
          {PracticeData.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentPracticeIndex === index ? "bg-zinc-950" : "bg-zinc-200"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevPractice}
            className="border-full flex size-12 items-center justify-center rounded-full border border-zinc-200 text-xl hover:bg-zinc-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            onClick={nextPractice}
            className="border-full flex size-12 items-center justify-center rounded-full border border-zinc-200 text-xl hover:bg-zinc-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default PracticeCarousel;
