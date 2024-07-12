import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/individualnotes.css";
import AlanMsg from "../../images/messages/adrian_message.jpg";
import AlanProfile from "../../images/messages/Alan_profile.png";
import SignatureText from "../../pages/SignatureText";

const Alan = () => {
  return (
    <div className="note-container">
      <Link to="/allNotes" className="back-button">
        <FaArrowLeft />
      </Link>
        <img src={AlanProfile} alt="Alan" className="profile-pic" />
      
      <div className="message-content">
        <img src={AlanMsg} alt="Alan's message" className="message-image" />
      </div>
      <SignatureText id="Alan" />
    </div>
  );
};

export default Alan;
