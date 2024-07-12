import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/individualnotes.css";
import SheridanMsg from "../../images/messages/sheridan_message_1.jpg";
import SheridanMsg2 from "../../images/messages/sheridan_message_2.jpg";
import SheridanProfile from "../../images/messages/Sheridan_profile.png";
import SheridanText from "../../pages/SheridanText";

const Sheridan = () => {
  return (
    <div className="note-container">
      <Link to="/allNotes" className="back-button">
        <FaArrowLeft />
      </Link>
      
      <div className="message-content">
        <img src={SheridanMsg} alt="message" className="message-image" />
        <img src={SheridanMsg2} alt="message" className="message-image" />
      </div>
      <div className="content">
        <img src={SheridanProfile} alt="person" className="small-pic" />
        <SheridanText />
      </div>
    </div>
  );
};

export default Sheridan;
