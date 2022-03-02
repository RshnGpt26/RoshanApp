import React from "react";

import web from './images/aboutImage.png';

import Common from "./Common";


const About = () => {
    return (
        <>
            <Common name='Welcome to About Page' imgSrc={web} visit="/contact" btnName="Contact Now" />
        </>
    )
}

export default About;