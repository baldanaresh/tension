

const Footer=()=>{
    return<>
    <div className=" bg-blue-800 min-w-full h-96  ">
        <div className=" flex items-center flex-col mt-24">
        <div className="mt-20">
            <img  className=" bg-blue-800 p-2" src={'Screenshot 2024-06-07 145134.png'} alt="Logo" width={200} ></img>
        </div>
        <div className="mt-8">
            <ul className="flex  text-slate-200 text-lg font-semibold" >
                <li className="m-3  hover:text-blue-400 ">Home</li>
                <li className="m-3  hover:text-blue-400 ">About us</li>
                <li className="m-3  hover:text-blue-400 ">Learning Science</li>
                <li className="m-3  hover:text-blue-400 ">Learning Vedic Maths</li>
                <li className="m-3  hover:text-blue-400 ">Learning Bespoke</li>
            </ul>
        </div>
        </div>
        <div className="mx-16">
        <hr className="my-12 h-0.5 border-t-0 bg-blue-300 dark:bg-white/10"></hr>
        </div>
        <div className="flex justify-between mx-20">
            <div className="flex text-slate-400 m-3">2023 copyright by the Credenza | Developed by <p className="underline ml-2 text-sky-500 hover:text-xl hover:text-green-700">ValueThroughts</p></div>
            <div>
                <ul className="flex justify-between " >
                    <li className="m-3 text-slate-300 hover:text-blue-400">Privacy Policy</li>
                    <li className="m-3 text-slate-300 hover:text-blue-400">Terms</li>
                    <li className="m-3 text-slate-300 hover:text-blue-400">Cookies</li>
                </ul>
            </div>
        </div>
        
    </div>
    </>
}
export default Footer;