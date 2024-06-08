import Hero from "./components/Hero";
import Hr from "./components/Hr";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Quality from "./components/Quality";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ImageContent from "./components/ImageContent";
import Library from "./components/Library";

export default function App() {
  return <>
  <div className="">
    <Navbar/>
    <Hr/>
    <Hero/>
    <Image/>
    <Quality/>
    <Hr/>
    <ImageContent/>
    <Hr/>
    <Library/>
    <Contact/>
    <Footer/>
    </div>
  </>
  
}