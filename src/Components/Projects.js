import React from "react";
import "../scss/Project.scss";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import JumpingSign from "./JumpingSign";

export default function Project() {
    const SplitText = window.SplitText;
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(SplitText)
    let project = React.useRef(null);

    React.useEffect(() => {

        let ctx = gsap.context(() => {
            const split1 = new SplitText(".firstRow", { type: "words, chars" });
            const split2 = new SplitText(".secondRow", { type: "words, chars" });
            // const containerWidth = document.querySelector(".centerArea").offsetWidth;
            // const textWidth = document.querySelector(".centerText").offsetWidth;
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
            // const centerTextTl = gsap.timeline({ repeat: -1 });



            // centerTextTl.to(".centerText", {
            //     duration: 1,
            //     x: (containerWidth - textWidth) / 2
            // }).to(".centerText", {
            //     duration: 3,
            //     x: (textWidth - containerWidth) / 2
            // }).to(".centerText", {
            //     duration: 3,
            //     x: 0
            // })


            tl.from(split1.chars, {
                y: -100,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "none"
            }).from(split2.chars, {
                y: -100,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "none"
            })
            // .add(centerTextTl, "+=2");
            // gsap.fromTo(".firstRow",
            //     {

            //         y: -150
            //     },
            //     {
            //         y: 0,
            //         duration: 1,
            //         text: {
            //             value: "Selected"
            //         },
            //         stagger: 0.1
            //     })
        })

        return () => {
            ctx.revert();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="projectContainer panel" ref={project}>

                <div class="grid-container">
                    <div class="left-row">Left 1</div>
                    <div class="left-row">Left 2</div>
                    <div class="left-row">Left 3</div>

                    <div className="centerArea">
                        <div className="centerText">
                            <h1 className="firstRow">Selected</h1>
                            <h1 className="secondRow">Work</h1>
                        </div>

                    </div>

                    <div class="right-row">Right 1</div>
                    <div class="right-row">Right 2</div>
                    <div class="right-row">Right 3</div>
                </div>
                <JumpingSign></JumpingSign>
            </div>


        </>
    )
}