const Contact=()=>{
    return <>
    <div className="flex flex-col md:flex-row justify-around bg-slate-200 min-w-full md:h-72 items-center md:-mb-32 p-5 md:p-0">
        <div className="text-5xl font-semibold  leading-none tracking-tight text-blue-800 ">Connect with us to unviel a new 
            <br></br>
            world of learning.</div>
        <div>
        <input  className='rounded  px-16 mr-3 py-4 mb-2 text-sm font-medium text-gray-700  border border-gray-300  focus:border-blue-500' type="email" placeholder="Enter your email"></input>
        <button className="bg-blue-800 px-4 py-2 text-white  sm:px-8 sm:py-3  hover:bg-sky-600 hover:text-black rounded-lg">Let's Talk</button>
        </div>
    </div>
    </>
}
export default Contact;
// flex justify-around bg-slate-200 min-w-full h-72 items-center -mb-32 before responsive