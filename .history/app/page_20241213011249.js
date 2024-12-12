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
      <div></div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f5f5f5", padding: "20px" }}>
            <h1 style={{ fontFamily: "Arial, sans-serif", marginBottom: "20px" }}>Bollywood Dialogue Guessing Game 🎥</h1>
            <div style={{ maxWidth: "400px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "1.5rem", fontStyle: "italic", color: "#333", marginBottom: "20px" }}>
                    "{currentDialogue.dialogue}"
                </p>
                <input
                    type="text"
                    placeholder="Your guess..."
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    style={{ width: "100%", padding: "10px", fontSize: "1rem", borderRadius: "5px", border: "1px solid #ddd", marginBottom: "10px" }}
                />
                <button
                    onClick={checkGuess}
                    style={{ width: "100%", padding: "10px", fontSize: "1rem", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer", marginBottom: "10px" }}
                >
                    Submit
                </button>
                <button
                    onClick={nextDialogue}
                    style={{ width: "100%", padding: "10px", fontSize: "1rem", borderRadius: "5px", border: "none", backgroundColor: "#28a745", color: "#fff", cursor: "pointer" }}
                >
                    Next
                </button>
                <p style={{ marginTop: "20px", fontWeight: "bold", color: feedback.includes("Correct") ? "green" : "red" }}>
                    {feedback}
                </p>
            </div>
        </div>
    );
}
