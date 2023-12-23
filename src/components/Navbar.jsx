import React from "react";
import { BurguerSocialButtons } from "./SocialButtons";
export function Navbar() {
 
 const navbarState = ScrollDirection()

  return (
  <nav className={`fixed z-50 transition-all  duration-500  navbar  md:px-10 bg-primary flex justify-between ${navbarState}`}>
    <div>
        <Logo></Logo>
        <span className="text-white">Rafael Cabral</span>
    </div>
    <div className="hidden md:flex gap-6">
        <a className="under-hover" href="#home">Home</a>
        <a className="under-hover" href="#technologies">Tecnologias</a>
      <a className="under-hover" href="#projects">Projetos</a>
        <a className="under-hover" href="#contact">Contatos</a>
    </div>
    <BurguerMobile></BurguerMobile>

  </nav>
  )
}


function Logo() {
  return(
    <div>
      <svg className="w-[40px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       
       
   
          <path d="M11 16L13 8" stroke="#00C49A" strokeWidth="2" strokeLinecap="round"></path>
          <path d="M17 15L19.6961 12.3039V12.3039C19.8639 12.1361 19.8639 11.8639 19.6961 11.6961V11.6961L17 9" stroke="#00C49A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M7 9L4.32151 11.6785V11.6785C4.14394 11.8561 4.14394 12.1439 4.32151 12.3215V12.3215L7 15" stroke="#00C49A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
  );
}
function BurguerMobile() {
  return (
    <div className="dropdown z-50  px-4 dropdown-end md:hidden">
    <label tabIndex={0} className="">
      <BurguerSvg></BurguerSvg>
    </label>
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-primary rounded-box w-52 border-[1px] border-accent ">
    <li> <a className="under-hover " href="#home">Home</a></li>
        <li> <a className="under-hover" href="#projects">Projetos</a></li>
        <li> <a className="under-hover" href="#technologies">Tecnologias</a></li>
        <li> <a className="under-hover" href="#contact">Contatos</a></li>
        <div className="divisor m-auto border-b-[1px] border-accent w-[80%] opacity-25 "></div>
        <div className="m-auto my-4">

        <BurguerSocialButtons></BurguerSocialButtons>
        </div>
  </ul>
    </div>
  )
}
function BurguerSvg() {
  return (
    <svg width="32px" height="32px" viewBox="0 -6 20 20" id="meteor-icon-kit__regular-grip-lines" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M1 8C0.44772 8 0 7.5523 0 7C0 6.4477 0.44772 6 1 6H19C19.5523 6 20 6.4477 20 7C20 7.5523 19.5523 8 19 8H1zM1 2C0.44772 2 0 1.55228 0 1C0 0.44772 0.44772 0 1 0H19C19.5523 0 20 0.44772 20 1C20 1.55228 19.5523 2 19 2H1z" fill="#ffffff"></path></g></svg>
  )
}
function ScrollDirection() {
  const [scrollDir, setScrollDir] = React.useState("top-0");

   React.useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "-top-96" : "top-0");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
  return scrollDir
}
