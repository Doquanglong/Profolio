import javascript from '../assets/javascript.png'
import burpsuite from '../assets/burpsuite.jpg'
import html from '../assets/html.png'
import metasploit from '../assets/metasploit.png'
import react from '../assets/react.png'
import kali from '../assets/kali.png'

const Skills = () => {
    return (
        <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] grid grid-cols-6
        places-items-center md:flex md:justify-between md:items-center'>
            <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
                My <br/>Tech <br/> Stack
            </h2>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={html} alt="HTML logo" className="w-full h-auto object-contain"/>
                <p className='mt-2'>HTML</p>    
            </div>

             <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={javascript} alt="JavaScript logo" className="w-full h-auto object-contain"/>
                <p className='mt-2'>JavaScript</p>    
            </div>

             <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={burpsuite} alt="Burp Suite logo" className="w-full h-auto object-contain"/>
                <p className='mt-2'>Burp Suite</p>    
            </div>

             <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={metasploit} alt="Metasploit logo" className="w-full h-auto object-contain"/>
                <p className='mt-2'>Metasploit</p>    
            </div>

             <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={react} alt="React logo" className="w-full h-auto object-contain"/>
                <p className='mt-2'>React</p>    
            </div>

             <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={kali} alt="Kali Linux logo" className="w-full h-auto object-contain"/>
                <p className='mt-2'>Kali Linux</p>    
            </div>
            </div >
    )
}
export default Skills