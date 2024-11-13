import React from "react";
import "../scss/InfinityText.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function InfinityText() {
    gsap.registerPlugin(ScrollTrigger);
    React.useEffect(() => {
        let ctx = gsap.context(() => {
            // let mm = gsap.matchMedia();

            // mm.add("(max-width: 600px)", () => {
            //     // gsap.set("scrolling-text", { x: -1000 })
            //     gsap.to(".top-part", {
            //         scrollTrigger: {
            //             trigger: ".top-part",
            //             start: "top bottom",
            //             // snap: 1 / (sections.length - 1),
            //             // base vertical scrolling on how wide the container is so it feels more natural.
            //             end: "bottom top",
            //             scrub: true,
            //             // id: "mainScrollTrigger"
            //             markers: true,
            //             toggleActions: "play none none reset",
            //         },
            //         x: -300,
            //         // duration: 1,
            //         ease: "none"

            //     });

            //     gsap.set(".bottom-part", { rotate: 180 })

            //     gsap.to(".bottom-part", {
            //         scrollTrigger: {
            //             trigger: ".bottom-part",
            //             start: "top bottom",
            //             // snap: 1 / (sections.length - 1),
            //             // base vertical scrolling on how wide the container is so it feels more natural.
            //             end: "bottom top",
            //             scrub: true,
            //             // id: "mainScrollTrigger"
            //             toggleActions: "play none none reset",
            //         },
            //         x: 300,
            //         // duration: 1,
            //         ease: "none"

            //     });
            // })

            // // mm.add("(min-width: 601px)", () => {
            // //     gsap.to(sections, {
            // //         xPercent: -100 * (sections.length - 1),
            // //         ease: "none",
            // //         scrollTrigger: {
            // //             trigger: ".mainContainer",
            // //             pin: true,
            // //             scrub: 1,
            // //             // snap: 1 / (sections.length - 1),
            // //             // base vertical scrolling on how wide the container is so it feels more natural.
            // //             end: "+=3500",
            // //             id: "mainScrollTrigger"
            // //         }
            // //     });
            // // })

        })
        return () => ctx.revert()

    }, [])
    return (
        <>
            <div class="scroll-container">
                <div class="scrolling-text">
                    <div className="top-part">
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>

                    </div>
                    <div className="bottom-part">
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>
                        <span className="white-text">LEOHOANG</span>
                        <span className="color-text">2024PORTFOLIO</span>
                    </div>
                </div>
            </div>
        </>
    )
}