import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/individualnotes.css";
// replace hehe
import msg from "/src/images/messages/andrew_message_1.png";
import msg2 from "/src/images/messages/andrew_message_2.png";
import profile from "/src/images/messages/Andrew_profile.png";
import AndrewText from "/src/pages/AndrewText";


const Andrew = () => {
  return (
    <div className="note-container">
      <Link to="/allNotes" className="back-button">
        <FaArrowLeft />
      </Link>
      
      <div className="message-content">
        <img src={msg} className="message-image-transparent" />
        <img src={msg2} className="message-image-transparent" />
      </div>
      <div className="content">
        <img src={profile} alt="Alan" className="small-pic" />
        <AndrewText />
      </div>
    </div>
  );
};

export default Andrew;
