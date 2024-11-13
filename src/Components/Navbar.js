import React from "react";
import "../scss/Navbar.scss"

export default function Navbar() {
    return (
        <>
            <div className="navBar">
                <nav>
                    <ul>
                        <li>Signature</li>
                        <li>Project</li>
                        <li>About Me</li>
                        <li>Education</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}