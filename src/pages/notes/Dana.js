import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/kirby.css";
import msg from "../../images/messages/dana_message.png";
import profile from "../../images/messages/Dana_profile.png";
import Kirby from "../../images/assets/pantsKirb.gif";
import Kirby2 from "../../images/assets/poyo.png"
import DanaText from "../../pages/DanaText";
// hehe hey wassup its dana banana

const Dana = () => {
  return (
    <div className="note-container2">
      <Link to="/allNotes" className="back-button">
        <FaArrowLeft />
      </Link>
      
      <div className="message-content2">
        <img src={msg} alt="message" className="message-image-transparent" />
      </div>
      <div className="content">
        <img src={Kirby} className="small-pic"/>
        <img style={{ marginLeft: "40px", maxWidth: "150px" }} src={Kirby2} />
      </div>
      <div className="content">
        <img src={profile} alt="person" className="small-pic"/>
        <DanaText/>
      </div>
    </div>
  );
};

export default Dana;
