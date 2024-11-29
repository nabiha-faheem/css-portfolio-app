
























import React from 'react';
import Link from 'next/link';
import '../globals.css'; // Make sure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio</h1>
      <ul className="items">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/skill">Skills</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;




























