import { useState } from 'react';
const Navbar=()=>{
    const [isOpen, setIsOpen] = useState(false);
    return<>
    <div className=" flex  flex-wrap justify-between items-center m-10">
        <div>
            <img src={'Screenshot 2024-06-07 145134.png'} alt="Logo" width={200} ></img>
        </div>
        <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-blue-800 focus:outline-none ">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row lg:ml-auto text-blue-800 text-lg font-semibold">
                <li className="m-3 hover:text-sky-600 cursor-pointer">Home</li>
                <li className="m-3 hover:text-sky-600 cursor-pointer">About us</li>
                <li className="m-3 hover:text-sky-600 cursor-pointer">Learning Science</li>
                <li className="m-3 hover:text-sky-600 cursor-pointer">Learning Vedic Maths</li>
                <li className="m-3 hover:text-sky-600 cursor-pointer">Learning Bespoke</li>
            </ul>
        </div>
        <div>
        <button className="bg-blue-800 px-4 py-2 text-white hover:bg-sky-600 hover:text-black sm:px-8 sm:py-3 rounded-lg ">Contact Us</button>
        </div>
    </div>
    
    </>
}
 export default Navbar;