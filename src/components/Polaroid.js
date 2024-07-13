import "../styles/scrapbook-styles.css";
import React from "react";

export default function Polaroid(props) {
    return (
        <div 
            className="scrapbook-polaroid-border" 
            style={{transform: `rotate(${props.rotationAngle}deg)`, position: "relative", left:`${props.xOffset}px`, top: `${props.yOffset}px`}}>
            <div className="scrapbook-polaroid-image-container">
                <img src={props.image} alt={props.image} className="scrapbook-polaroid-image"/>
            </div>
            <div className="scrapbook-note-style">{props.note}</div>
            <div className="scrapbook-note-date-style">{props.date}</div>
        </div>
    )
};