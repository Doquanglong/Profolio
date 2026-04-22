import React from "react";
import about from "../assets/about2.png";

const About = () => {
  return (
    <div className="text-white mx-auto bg-black px-6 md:px-16" id="about">
      <div className="md:grid md:grid-cols-2 md:py-16 gap-10 items-center">

        {/* Text Section (unchanged typography) */}
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold mb-4 primary-color">
            About Me
          </h2>

          <p className="text-base lg:text-lg">
            I am a Computer Science and Mathematics student at Dickinson College (Class of 2026) with a strong passion for cybersecurity, particularly offensive security and red team operations. I enjoy understanding systems by breaking them, with a focus on vulnerability discovery, penetration testing, and adversary-style thinking.
          </p>

          <br />

          <p className="text-base lg:text-lg">
            I have gained hands-on experience through multiple internships in both software development and cybersecurity. At NGS Digital, I worked on internal web applications and Salesforce-integrated workflows. At ELCOM, I developed front-end components and conducted security testing across web applications, collaborating with developers to validate and help remediate vulnerabilities. During my internship at NCS (National Cyber Security), I performed penetration testing on web applications using the OWASP Top 10 methodology, identified real-world vulnerabilities such as IDOR and authentication flaws, and helped lead small team-based attack simulations.
          </p>

          <br />

          <p className="text-base lg:text-lg">
            Outside of internships, I build security-focused projects such as a Python-based reconnaissance automation tool and write technical blog posts covering CTFs, web vulnerabilities, and penetration testing techniques.
          </p>

          <br />

          <p className="text-base lg:text-lg">
            I work primarily with tools such as Burp Suite, Nmap, Wireshark, Nessus, and Splunk, and I’m continuously expanding my skills in both offensive security and secure software development.
          </p>
        </div>

        {/* Image Section (bigger + cleaner alignment) */}
        <div className="flex justify-center md:justify-end">
          <img
            className="rounded-3xl md:py-8 mt-4 md:mt-0 shadow-lg"
            src={about}
            alt="about"
            width={420}
            height={420}
          />
        </div>

      </div>
    </div>
  );
};

export default About;