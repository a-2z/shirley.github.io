import React from "react";

/**
 * Uninteresting backdrop for the scrapbook
 * @param props 
 * @returns The div with child components
 */
export default function Desk(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}