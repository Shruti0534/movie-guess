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
      
        <div>
          
        </div>
    );
}
