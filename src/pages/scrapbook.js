import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/scrapbook-styles.css";

import useWindowDimensions from "../hooks/ScrapbookHooks"

// Components
import Desk from "../components/Desk"
import Polaroid from "../components/Polaroid";

// Data
import scrapbookData from "../data/scrapbookData";
import audioFile from "../audio/sound_effect_1.mp3";

//import SCRAPBOOK_COVER from
/**
 * Scrapbook page for shirleyli.art
 * 
 * The code below contains declarations for the scrapbook as well as the contents
 * to be rendered within. Scrapbook elements are all rendered "taped" onto the page,
 * and fall into three categories:
 *  1) Polaroid: an image rendered inside a polaroid frame
 *  2) Print: an image with a thin white margin
 *  3) Message: an unframed 'image' of a handwritten message
 * 
 * With the exception of the cover, every page will contain a mix of all 3.
*/

function ScrapbookCover() {
    return (
    <div className="scrapbook-cover">
        <div className="scrapbook-cover-text-container"></div>
    </div>
    );
}

function ScrapbookContentPage(props) {
    const {height, width} = useWindowDimensions();
    /**
     * Calculate whether width of viewport is sufficient to display
     * two pages side-by-side, given an aspect ratio of 4:3 and max
     * utilization of vertical height for pages.
     */
    function isDesktop(height, width) {
        // Divide by aspect ratio
        var minLandscapePageWidth = height / 4 * 3;
        const minPadding = 20;
        return width > (minLandscapePageWidth * 2 + minPadding)
    }

    var imagesPerPage = isDesktop(height, width) ? 4 : 2;
    if (props.pageNumber < Math.floor(scrapbookData.length / imagesPerPage) + 
        (scrapbookData.length % imagesPerPage == 0 ? 0 : 1)) {

        var pageContent = scrapbookData.slice((props.pageNumber - 1) * imagesPerPage, 
                                               Math.min(scrapbookData.length, 
                                                        (props.pageNumber - 1) * imagesPerPage + imagesPerPage));
        return (
            <div className="scrapbook-content-page">
                {pageContent.map((item, index) => {
                    switch (item.type) {
                        case 'polaroid':
                            var rotationDirection = Math.random() < 0.5 ? 1 : -1;
                            return <Polaroid 
                                        key={index} 
                                        image={item.image} 
                                        note={item.note} 
                                        date={item.date}
                                        xOffset={Math.random() * 5} 
                                        yOffset={Math.random() * 5} 
                                        rotationAngle={Math.random() * 2 * rotationDirection}
                            />;
                        case 'message':
                            alert(item.content)
                            return <div>
                                <h3>{item.content}</h3>
                            </div>
                        default:
                            return null;
                    }
                })}
            </div>
        );
    } else {
        return <></>
    }
}

function Scrapbook() {
    const {height, width} = useWindowDimensions();
    const [pageNumber, setPageNumber] = useState(0);

    const scrapbookContentRef = useRef(null);

    useEffect(() => {
        scrapbookContentRef.current.focus();
    }, []);

    useEffect(() => {
        const audio = new Audio(audioFile);
        audio.play();
    }, []);

    /**
     * Calculate whether width of viewport is sufficient to display
     * two pages side-by-side, given an aspect ratio of 4:3 and max
     * utilization of vertical height for pages.
     */
    function isDesktop(height, width) {
        // Divide by aspect ratio
        var minLandscapePageWidth = height / 4 * 3;
        const minPadding = 20;
        return width > (minLandscapePageWidth * 2 + minPadding)
    }

    function flipPageForward() {
        const step = isDesktop(height, width) ? 2 : 1;
        // coincidence: step and images per page are not actually logically
        // related; it's 3 am
        var imagesPerPage = step * 2;
        if (pageNumber == 0)
            setPageNumber(pageNumber + 1)
        else if (pageNumber < Math.floor(scrapbookData.length / imagesPerPage) + 
                (scrapbookData.length % imagesPerPage == 0 ? 0 : 1) - step)
            setPageNumber(pageNumber + step)
    }
    
    function flipPageBackward() {
        const step = isDesktop(height, width) ? 2 : 1;
        // coincidence: step and images per page are not actually logically
        // related; it's 3 am
        var imagesPerPage = step * 2;
        if (pageNumber === 1)
            setPageNumber(0)
        else if (pageNumber > 0)
            setPageNumber(pageNumber - step)
    }

    function handleClick(event) {
        const rect = event.target.getBoundingClientRect();
        const elementWidth = rect.width;
        const clickX = event.clientX - rect.left;

        if (clickX <= elementWidth / 2) {
            flipPageBackward();
        } else {
            flipPageForward();
        }
    } 

    function handleKeyDown(event) {
        if (event.key == "ArrowRight" || event.key == " ") {
            flipPageForward();
        } else if (event.key == "ArrowLeft") {
            flipPageBackward();
        }

    }
    
    if (isDesktop(height, width)) {
        var pages = (        
        <div className="scrapbook-content-container" tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
            {pageNumber === 0 ? <ScrapbookCover/> : <div className="scrapbook-dual-page">
                                                        <ScrapbookContentPage pageNumber={pageNumber}/>
                                                        <ScrapbookContentPage pageNumber={pageNumber+1}/>
                                                    </div>}
        </div> )
    } else {
        var pages = (
        <div className="scrapbook-content-container" ref={scrapbookContentRef} tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
            {pageNumber === 0 ? <ScrapbookCover/> : <ScrapbookContentPage pageNumber={pageNumber}/>}
        </div> )
    }
    return (
        <div className="scrapbook-content-container" ref={scrapbookContentRef} tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
            {pageNumber === 0 ? <ScrapbookCover/> : pages}
        </div> 
    );
}

const ScrapbookPage = () => {
    return (
    <main className="scrapbook-viewer">
        <Desk>
            <Scrapbook/>
        </Desk>
    </main>);
};

export default ScrapbookPage;

export const Head = () => <title>Scrapbook</title>  