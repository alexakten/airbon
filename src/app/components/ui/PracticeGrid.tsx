import PracticeCard from "./PracticeCard";
import PracticeData from "../../PracticeData"; // Ensure this is the correct path to your practice data

interface PracticeGridProps {
  cards: number;
  currentPracticeID?: string; // This prop is optional
}

const PracticeGrid: React.FC<PracticeGridProps> = ({
  cards,
  currentPracticeID,
}) => {
  const practicesToShow = PracticeData.filter(
    (practice) => !currentPracticeID || practice.practiceID !== currentPracticeID,
  );

  return (
    <div
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
      {practicesToShow.slice(0, cards).map((practice, index) => (
        // Assuming you pass necessary practice data to PracticeCard
        <PracticeCard key={practice.practiceID} practice={practice} />
      ))}
    </div>
  );
};

export default PracticeGrid;
