import React from "react";
import "../scss/SocialIcons.scss";
import { useEffect, useState } from "react";
import { transform } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';

export function SocialIcons({ position }) {
    // console.log('positionClass in MyComponent:', position);
    // const position = useSelector()

    // const [positionClass, setPositionClass] = useState(position);

    // useEffect(() => {
    //     const updatePositionClass = () => {
    //         if (window.innerWidth < 600) {
    //             setPositionClass('bottom')
    //         } else {
    //             setPositionClass('center')
    //         }
    //     };

    //     updatePositionClass();

    //     window.addEventListener('resize', updatePositionClass);

    //     return () => window.removeEventListener('resize', updatePositionClass);
    // }, []);


    return (
        <>
            <div className={`content-center ${position}`}>
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook fa-2x"></i></a></li>
                    <li><a href="https://www.x.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-2x"></i></a></li>

                </ul>
            </div>
        </>
    )
}