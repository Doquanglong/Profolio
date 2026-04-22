import React from "react";
import about from '../assets/about2.png'

const About = () => {
    return (
        <div className="text-white mx-auto bg-black" id="about">
            <div className="md:grid md:grid-cols-2 md:py-16 gap-8 items-center py-8">
                <div className="mt-4 md:mt-0 text-left flex flex-col">
                    <h2 className="text-4xl font-bold mb-4 primary-color"> About Me</h2>
                    <p className="text-base lg:text-lg">
                        I'm a passionate cybersecurity enthusiast with a strong background in SOC analysis, penetration testing, bug bounty hunting, and web development. I thrive on solving complex security challenges and continuously expanding my knowledge in the ever-evolving field of cybersecurity.
                    </p>
                </div>
                <img className="mx-auto rounded-3xl md:py-8 mt-1" src={about} alt="about" width={300} height={300} />
            </div>
        </div>
    )   
}
export default About    