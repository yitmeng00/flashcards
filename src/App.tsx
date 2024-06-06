import FlashCardDeck from "./components/FlashCardDeck";

const App: React.FC = () => {
    return (
        <div>
            <h1 className="flashcard-title">Flashcards</h1>
            <FlashCardDeck />
        </div>
    );
};

export default App;
