import React from "react";
import CircularMenu from "./CircularMenu";
import "../scss/Skills.scss";
import gsap from "gsap";


export default function Skills() {

    const handleMouseEnter = (element) => {
        console.log("11")
        gsap.to(element, {
            duration: 0.6,
            rotationY: '+=180', // Flip around the Y axis
            ease: "power1.inOut",
            transformOrigin: "center", // Pivot point of the flip
            // Optional: Toggle class to keep the flipped state
            onComplete: () => {
                document.querySelector(".roleTitle").classList.toggle('flipped');
            }
        })

    }


    return (
        <>
            <div className="skillContainer panel">
                <div className="roleSelector">
                    <div className="roleTitle" onClick={(e) => handleMouseEnter(e.currentTarget)} >
                        <div className="frontSide">
                            <div className="roleSign" >
                                <img className="circleSign" src={require("../images/circle color.png")}></img>
                            </div>
                        </div>

                        <div className="backSide"></div>

                    </div>
                    <div className="roleTitle" onClick={(e) => handleMouseEnter(e.currentTarget)}>
                        <div className="frontSide">
                            <div className="roleSign">
                                <img className="squareSign" src={require("../images/square color (1).png")}></img>
                            </div>

                        </div>
                        <div className="backSide"></div>
                    </div>
                    <div className="roleTitle" onClick={(e) => handleMouseEnter(e.currentTarget)}>
                        <div className="frontSide">
                            <div className="roleSign">
                                <img className="triangleSign" src={require("../images/triangle color.png")}></img>
                            </div>

                        </div>
                        <div className="backSide"></div>
                    </div>
                </div>


                <CircularMenu></CircularMenu>
            </div>
        </>
    )
}