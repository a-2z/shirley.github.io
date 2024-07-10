import React from "react";
import "../styles/scrapbook-styles.css";

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


class Scrapbook extends React.Component {
    numPages = 0
    // constructor(page_number, images, messages) {
        
    // }
    constructor(props) {
        super(props);
        this.state = { numPages: 0 };
        // Bind the handleClick method to the component's context
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        if (this.state.numPages == 0) {
            return (<ScrapbookCover/>)
        }
        else {
            return (<p>numPages</p>)
        }
    }

    handleClick() {
        this.setState((prevState) => ({
            numPages: prevState.numPages + 1
        }));
    }
}

class ScrapbookCover extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numPages: 0 };
    }
    render(){
        return (<div class="scrapbook-cover">'
            <div class="scrapbook-cover-text-container">
            <h2>Scrapbook</h2>
            <h3>Shirley</h3>
            </div>
        </div>)
    }
}


class ScrapbookItem {}
class TapedScrapbookItem extends ScrapbookItem{}
class WrittenScrapbookItem extends ScrapbookItem{}

// Used for headers and titles -- analogous to <h*> tags
class ScrapbookHeader extends WrittenScrapbookItem {}
// Used for small handwritten notes -- analogous to <p> tags
class ScrapbookNote extends WrittenScrapbookItem {}
// Image in a polaroid frame
class ScrapbookPolaroid extends TapedScrapbookItem {}
// Image with a small white border padding
class ScrapbookPrint extends TapedScrapbookItem {}
// Unframed image (handwriting)
class ScrapbookMessage extends TapedScrapbookItem {}

class Desk extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="scrapbook-desktop">
                {this.props.children}
            </div>
        );
    }
}

const ScrapbookPage = () => {
    return (
    <main class="scrapbook-viewer">
        <Desk>
            <Scrapbook/>
        </Desk>
    </main>);
}

export default ScrapbookPage

export const Head = () => <title>Scrapbook</title>  