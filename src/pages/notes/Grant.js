import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/individualnotes.css";
// replace
import msg from "../../images/messages/adrian_message.jpg";
import profile from "../../images/messages/Grant_profile.png";
import GrantText from "../../pages/GrantText";

const Grant = () => {
  return (
    <div className="note-container">
      <Link to="/allNotes" className="back-button">
        <FaArrowLeft />
      </Link>
      
      <div className="message-content">
        <img src={msg} alt="Alan's message" className="message-image" />
      </div>
      <div className="content">
        <img src={profile} alt="Alan" className="small-pic" />
        <GrantText  />
      </div>
    </div>
  );
};

export default Grant;
