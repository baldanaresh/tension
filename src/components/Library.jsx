const Library=()=>{
    const images = [
        { src: 'Designer.png', alt: 'protista family img', heading: 'Protista Family' },
        { src: 'atomicstruct.jpg', alt: 'atomic structure img', heading: 'Atomic Structure' },
        { src: 'earthcore.png', alt: 'Earth core img', heading: 'Earth Core' },
        { src: 'pollination.jpg', alt: 'pollination img', heading: 'Pollination' },
    ];
return<>
<div className="flex flex-col m-10">
<div className="flex justify-around">
    <div className="text-white">
       <i className="fab fa-angular fa-3x"></i>
    </div>
    <div className=" flex flex-col items-center">
        <button className="bg-cyan-100 text-cyan-500 p-3 px-10 rounded-3xl">L I B R A R Y</button>
        <div className="m-4 text-5xl font-bold  text-blue-800">Our Sample Catalouge</div>
        <div className=" text-cyan-500 text-2xl font-medium">Where Learning Unfold like a story !</div>
    </div>
    <div className="text-white">
      <i className="fab fa-angular fa-3x"></i>
    </div>
   </div>
   <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 m-5 sm:m-10 text-center p-5">
            {images.map((image, index) => (
                <div key={index} className="relative w-72 h-96 transition duration-300 transform hover:scale-105">
                    <img className="w-full h-full object-cover rounded-lg" src={image.src} alt={image.alt} />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-slate-800 p-4 rounded-b-lg text-left">
                        <h3 className="text-white text-lg font-bold">{image.heading}</h3>
                        <a href="#" className="text-cyan-200 hover:text-cyan-100">Learn More</a>
                    </div>
                </div>
            ))}
        </div>
</div>
</>
}

export default Library;
// grid grid-cols-4 gap-3 m-10 text-center p-5 before responsive

