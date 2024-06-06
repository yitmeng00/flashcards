import { useState } from "react";
import { FlashCard as FlashCardType } from "../../types/FlashCard";

interface FlashCardProps {
    card: FlashCardType;
}

const FlashCard: React.FC<FlashCardProps> = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`flashcard ${isFlipped ? "flipped" : ""}`}
            onClick={handleFlip}
        >
            <div className="flashcard-content">
                {isFlipped ? card.answer : card.question}
            </div>
        </div>
    );
};

export default FlashCard;
