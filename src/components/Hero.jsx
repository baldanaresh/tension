const Hero=()=>{
    return<>
    <div className="flex flex-col items-center mt-20 sm:px-0">
    <div className="m-4 text-5xl font-bold  leading-none tracking-tight text-blue-800 flex  sm:flex-row justify-center items-center ">The Future Of Learning with <p className="text-sky-400 justify-self-start ml-2 hover:text-blue-200">Credenza</p></div>
    <div className="m-4 font-light text-2xl text-center">Our visual approach fosters critical thinking, creativity,
       <br></br> and a true passion for learning</div>
    <div className="mt-4">
        <input  className='rounded  px-16 py-3 mr-3 mb-2 sm:mb-0 sm:mr-3 text-sm font-medium text-gray-700  border border-gray-300  focus:border-blue-500 ' type="email" placeholder="Enter your email"></input>
        <button className="bg-blue-800 px-6 py-2 text-white hover:bg-sky-600 hover:text-black rounded-lg">Let's Talk</button>
        </div>
    <div className=" flex text-md font-thin mr-14 sm:text-left">
        We care about your data in our <p className="underline ml-3 hover:text-xl hover:text-blue-700">Privacy Policy</p>. 
    </div>
    </div>
    </>
}
export default Hero;