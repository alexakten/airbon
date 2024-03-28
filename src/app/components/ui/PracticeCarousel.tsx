"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard"; // Adjust the import path as necessary
import PracticeData from "@/app/PracticeData";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const PracticeCarousel: React.FC = () => {
  const [currentPracticeIndex, setCurrentPracticeIndex] = useState(0);

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
        tagText={"Sustainable practices"} // Provide a default text or remove if not applicable
        imageUrl={practiceImage}
        imageAlt={practiceName}
      />
      <div className="mt-8 flex items-center justify-between px-2">
        <div className="flex gap-2">
          {PracticeData.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentPracticeIndex === index ? "bg-darkgreen" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevPractice}
            className={`${inter.className} border-full size-12 rounded-full border border-darkgreen text-xl hover:bg-bluegray`}
          >
            &lt;-
          </button>
          <button
            onClick={nextPractice}
            className={`${inter.className} border-full size-12 rounded-full border border-darkgreen text-xl hover:bg-bluegray`}
          >
            -&gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default PracticeCarousel;
