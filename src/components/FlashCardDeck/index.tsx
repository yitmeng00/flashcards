import { useState } from "react";
import FlashCard from "../FlashCard";
import { cardsData } from "../../data/cards-data.ts";
import { FlashCard as FlashCardType } from "../../types/FlashCard.ts";

const FlashCardDeck: React.FC = () => {
    const [cards, setCards] = useState<FlashCardType[]>(cardsData);

    return (
        <div className="flashcard-container">
            <div className="flashcard-deck">
                {cards.map((card) => (
                    <FlashCard key={card.id} card={card} />
                ))}
            </div>
            <button>Shuffle</button>
        </div>
    );
};

export default FlashCardDeck;
