import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/individualnotes.css";
import msg from "../../images/messages/bouke_message.png";
import profile from "../../images/messages/Bouke_profile.png";

const Bouke = () => {
  return (
    <div className="note-container">
      <Link to="/allNotes" className="back-button">
        <FaArrowLeft />
      </Link>
      
      <div className="message-content">
        <img src={msg} alt="message" className="message-image-transparent" />
      </div>
      <div className="content">
        <img src={profile} alt="person" />
      </div>
    </div>
  );
};

export default Bouke;
