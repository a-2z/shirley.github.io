// Import necessary libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import adrian from "../images/polaroids/adrian_office.jpg";
import "../styles/notes.css";

// Functional component for the main page
const AllNotes = () => {
  // State to track which notes are revealed
  const [revealedNotes, setRevealedNotes] = useState(() => {
    const savedNotes = Cookies.get("revealedNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Function to reveal a note and update cookies
  const revealNote = (note) => {
    const updatedNotes = [...revealedNotes, note];
    setRevealedNotes(updatedNotes);
    Cookies.set("revealedNotes", JSON.stringify(updatedNotes), { expires: 7 }); // Cookie expires in 7 days
  };

  // Check if Sheridan's note is revealed
  const sheridanRevealed = revealedNotes.includes("Sheridan");

  return (
    <div className="container">
      <main>
        {sheridanRevealed ? (
          <a href="/notes" className="revealed-note-link">
            <img src={adrian} alt="Sheridan" className="profile-pic" />
            <span>Sheridan's Note</span>
          </a>
        ) : (
          <button className="mysterious-button" onClick={() => revealNote("Sheridan")}>
            ?
          </button>
        )}
      </main>
    </div>
  );
};

// Export the component as default
export default AllNotes;
