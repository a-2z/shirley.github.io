import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/individualnotes.css";
import msg from "../../images/messages/adrian_message.jpg";
import profile from "../../images/messages/Adrian_profile.png";
import AdrianText from "../../pages/AdrianText";


const Adrian = () => {
  return (
    <div className="note-container">
      <Link to="/allNotes" className="back-button">
        <FaArrowLeft />
      </Link>
      
      <div className="message-content">
        <img src={msg} alt="message" className="message-image" />
      </div>
      <div className="content">
        <img src={profile} alt="person" className="small-pic"/>
        <AdrianText id="Alan" />
      </div>
    </div>
  );
};

export default Adrian;
