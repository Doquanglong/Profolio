import React from "react";
import blog from '../assets/blog.jpg'
import weather from '../assets/weather.jpg'
import top10 from '../assets/top10.webp'
import color from '../assets/color.png'
import profolio from '../assets/profolio.png'
import recon from '../assets/recon.png'

const Work = () => {
    return (
        <div className="mx-auto p-5 bg-black" id="work ">
            <div className="pb-8">
                <p className="text-4xl mb-3 font-bold primary-color">Work</p>
                <p className="text-lg text-gray-400">Check out some of my past work</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">


                <div className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg
            shadow-lg shadow-gray-600 group container flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={top10} alt="top10" className="w-full h-full object-cover" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className="text-2xl font-bold text-white tracking-wider">OWASP TOP 10</span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/stars/Doquanglong/lists/owasp-top-10">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Github</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg
            shadow-lg shadow-gray-600 group container flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={blog} alt="blog" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className="text-2xl font-bold text-white tracking-wider">Personal Blog</span>
                        <div className="pt-8 text-center">
                            <a href="https://medium.com/@doquanglong280504">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Medium</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg
            shadow-lg shadow-gray-600 group container flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={recon} alt="recon" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className="text-2xl font-bold text-white tracking-wider">Recon Shell Script</span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/Doquanglong/Recon-Shell-Script">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Github</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg
            shadow-lg shadow-gray-600 group container flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={profolio} alt="project1" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className="text-2xl font-bold text-white tracking-wider">Profolio</span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/Doquanglong">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Github</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg
            shadow-lg shadow-gray-600 group container flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={weather} alt="weather" className="w-full h-full object-cover" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className="text-2xl font-bold text-white tracking-wider">Weather App</span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/Doquanglong/Weather-App">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Github</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg
            shadow-lg shadow-gray-600 group container flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={color} alt="color" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className="text-2xl font-bold text-white tracking-wider">Random Color Generator</span>
                        <div className="pt-8 text-center">
                            <a href="https://doquanglong.github.io/React-Random-Color-Generator/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Web</button>
                            </a>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Work