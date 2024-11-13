import React from "react";
import "../scss/JumpingSign.scss"
import gsap from "gsap";

export default function JumpingSign() {
    const wrapper = React.useRef(null);


    React.useEffect(() => {

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1 });
            const createBoxTimeline = (selector) => {
                return gsap.timeline()
                    .set(selector, { y: 0, rotate: 0 }) // Reset at the start
                    .to(selector, {
                        scale: 1,
                        duration: 1,
                        ease: "bounce"
                    })
                    .to(selector, {
                        rotate: 360,
                        duration: 1,
                        ease: "bounce"
                    })
                    .to(selector, {
                        y: 0,
                        duration: 1,
                        ease: "bounce"
                    });
            };

            tl.add(createBoxTimeline(".box1"))
                .add(createBoxTimeline(".box2"), "-=1")
                .add(createBoxTimeline(".box3"), "-=1")
            // .add(createBoxTimeline(".box4"), "-=1")
            tl.to(".box4", {
                scale: 1,
                duration: 1,
                ease: "bounce"
            }, "-=1")
                .to(".box4", {
                    y: -100,
                    duration: 0.6,
                    rotationY: '+=180', // Flip around the Y axis
                    ease: "power1.inOut",
                    transformOrigin: "center", // Pivot point of the flip
                    // Optional: Toggle class to keep the flipped state
                    onComplete: () => {
                        document.querySelector(".box4").classList.toggle('flipped');
                    }
                })
                .to(".box4", {
                    y: 0,
                    duration: 1,
                    ease: "bounce"
                }).to(".sign", {
                    scale: 0,
                    stagger: 0.2,
                })



        })
        return () => { ctx.revert() };
    }, [])



    return (
        <>
            <div className="signWrapper" ref={wrapper}>
                <div className="sign box1"></div>
                <div className="sign box2"></div>
                <div className="sign box3"></div>
                <div className="sign box4">
                    <div className="front"></div>
                    <div className="back"></div>
                </div>
            </div>
        </>
    )
}