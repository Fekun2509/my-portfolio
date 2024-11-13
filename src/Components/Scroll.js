import React from "react";
import "../scss/Scroll.scss"
import arrow from "../images/arrow.png"
import gsap from "gsap";

export default function Scroll({ status }) {
    console.log("className", status)
    React.useEffect(() => {
        let ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            mm.add("(max-width: 600px)", () => {
                let tl = gsap.timeline();
                tl.to(".arrowIcon", {
                    y: 10,
                    duration: 2,
                    repeat: -1,
                    ease: "power1.inOut"
                })
            })

            mm.add("(min-width: 601px)", () => {
                let tl = gsap.timeline();
                tl.to(".arrowIcon", {
                    x: 10,
                    duration: 2,
                    repeat: -1,
                    ease: "power1.inOut"
                })
            })

        })
        return () => { ctx.revert() }
    })


    return (
        <>
            <div className={`scrollContainer ${status}`}>
                <span>
                    <p>SCROLL FOR MORE</p>
                </span>
                <span>
                    <div className="scrollIcon">
                        <div className="arrowIcon"></div>
                    </div>
                </span>
            </div>
        </>
    )
}