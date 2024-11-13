import React from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import FrontPage from './Components/FrontPage';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from './Components/Projects';
import Skills from './Components/Skills';
import Education from './Components/Education';




function App() {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    let ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".mainContainer",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=3500",
        }
      });
    })
    return () => ctx.revert()

  }, [])

  return (
    <>
      <div className="mainContainer">
        <Navbar></Navbar>
        <FrontPage></FrontPage>
        <Project></Project>
        <Skills></Skills>
        <Education></Education>
      </div>
    </>


  );
}

export default App;
