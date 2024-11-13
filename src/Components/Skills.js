import React, { useState } from "react";
import CircularMenu from "./CircularMenu.js";
import "../scss/Skills.scss";
import gsap from "gsap";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../redux/slices/skillSlice";

import SkillUnit from "./SkillUnit.js";
import { SocialIcons } from "./SocialIcons.js";
import Scroll from "./Scroll.js"
import InfinityText from "./IfinityText.js";
import { updatePosition } from "../redux/slices/socialIconSlice.js";



export default function Skills() {
    // const selected = useSelector(state => state.flip.value);
    // const dispatch = useDispatch();
    const type = useSelector(state => state.skill.value);
    const iconPosition = useSelector(state => state.iconPosition.value)
    const dispatch = useDispatch();
    const quantity = 3;
    const sliderStyle = {
        '--quantity': quantity, // Use the custom property
    };

    const skills = [{
        name: "frontEnd",
        color: "#fb4e5f"
    }, {
        name: "backEnd",
        color: "#01e073"
    }, {
        name: "devOps",
        color: "#f7b7f7"
    }
    ]

    const [activeDiv, setActiveDiv] = useState(null);
    const [positionClass, setPositionClass] = useState(null);


    React.useEffect(() => {
        const updatePositionClass = () => {
            if (window.innerWidth < 1024) {
                setPositionClass('center')
            } else {
                setPositionClass('bottom')
            }
        }


        updatePositionClass();
        window.addEventListener('resize', updatePositionClass);

        return () => window.removeEventListener('resize', updatePositionClass);
        // }, [dispatch])

        // React.useEffect(() => {
        //     if (iconPosition) {
        //         setPositionClass(iconPosition);
        //         console.log('Updated positionClass:', iconPosition);
        //     }
    }, []);

    React.useEffect(() => {
        if (type === null || type === "") {
            return
        }
        setActiveDiv(type);

        // console.log(type);

        // dispatch(update());
        // }
        // const flipSelected = (element) => {
        //     if (element === "") {
        //         return;
        //     } else {
        //         gsap.to("." + element, {
        //             duration: 0.6,
        //             rotationY: '+=180', // Flip around the Y axis
        //             ease: "power1.inOut",
        //             transformOrigin: "center", // Pivot point of the flip
        //             // Optional: Toggle class to keep the flipped state
        //             onComplete: () => {
        //                 document.querySelector(".roleTitle").classList.toggle('flipped');
        //             }
        //         })
        //         dispatch(update());

        //     }
        // }

        // const showFlipItem = (item) => {
        //     console.log(item)
        //     // if (item === "square" || item === "circle" || item === "triangle") {
        //     flipSelected(item);
        //     // }
        //     // } else if (item === "circle") {
        //     //     flipSelected(item);
        //     // } else if (item === "triangle") {
        //     //     flipSelected(item);
        //     // }
        // }

        // flipSelected(selected);

    }, [type])

    React.useEffect(() => {
        // This effect will run after 'activeDiv' is updated
        if (!activeDiv) return; // Ensure activeDiv has a value
        gsap.set(".hideItem", { clearProps: "width,height" });
        const skillTl = gsap.timeline();
        skillTl.to(".show", {
            width: "100%",
            height: "1%",
            duration: 1,
        }).to(".show", {
            width: "100%",
            height: "100%",
            duration: 1
        });

    }, [activeDiv]);

    const handleExitClick = () => {
        const slider = document.querySelector(".slider");
        // const computedStyle = window.getComputedStyle(slider);
        // const matrix = computedStyle.transform;

        // // slider.style.animationPlayState = "paused";
        // if (matrix === 'none') {
        //     // If there is no transformation, default the angle
        //     slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(0deg)`;
        // } else {


        //     const currentAngle = calcDegree(matrix)
        //     console.log(currentAngle)
        //     // Stop any ongoing animation
        //     slider.style.animation = "";

        //     // Set the current transform
        //     slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${currentAngle}deg)`;

        // }
        slider.style.animation = "";
        setActiveDiv(null)
        slider.style.animation = `autoRun 10s linear infinite`;
    }

    // function calcDegree(matrix) {
    //     const values = matrix.split('(')[1].split(')')[0].split(',');
    //     const a = parseFloat(values[0]);
    //     const b = parseFloat(values[1]);
    //     let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    //     if (angle < 0) {
    //         angle += 360;
    //     }
    //     return angle
    // }


    return (
        <>
            <div id="skill" className="skillContainer panel">

                <div className="slider" style={sliderStyle}>
                    {skills.map((e, index) => {
                        const position = index + 1;
                        const rotation = (position - 1) * (360 / quantity); // Calculate rotation in JS
                        return (
                            <div
                                key={position}
                                className="item"
                                style={{
                                    '--position': position,
                                    transform: `rotateY(${rotation}deg) translateZ(300px)`, // Apply rotation here
                                }}
                            >
                                <div className="displayItem" style={{ boxShadow: `0 0 15px ${e.color}`, border: `5px double ${e.color}` }} ><h1 style={{ WebkitTextStroke: `2px ${e.color}` }}>{e.name.toUpperCase()}</h1></div>
                                <div className={`hideItem ${activeDiv == e.name ? 'show' : 'hidden'}`} style={{ boxShadow: `0 0 15px ${e.color}`, border: `5px double ${e.color}` }}>
                                    <div className="skillItem ">
                                        <SkillUnit textColor={e.color}></SkillUnit>
                                        <div className="exitButton" onClick={() => handleExitClick()} style={{ boxShadow: `0 0 15px ${e.color}`, border: `5px double ${e.color}`, WebkitTextStroke: `2px ${e.color}` }}>
                                            <p>X</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>
                <div className="content">
                    <div className="skillText">
                        <div className="firstRow">
                            <span><h3>AREA</h3></span>
                            <span><p>OF</p></span>
                        </div>
                        <div className="secondRow"><h1>EXPERTISES</h1></div>
                    </div>
                    <div className="model"></div>
                </div>
                <SocialIcons position={positionClass}></SocialIcons>
                <Scroll status={'hide'}></Scroll>
                <CircularMenu></CircularMenu>
                {/* <InfinityText></InfinityText> */}
            </div >
        </>
    )
}