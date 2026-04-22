import React from "react";
import heroimae from '../assets/heroimage.jpg'
import resume from '../assets/resume Do Long.pdf'
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 bg-black">
            <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
                <img src={heroimae} alt="heroimage" className="rounded-full w-full h-full object-cover border-4 border-gray-600 shadow-lg" />
            </div>
            <div className="col-span-2 px-5 my-auto">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                    <span className="primary-color">Hi, I'm</span> <br />
                    <TypeAnimation
                        sequence={[
                            'SOC Analyst', 1000,
                            'Pentester', 1000,
                            'Bug Bounty Hunter', 1000,
                            'Web Developer', 1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-white sm:text-lg my-6 lg:text-xl">
                    I am an aspiring cybersecurity analyst passionate about red team operations and offensive security. I enjoy breaking systems to strengthen them, with a focus on vulnerability discovery, penetration testing, SOC analysis, bug bounty hunting, and web development. I thrive on adversary-style thinking and continuously improving my security skills.
                </p>
                <div className="my-8">
                    <a href={resume} download="Resume_Do_Long.pdf" className="px-6 py-3 w-full rounded-xl mr-4
                    bg-gradiant-to-br from-orange-500 to-pink-500 text-white">
                        Download my CV
                    </a>
                    <a href="mailto:doquanglong280504@gmail.com?subject=Contact from Portfolio" className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-tr from-orange-500 to-pink-500 text-white hover:border-none">
                        Contact</a>
                </div>
            </div>
        </div>

    )
}
export default Hero