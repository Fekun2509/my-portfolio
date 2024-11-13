import React from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import FrontPage from './Components/FrontPage';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from './Components/Projects';
import Skills from './Components/Skills';
import Education from './Components/Education';
import ProjectDisplay from './Components/ProjectDisplay';
import Contact from './Components/Contact';
import { useSelector } from 'react-redux';
import InfinityText from './Components/IfinityText';


function App() {
  gsap.registerPlugin(ScrollTrigger);
  const isClicked = useSelector(state => state.project.isClicked);

  React.useEffect(() => {

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      let sections = gsap.utils.toArray(".panel");
      let topText = gsap.utils.toArray(".top-part");
      let bottomText = gsap.utils.toArray(".bottom-part");

      mm.add("(max-width: 600px)", () => {
        topText.forEach((element) => {
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              // snap: 1 / (sections.length - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "bottom top",
              scrub: true,
              // id: "mainScrollTrigger"
              toggleActions: "play none none reset",
            },
            x: -300,
            // duration: 1,
            ease: "none"

          });
        })


        bottomText.forEach((element) => {
          gsap.set(element, { rotate: 180 })

          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              // snap: 1 / (sections.length - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "bottom top",
              scrub: true,
              // id: "mainScrollTrigger"
              toggleActions: "play none none reset",
            },
            x: 300,
            // duration: 1,
            ease: "none"

          });
        })
      })


      mm.add("(min-width: 601px) and (max-width: 768px)", () => {
        topText.forEach((element) => {
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              // snap: 1 / (sections.length - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "bottom top",
              scrub: true,
              // id: "mainScrollTrigger"
              toggleActions: "play none none reset",
            },
            x: -125,
            // duration: 1,
            ease: "none"

          });
        })


        bottomText.forEach((element) => {
          gsap.set(element, { rotate: 180 })

          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              // snap: 1 / (sections.length - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "bottom top",
              scrub: true,
              // id: "mainScrollTrigger"
              toggleActions: "play none none reset",
            },
            x: 125,
            // duration: 1,
            ease: "none"

          });
        })
      })

      mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
        topText.forEach((element) => {
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              // snap: 1 / (sections.length - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "bottom top",
              scrub: true,
              // id: "mainScrollTrigger"
              toggleActions: "play none none reset",
            },
            x: -125,
            // duration: 1,
            ease: "none"

          });
        })


        bottomText.forEach((element) => {
          gsap.set(element, { rotate: 180 })

          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              // snap: 1 / (sections.length - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "bottom top",
              scrub: true,
              // id: "mainScrollTrigger"
              toggleActions: "play none none reset",
            },
            x: 125,
            // duration: 1,
            ease: "none"

          });
        })
      })

      mm.add("(min-width: 1025px)", () => {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".mainContainer",
            pin: true,
            scrub: 1,
            // snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500",
            id: "mainScrollTrigger"
          }
        });
      })

    })
    return () => ctx.revert()

  }, [])

  return (
    <>
      <div className="mainContainer">
        {isClicked && <ProjectDisplay />}
        <Navbar></Navbar>
        <FrontPage></FrontPage>
        <InfinityText></InfinityText>
        <Project></Project>
        <InfinityText></InfinityText>
        <Skills></Skills>
        <InfinityText></InfinityText>
        <Education></Education>
        <InfinityText></InfinityText>
        <Contact></Contact>
        {/* <div class="visme_d" data-title="Client Contact Form" data-url="4d68j0vy-client-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="96479"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script> */}


      </div>
    </>


  );
}

export default App;
