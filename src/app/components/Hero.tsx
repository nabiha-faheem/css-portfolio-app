






















import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroContent">
        <h1 className="heroTitle">Hello, I&apos;m <br />Nabiya Faheem</h1>
        <p className="heroSubtitle">A passionate web developer, building amazing experiences.</p>
        <a href="#projects" className="heroButton">See My Work</a>
      </div>
      <div className="heroImage">
        <Image 
          src="/photo-1529626455594-4ff0802cfb7e.avif" 
          alt="Nabiya Faheem" 
          height={250} 
          width={250} 
          objectFit="cover" 
          className="heroImg"
        />
      </div>
    </div>
  );
};

export default Hero;
