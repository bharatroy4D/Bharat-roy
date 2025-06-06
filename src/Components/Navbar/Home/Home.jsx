import React from "react";
import Hero from "../Hero/Hero";
import Qualification from "../Qualification/Qualification";
import About from "../About/About";
import Skills from "../Skill/Skill";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div className="bg-base-200 overflow-hidden">
        <Hero/>
        <Qualification/>
        {/* <About/> */}
        {/* <Skills/> */}
        <Projects/>
        {/* <Contact/> */}
        </div>
    );
};

export default Home;
