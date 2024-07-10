import React, { useState } from "react";
import "../styles/notes.css";
import sheridanNote1 from "../images/messages/sheridan_message_1.jpg"; // Import your image files
import sheridanNote2 from "../images/messages/sheridan_message_2.jpg"; // Example: Import other note images

const NotesPage = () => {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  
  // Define an array of note images
  const noteImages = [
    sheridanNote1,
    sheridanNote2,
    // Add more images here as needed
  ];

  const handleNextNote = () => {
    setCurrentNoteIndex((prevIndex) => (prevIndex < noteImages.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrevNote = () => {
    setCurrentNoteIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : noteImages.length - 1));
  };

  return (
    <main className="notes-container">
      <div className="image-container">
        <img src={noteImages[currentNoteIndex]} alt={`Handwritten note ${currentNoteIndex + 1}`} />
      </div>
      <div className="buttons-container">
        <button onClick={handlePrevNote}>Previous</button>
        <button onClick={handleNextNote}>Next</button>
      </div>
    </main>
  );
};

export default NotesPage;

export const Head = () => <title>Notes</title>;
