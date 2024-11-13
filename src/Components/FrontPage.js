import React from "react";
import "../scss/FrontPage.scss";
import { TextPlugin } from "gsap/all";
import gsap from "gsap";
import JumpingSign from "./JumpingSign";


export default function FrontPage() {
    gsap.registerPlugin(TextPlugin);

    let hello = React.useRef(null);
    let hello_ = React.useRef(null);
    let role = React.useRef(null);
    let role_ = React.useRef(null);
    let iam = React.useRef(null);
    let uName = React.useRef(null);
    let description = React.useRef(null);

    React.useEffect(() => {

        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            const roleTimepline = gsap.timeline({ repeat: -1 });
            const wordArray = [{
                name: "hello",
                word: "Name: Leo Hoang"
            },
            {
                name: "role",
                word: "Software Engineer"
            },
            {
                name: "role",
                word: "FullStack Developer"
            },
            {
                name: "role",
                word: "Versatile learner"
            }
            ]



            tl.to(hello_, {
                opacity: 1,
                duration: 1,
                repeat: -1,
                ease: "none",
                id: "hello_cur"
            }).to(hello, {
                duration: 2,
                text: {
                    value: wordArray.filter((e) => e.name === "hello")[0].word,
                },
                onComplete: () => {
                    // Kill the first tween after the second tween is complete
                    gsap.delayedCall(2, () => {
                        gsap.getById("hello_cur").kill();
                        hello_.style.opacity = "0";
                    });
                }
            }).to(role_, {
                opacity: 1,
                duration: 1,
                repeat: -1,
                ease: "none",
                delay: 2
            }).to(iam, {
                duration: 1,
                text: {
                    value: "Role: "
                }
            }).add(roleTimepline)
            tl.from(description, {
                x: -150,
                duration: 1,
                opacity: 0,
                ease: "none",
                delay: 2
            })


            const removeTextBackward = (words) => {
                const timeline = gsap.timeline({ paused: true });
                const arrWords = words.split("");
                arrWords.forEach((letter, index) => {

                    var newWord = arrWords.join("").slice(0, -1 - index);
                    timeline.to(role, {
                        duration: 0.1,
                        text: {
                            value: newWord
                        }
                    })
                })
                return timeline.play();
            }



            const roleResult = wordArray.filter(role => role.name === "role");
            console.log(roleResult)
            roleResult.forEach(element => {
                const forwardTween = gsap.to(role, {
                    duration: 2,
                    text: {
                        value: element.word
                    },
                    color: "#4caf50"
                })

                roleTimepline.add(forwardTween)
                const backwardTween = removeTextBackward(element.word)
                roleTimepline.add(backwardTween, "+=2")

            });
        })
        return () => { ctx.revert() }
    }, [])

    return (
        <>
            <div className="frontPageContainer panel">
                <div className="headerContainer">
                    <div className="left-div">
                        <div className="hello">
                            <span ref={el => { hello = el }} style={{ fontSize: "2em", fontWeight: "bold " }}></span>
                            <span ref={el => { hello_ = el }} style={{ fontSize: "2em", fontWeight: "bold", opacity: "0" }}>_</span>
                        </div>
                        <div className="role" style={{ padding: "10px 10px 10px 0px" }}>
                            <span ref={el => { iam = el }} style={{ fontSize: "2.0em", fontWeight: "bold " }}> </span>
                            <span ref={el => { role = el }} style={{ fontSize: "2.0em", fontWeight: "bold " }}></span>
                            <span ref={el => { role_ = el }} style={{ fontSize: "2.0em", fontWeight: "bold", opacity: "0" }}>_</span>
                        </div>
                        {/* <div className="userName" ref={el => { uName = el }}>Leo Hoang</div> */}
                        <div className="description" ref={el => { description = el }}>
                            <p className="description-text">I am a passionate Full Stack Developer with 2.5 years of professional experience crafting dynamic and
                                responsive web solutions. Dedicated to staying at the forefront of technology trends, I combine
                                technical expertise and creative problem-solving to deliver seamless and user-centric experiences.</p>
                        </div>

                        {/* <button>Scroll for more</button> */}
                    </div>

                    <div className="right-div">
                        {/* <image src="../images/RemovedBackground.png" /> */}
                    </div>
                </div>
                <JumpingSign></JumpingSign>
            </div>


        </>
    )
}