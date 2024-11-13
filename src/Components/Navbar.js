import React from "react";
import "../scss/Navbar.scss"
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import signature from "../images/signature.png"

export default function Navbar() {
    // gsap.registerPlugin(ScrollToPlugin);
    const navItems = document.querySelectorAll(".navItem");
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove "active" class from all items
            navItems.forEach(i => i.classList.remove('active'));
            // Add "active" class to the clicked item
            item.classList.add('active');
        });
    });
    const handleOnClick = (value) => {
        // const container = document.querySelector(".mainContainer");

        // // console.log("1", window.scrollX)
        // if (container && page) {
        //     const elementPosition = page.getBoundingClientRect().left + window.scrollX;; // Get the position of the element
        //     console.log(elementPosition)
        window.scrollTo(0, value)
        // }


    }

    window.addEventListener("scroll", () => {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        // console.log(`Scroll position - X: ${scrollX}, Y: ${scrollY}`);
    });

    const handleResponsiveNavBar = () => {
        var x = document.querySelector(".verticalNav");
        if (x.className === "verticalNav") {
            x.className += " open";
        } else {
            x.className = "verticalNav"
        }
    }

    const scrollToElement = (number) => {

        const pages = document.querySelectorAll(".panel");
        pages.forEach((e, index) => {
            if (e && index === number) {
                e.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        })
    }

    const downloadFile = () => {
        window.location.href = "https://drive.google.com/uc?export=download&id=1H6fqresJlqruaiVLFD8rlqkWOrLd6b--";
        console.log(1);
    }
    return (
        <>
            <div className="navBar" >
                <div className="toggleButton fa fa-bars" onClick={() => handleResponsiveNavBar()}></div>
                <nav className="horizonNav">
                    <ul>
                        {/* <li className="icon navItem" onClick={() => { handleResponsiveNavBar() }}><i className="fa fa-bars"></i></li> */}
                        <li className="navItem" style={{ pointerEvents: 'none' }}><img src={signature} style={{ width: '100%', height: '100%' }}></img></li>
                        <li className="navItem" onClick={() => { handleOnClick("875") }}>Project</li>
                        <li className="navItem" onClick={() => { handleOnClick("1750") }}>About Me</li>
                        <li className="navItem" onClick={() => { handleOnClick("2625") }}>Education</li>
                        <li className="navItem" onClick={() => { handleOnClick("3500") }}>Contact</li>
                        <li className="navItem" onClick={() => { downloadFile() }}>Resume</li>
                    </ul>
                </nav>
                <nav className="verticalNav">
                    <ul>

                        <li className="navItem" onClick={() => scrollToElement(1)}>Project</li>
                        <li className="navItem" onClick={() => scrollToElement(2)}>About Me</li>
                        <li className="navItem" onClick={() => scrollToElement(3)}>Education</li>
                        <li className="navItem" onClick={() => scrollToElement(4)}>Contact</li>
                        <li className="navItem" onClick={() => { downloadFile() }}>Resume</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}