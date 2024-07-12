import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/individualnotes.css";
import AlanMsg from "../../images/messages/alan_message.png";
import AlanProfile from "../../images/messages/Alan_profile.png";
import SignatureText from "../../pages/SignatureText";

const Alan = () => {
  return (
    <div className="note-container">
      <Link to="/allNotes" className="back-button">
        <FaArrowLeft />
      </Link>
      
      <div className="message-content">
        <img src={AlanMsg} alt="Alan's message" className="message-image-transparent" />
      </div>
      <div className="content">
        <img src={AlanProfile} alt="Alan" className="small-pic" />
        <SignatureText id="Alan" />
      </div>
    </div>
  );
};

export default Alan;
