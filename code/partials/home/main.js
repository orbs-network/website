import React from "react";

const Main = ({
                  globe_image,
                  _relativeURL,
                  _ID,
                  socials,
                  mobile_btn,
                  title,
              }) => {
    const generateUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    };

    return (
        <main className="home">
            <div className="home-flex main-grid flex-start">

                <div className="home-flex-left flex-column">
                    <section/>
                    <div className="home-flex-left-text"> {title}</div>
                    {mobile_btn}
                    {socials}
                </div>

                <div id="globeArea"
                     style={{'left': '0', 'top': 0, 'position': 'fixed'}}>


                </div>

                <div id="guardianDetails" style={{'display': 'none', 'position': 'absolute', 'right': '10vw', 'bottom': '30vh', 'width': '20vw'}}></div>


            </div>
        </main>
    );
};

export default Main;
