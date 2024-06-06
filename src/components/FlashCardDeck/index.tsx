import { useState, useEffect } from "react";
import FlashCard from "../FlashCard";
import { cardsData } from "../../data/cards-data.ts";
import { FlashCard as FlashCardType } from "../../types/FlashCard.ts";

const FlashCardDeck: React.FC = () => {
    const [cards, setCards] = useState<FlashCardType[]>([]);

    useEffect(() => {
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        let shuffledCards = [...cardsData];
        // for (let i = shuffledCards.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     [shuffledCards[i], shuffledCards[j]] = [
        //         shuffledCards[j],
        //         shuffledCards[i],
        //     ];
        // }
        shuffledCards.sort(() => Math.random() - 0.5);
        const newDisplayedCards = shuffledCards.slice(0, 5);
        setCards(newDisplayedCards);
    };

    return (
        <div className="flashcard-container">
            <div className="flashcard-deck">
                {cards.map((card) => (
                    <FlashCard key={card.id} card={card} />
                ))}
            </div>
            <button onClick={shuffleCards}>Shuffle</button>
        </div>
    );
};

export default FlashCardDeck;
