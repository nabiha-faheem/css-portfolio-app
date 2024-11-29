import Image from "next/image";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "@/app/about/page";
import Contact from "./contact/page";
import Skills from "./skill/page";

export default function Home() {
  return (
   <div>

    
     <Hero/>


     <About/>

     <Contact/>
     <Skills/>
   </div>
  );
}
