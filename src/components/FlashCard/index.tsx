import { useState } from "react";
import { FlashCard as FlashCardType } from "../../types/FlashCard";
import "./FlashCard.css";

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
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <div className="flashcard-content">{card.question}</div>
                </div>
                <div className="flashcard-back">
                    <div className="flashcard-content">{card.answer}</div>
                </div>
            </div>
        </div>
    );
};

export default FlashCard;
