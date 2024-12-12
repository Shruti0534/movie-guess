'use client'

import { useState } from "react";
import dialogues from "../lib/data";
import Scoreboard from "../components/Scoreboard";
import GameCard from "../components/GameCard";

export default function Game() {
    const [currentDialogue, setCurrentDialogue] = useState(
        dialogues[Math.floor(Math.random() * dialogues.length)]
    );
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState("");
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [stars, setStars] = useState(0);

    const checkGuess = () => {
        if (guess.toLowerCase() === currentDialogue.movie.toLowerCase()) {
            setFeedback("Correct! 🎉");
            setScore(score + 10);

            // Increment level and add a star for every correct answer
            if ((score + 10) % 30 === 0) {
                setLevel(level + 1);
                setStars(stars + 1);
            }
        } else {
            setFeedback("Wrong! Try again! ❌");
        }
    };

    const nextDialogue = () => {
        setCurrentDialogue(
            dialogues[Math.floor(Math.random() * dialogues.length)]
        );
        setGuess("");
        setFeedback("");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-blue-200">
            <Scoreboard level={level} score={score} stars={stars} />
            <GameCard
                dialogue={currentDialogue.dialogue}
                guess={guess}
                setGuess={setGuess}
                checkGuess={checkGuess}
                nextDialogue={nextDialogue}
                feedback={feedback}
            />
        </div>
    );
}
