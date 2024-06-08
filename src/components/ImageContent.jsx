 
const ImageContent = () => {
    return (
        <div className="flex flex-col m-15 ">
            <div className="grid grid-cols-3 m-10 bg-blue-700">
                <div className="col-span-2 relative overflow-hidden">
                    <img src={'Butterfly.png'} alt="butterfly img" className="w-full h-auto  transition-transform duration-500 transform hover:scale-110" />
                </div>
                <div className="m-8">
                    <div className="text-4xl text-white font-bold mb-10">Learning Science</div>
                    <p className="text-slate-300 text-lg">Our approach involves delving into every science concept, 
                        meticulously crafting audio visual presentations that bring the subject matter to life. We 
                        are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners
                        grasp the essence of each concept effortlessly. 
                    </p>
                    <div className="flex">
                        <div className="text-slate-300 font-semibold mt-10 mr-4 text-lg hover:text-black hover:text-xl cursor-pointer">Read more</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 m-10 bg-blue-700">
                <div className="mt-20 mr-10 col-span-1 ml-10  ">
                    <div className="text-4xl text-white font-bold mb-10">Vedic Math</div>
                    <div className="text-slate-300 font-normal text-lg">Our approach involves delving into every science 
                        concept, meticulously crafting audio visual presentations that bring the subject matter to life. We 
                        are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners 
                        grasp the essence of each concept effortlessly. 
                    </div>
                    <div className="flex">
                        <div className="text-slate-300 font-semibold mt-10 mr-4 text-lg hover:text-black hover:text-xl cursor-pointer">Read more</div>
                        {/* <div className="text-slate-300 font-semibold mt-10 mr-4 text-lg">arrow</div> */}
                    </div>
                </div>
                <div className="col-span-2 relative overflow-hidden">
                    <img src={'book.png'} alt="book img" className="w-full h-auto transition-transform duration-500 transform hover:scale-110" />
                </div>
            </div>
            <div className="grid grid-cols-3 m-10 bg-blue-700">
                <div className="col-span-2 relative overflow-hidden">
                    <img src={'childwithpc.png'} alt="child with pc img" className="w-full h-auto transition-transform duration-500 transform hover:scale-110" />
                </div>
                <div className="m-8">
                    <div className="text-4xl text-white font-bold mb-10">Bespoke</div>
                    <div className="text-slate-300 font-normal text-lg">Tailored Learning Solutions - Your Vision, Our Creation. Where your unique educational vision takes
                        center stage. At Credenza, we understand that one size doesn't fit all in the world of
                        education. That's why we specialize in crafting custom learning materials that align perfectly with your requirements. 
                    </div>
                    <div className="flex">
                        <div className="text-slate-300 font-semibold mt-10 mr-4 text-lg hover:text-black hover:text-xl cursor-pointer">Read more</div>
                        {/* <div className="text-slate-300 font-semibold mt-10 mr-4 text-lg">arrow</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ImageContent;


