// src/pages/notes.js
// NOTE THAT THIS PAGE WOULD BE USED TO CREATE DYNAMIC PAGES BUT DOESNT WORK YET

import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import friendsData from "../data/friendsData";
import "../styles/notes.css";

const NotesPage = ({ data }) => {
  const { friendName } = data.sitePage.context;
  const friend = friendsData.find((friend) => friend.name === friendName);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

  if (!friend) {
    return <div>Friend not found</div>;
  }

  const handleNextNote = () => {
    setCurrentNoteIndex((prevIndex) => (prevIndex < friend.notes.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrevNote = () => {
    setCurrentNoteIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : friend.notes.length - 1));
  };

  return (
    <main className="notes-container">
      <div className="image-container">
        <img src={friend.notes[currentNoteIndex]} alt={`Handwritten note ${currentNoteIndex + 1}`} />
      </div>
      <div className="buttons-container">
        <button onClick={handlePrevNote}>Previous</button>
        <button onClick={handleNextNote}>Next</button>
      </div>
    </main>
  );
};

export default NotesPage;
