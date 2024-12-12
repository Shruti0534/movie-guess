'use client'

import { useState } from "react";
import dialogues from "../lib/data";

export default function Game() {
    const [currentDialogue, setCurrentDialogue] = useState(
        dialogues[Math.floor(Math.random() * dialogues.length)]
    );
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState("");

    const checkGuess = () => {
        if (guess.toLowerCase() === currentDialogue.movie.toLowerCase()) {
            setFeedback("Correct! 🎉");
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-blue-200">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-blue-800 text-center mb-4">
                    Bollywood Dialogue Guessing Game 🎥
                </h2>

                <div className="p-4 bg-blue-50 rounded-md mb-6">
                    <p className="text-lg italic font-medium text-gray-800 text-center">
                        "{currentDialogue.dialogue}"
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Guess the movie..."
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    onClick={checkGuess}
                    className="w-full px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Submit
                </button>

                <button
                    onClick={nextDialogue}
                    className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
                >
                    Next Dialogue
                </button>

                {feedback && (
                    <div
                        className={`mt-4 text-center font-semibold text-lg ${
                            feedback.includes("Correct")
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    >
                        {feedback}
                    </div>
                )}
            </div>
        </div>
    );
}
