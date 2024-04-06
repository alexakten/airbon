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
              className={`h-2 w-2 rounded-full ${currentPracticeIndex === index ? "bg-zinc-950" : "bg-zinc-200"
                }`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevPractice}
            className="border-full border-zinc-200 hover:bg-zinc-100 size-12 rounded-full border text-xl"
          >
            &lt;-
          </button>
          <button
            onClick={nextPractice}
            className="border-full border-zinc-200 hover:bg-zinc-100 size-12 rounded-full border text-xl"
          >
            -&gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default PracticeCarousel;
