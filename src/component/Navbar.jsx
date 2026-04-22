import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className='bg-black text-gray-400 h-[100px] flex justify-between items-center'>
                <h1 className='text-3xl font-bold primary-color ml-4'>Long Do</h1>
                <ul className='hidden md:flex'>
                    <li className="p-5"><a href="#contact">Contact</a></li>
                    <li className="p-5"><a href="https://github.com/Doquanglong">Github</a></li>
                    <li className="p-5"><a href="https://www.linkedin.com/in/doquanglong/">Linkdin</a></li>
                </ul>

                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                </div>
                <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500': 'fixed left-[-100%]'}>
                <h1 className='text-3xl font-bold primary-color ml-4'>Long Do</h1>
                <ul className='p-8 text-2xl'>
                    <li className="p-2"><a href="#contact">Contact</a></li>
                    <li className="p-2"><a href="https://github.com/Doquanglong">Github</a></li>
                    <li className="p-2"><a href="https://www.linkedin.com/in/doquanglong/">Linkdin</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar