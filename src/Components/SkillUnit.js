import React from "react";
import "../scss/SkillUnit.scss"
import { skills } from "../Documents/SkillData.js"
import { useSelector, useDispatch } from "react-redux";


export default function SkillUnit(textColor) {
    const type = useSelector((state) => state.skill.value);
    const dispatch = useDispatch();

    React.useEffect(() => {
    }, [])

    return (
        <>
            {skills && type && skills.map((e, index) => {
                if (type == e.type) {
                    return (
                        <>
                            <div className="skillUnit" key={index}>
                                <div className="skillTitle" style={{ WebkitTextStroke: `1px ${textColor.textColor}` }}><span><img src={e.image} /></span>{e.name}</div>
                                <div className="profiencyBar">
                                    <div className="profiency" style={{ width: `${e.proficiency}%` }}></div>
                                </div>
                            </div>
                        </>
                    )
                } else {
                    return
                }
            })}


        </>
    )
}