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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
            <h1 className="text-3xl font-bold text-blue-800 mb-8">Bollywood Dialogue Guessing Game 🎥</h1>
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <p className="text-xl italic font-medium text-gray-800 mb-6">
                    "{currentDialogue.dialogue}"
                </p>
                <input
                    type="text"
                    placeholder="Your guess..."
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    className="w-full px-4 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    Next
                </button>
                {feedback && (
                    <p
                        className={`mt-4 font-semibold ${
                            feedback.includes("Correct")
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    >
                        {feedback}
                    </p>
                )}
            </div>
        </div>
    );
}
