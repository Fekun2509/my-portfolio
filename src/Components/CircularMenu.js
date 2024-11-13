import React, { useEffect } from "react";
import "../scss/CircularMenu.scss"
import gsap from "gsap";
import { useSelector, useDispatch } from 'react-redux';
import { skillTypeSlice, typeSelected } from "../redux/slices/skillSlice";

export default function CircularMenu() {

    // const [isHovered, setIsHovered] = React.useState(false);
    // const selected = useSelector(state => state.flip.value);
    const dispatch = useDispatch();

    const payload = ["frontEnd", "backEnd", "devOps"]

    const handleMouseEnter = (element) => {
        // setIsHovered(true);
        gsap.to(element, {
            scale: 1.1,
            duration: 0.2,
            ease: "power4.out"
        })

    }
    const handleMouseLeave = (element) => {
        // setIsHovered(false);
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

        // const slider = document.querySelector(".slider");
        // const computedStyle = window.getComputedStyle(slider);
        // const matrix = computedStyle.transform;
        // if (matrix === 'none') {
        //     // If there is no transformation, default the angle
        //     slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(0deg)`;
        // } else {


        //     const currentAngle = calcDegree(matrix)
        //     // Stop any ongoing animation
        //     slider.style.animation = "none";

        //     // Set the current transform
        //     slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${currentAngle}deg)`;

        //     slider.style.animation = `autoRun 10s linear infinite`;
        // }
    }

    const handleMouseClickDisplay = (element) => {
        const type = element.classList[1];

        payload.forEach(p => {
            if (p == type) {
                dispatch(typeSelected(p));
            }
            return;
        });

        handleRotatingAnimation(type);

        // const skillTl = gsap.timeline();
        // skillTl.to(".show", {
        //     width: "100%",
        //     height: "100%",
        //     duration: 1
        // }, "+=1")

    }

    const handleRotatingAnimation = (position) => {

        const slider = document.querySelector(".slider");
        const computedStyle = window.getComputedStyle(slider);
        const matrix = computedStyle.transform;

        // slider.style.animationPlayState = "paused";
        if (matrix === 'none') {
            // If there is no transformation, default the angle
            slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(0deg)`;
        } else {


            const currentAngle = calcDegree(matrix)
            console.log(currentAngle)
            // Stop any ongoing animation
            slider.style.animation = "";

            // Set the current transform
            slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${currentAngle}deg)`;

        }

        slider.style.animation = `reverseRun${position} 1s linear forwards`;
    }

    function calcDegree(matrix) {
        const values = matrix.split('(')[1].split(')')[0].split(',');
        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);
        let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        if (angle < 0) {
            angle += 360;
        }
        return angle
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
                    <div className="menuItem devOps" onClick={(e) => handleMouseClickDisplay(e.currentTarget)} onMouseEnter={(e) => handleMouseEnter(e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}>
                        <img className="squareButton" src={require("../images/square color (1).png")}></img>
                    </div>
                    <div className="menuItem backEnd" onClick={(e) => handleMouseClickDisplay(e.currentTarget)} onMouseEnter={(e) => handleMouseEnter(e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}>
                        <img className="triangleButton" src={require("../images/triangle color.png")}></img>
                    </div>
                    <div className="menuItem frontEnd" onClick={(e) => handleMouseClickDisplay(e.currentTarget)} onMouseEnter={(e) => handleMouseEnter(e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}>
                        <img className="circleButton" src={require("../images/circle color.png")}></img>
                    </div>
                </div>
                <div className="toggleMenu" onMouseEnter={(e) => handleMouseEnter(e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(e.currentTarget)} onClick={handleMouseClickToggle}>

                </div>
            </div>
        </>
    )

}