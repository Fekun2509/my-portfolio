import React from "react";
import "../scss/Project.scss";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import JumpingSign from "./JumpingSign";
import { imageData } from "../Documents/ImageData";
import ProjectContent from "./ProjectContent";
import InfinityText from "./IfinityText";

export default function Project() {

    const projectElement = imageData.map((data, i) => {
        if (i <= 5) return <ProjectContent link={data.link} key={i + Math.random() * 1000} id={i} src={data.src} description={data.description} duration={data.duration} skill={data.skill} name={data.name} />
        else return (<></>);
    })

    return (
        <>
            {/* <InfinityText></InfinityText> */}
            <div id="project" className="projectContainer panel" >

                <div class="grid-container">
                    {projectElement && projectElement.map((element, index) => (
                        index < 3 ? <div className="left-row" key={index}>{projectElement[index]}</div> : null
                    ))}

                    <div className="centerArea">
                        <div className="centerText">
                            <p className="firstRow">SELECTED</p>
                            <p className="secondRow">WORKS</p>
                        </div>

                    </div>
                    {projectElement && projectElement.map((element, index) => (
                        index >= 3 && index < 6 ? <div className="right-row" key={index}>{projectElement[index]}</div> : null
                    ))}
                </div>

                <div class="vertical-container">
                    <div className="centerArea">
                        <div className="centerText">
                            <p className="firstRow">SELECTED</p>
                            <p className="secondRow">WORKS</p>
                        </div>

                    </div>
                    {projectElement && projectElement.map((element, index) => (
                        index < 4 ? <div className="projectItem" key={index}>{projectElement[index]}</div> : null
                    ))}

                </div>
                {/* <JumpingSign></JumpingSign> */}
            </div>

        </>
    )
}