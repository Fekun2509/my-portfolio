import React from "react";
import "../scss/Education.scss"
import JumpingSign from "./JumpingSign";
import { SocialIcons } from "./SocialIcons";
import Scroll from "./Scroll"
import fpt from "../images/Education/Logo-FU-03.png";
import koi from "../images/Education/Logo_KOI-removebg-preview (1).png"
import InfinityText from "./IfinityText";
// import Contact from "./Contact";

export default function Education() {
    return (
        <>
            {/* <InfinityText></InfinityText> */}
            <div id="education" className="eduContainer panel">
                <div className="education-title"><h1>EDUCATION</h1></div>
                <div className="certificateContainer">
                    <div className="certificate">
                        <div className="content">
                            <img src={fpt}></img>
                            <div className="textWrapper">
                                <h1>FPT University</h1>
                                <h2>Qualification: Bachelor of Information Technology</h2>
                                <h2>Specilisation: Software Engineering</h2>
                            </div>
                        </div>
                    </div>

                    <div className="certificate">
                        <div className="content">
                            <img src={koi}></img>
                            <div className="textWrapper">
                                <h1>KOI University</h1>
                                <h2>Qualification: Master of Information Technology</h2>
                                <h2>Specilisation: Cyber Security</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <JumpingSign></JumpingSign>
                <SocialIcons position='bottom'></SocialIcons>
                <Scroll></Scroll>
                {/* <Contact></Contact> */}

            </div>

        </>
    )
}