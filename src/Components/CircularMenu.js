import React, { useEffect } from "react";
import "../scss/CircularMenu.scss"
import gsap from "gsap";

export default function CircularMenu() {

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = (element) => {
        setIsHovered(true);
        gsap.to(element, {
            scale: 1.1,
            duration: 0.2,
            ease: "power4.out"
        })

    }
    const handleMouseLeave = (element) => {
        setIsHovered(false);
        gsap.to(element, {
            scale: 1,
            duration: 0.2,
            ease: "power4.in"
        })
    }


    const handleMouseClickToggle = () => {
        let menuTl = gsap.timeline();
        console.log("Clicked");
        menuTl.to(".toggleMenu", {
            opacity: 0,
            scale: 0,
            y: 150,
            duration: 1,
            ease: "power3.in",

        }).to(".radialMenu", {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });

    }

    const handleMouseClickExit = () => {
        let menuTl = gsap.timeline();
        console.log("Clicked");
        menuTl.to(".radialMenu", {
            opacity: 0,
            scale: 0,
            y: 150,
            duration: 1,
            ease: "power3.in"
        }).to(".toggleMenu", {
            y: -75,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });

    }

    React.useEffect(() => {

    }, [])

    return (
        <>

            <div className="radialContainer">
                <div className="radialMenu">
                    <div className="rootButton" onClick={handleMouseClickExit} onMouseEnter={(e) => handleMouseEnter(e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(e.currentTarget)} >
                        <img className="crossButton" src={require("../images/corss color.png")}></img>
                    </div>
                    <div className="menuItem" onMouseEnter={(e) => handleMouseEnter(e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}>
                        <img className="squareButton" src={require("../images/square color (1).png")}></img>
                    </div>
                    <div className="menuItem" onMouseEnter={(e) => handleMouseEnter(e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}>
                        <img className="triangleButton" src={require("../images/triangle color.png")}></img>
                    </div>
                    <div className="menuItem" onMouseEnter={(e) => handleMouseEnter(e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}>
                        <img className="circleButton" src={require("../images/circle color.png")}></img>
                    </div>
                </div>
                <div className="toggleMenu" onMouseEnter={(e) => handleMouseEnter(e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(e.currentTarget)} onClick={handleMouseClickToggle}>

                </div>
            </div>
        </>
    )

}