// src/pages/allNotes.js

import React, { useState } from "react";
import { Link } from "gatsby";
import Cookies from "js-cookie";
import friendsData from "../data/friendsData";
import "../styles/notes.css";

const AllNotes = () => {
  const [revealedNotes, setRevealedNotes] = useState(() => {
    const savedNotes = Cookies.get("revealedNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const revealNote = (friendName) => {
    const updatedNotes = [...revealedNotes, friendName];
    setRevealedNotes(updatedNotes);
    Cookies.set("revealedNotes", JSON.stringify(updatedNotes), { expires: 7 });
  };

  return (
    <div className="container">
      <main>
        {friendsData.map((friend) => {
          const isRevealed = revealedNotes.includes(friend.name);
          return isRevealed ? (
            <div key={friend.name} className="revealed-note-container">
              <span className="revealed-note-text">{`${friend.name}'s Note`}</span>
              <Link to={`/notes/${friend.name}`} className="revealed-note-link">
                <img src={friend.image} alt={friend.name} className="profile-pic" />
              </Link>
            </div>
          ) : (
            <button key={friend.name} className="mysterious-button" onClick={() => revealNote(friend.name)}>
              ?
            </button>
          );
        })}
      </main>
    </div>
  );
};

export default AllNotes;
