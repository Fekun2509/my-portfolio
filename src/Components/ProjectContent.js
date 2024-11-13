import React from "react";
import "../scss/ProjectContent.scss";
import { useDispatch } from "react-redux";
// import { useAnimation, useInView } from "framer-motion";
import { setIsClick, addToProjectDisplay } from "../redux/slices/projectSlice";

export default function ProjectContent(props) {
    const dispatch = useDispatch();
    const currIMG = 0;

    const handleClick = () => {
        const data = {
            description: props.description,
            skill: props.skill,
            name: props.name,
            duration: props.duration,
            src: props.src,
            id: props.id,
            link: props.link
        }
        dispatch(addToProjectDisplay(data));
        dispatch(setIsClick(true))

    }
    return (
        <>
            <div className="projectDetail" onClick={handleClick}>
                <div className="projectTitle">{props.name}</div>
                <div className="coverImage" style={{ backgroundImage: `url(${props.src[currIMG]})`, backgroundPosition: "center" }}></div>
                <div className="projectContent">
                    <p style={{ fontSize: "1.5rem", width: "75%" }}><span style={{ fontWeight: "bold", textDecoration: "underline" }}>Skills:</span> {props.skill}</p>
                </div>
            </div>
        </>
    )
}