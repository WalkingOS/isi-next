'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IMenuItem } from "./header";
import { RenderItems } from './TreeMenu';


export const MainNavigation = ({menuItem}: {menuItem: IMenuItem}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [navVisible, setNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollDirection = prevScrollPos > scrollY ? 'up' : 'down';

      // const cta = window.document.querySelector("#ctaButton");
      // cta.offsetTop - cta.clientHeight)
      if ((scrollY > 400)) {
        setNavVisible(false);
      } 
  
      if (scrollDirection === "up") {
        setNavVisible(true);
      }
      
      if ((scrollY < 400)) {
        setNavVisible(true);
      } 
  
      setPrevScrollPos(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav className={`container py-3 bg-isi bg-opacity-50 drop-shadow-md z-[999]  fixed top-0 flex justify-between ease-in w-full duration-300 ${navVisible ? '' : 'opacity-0'}`}>
        <Link className='text-white' href="/">ISI NOOR</Link>
        <button aria-expanded={isOpen} className="relative h-6 w-6" onClick={() => setIsOpen(!isOpen)}>
           {!isOpen ? <MenuRoundedIcon className="text-white ease-in-out duration-300" /> : <CloseRoundedIcon className={` text-white ease-in-out duration-300`}/>}
        </button>
      </nav>
      <div role="dialog" className={`${isOpen ? 'opacity-100 translate-x-0' : 'translate-x-[100vw] md:translate-x-[200%]'} z-[500] right-0 top-0 p-8 pt-[10em] w-full md:w-1/2 h-full fixed overflow-auto bg-isi-light opacity-0 ease-in-out duration-300 bg-opacity-50 backdrop-blur-lg drop-shadow-md`}>
        <RenderItems onLinkClick={() => setIsOpen(false)} menuItem={menuItem}/>
      </div>
      <div onClick={() => setIsOpen(false)} className={` ${isOpen ? 'opacity-100 z-[3]' : 'opacity-0 z-[-99]'} ease-in duration-300 bg-opacity-10 backdrop-blur-sm drop-shadow-md overflow-hidden fixed bg-isi-dark h-[100vh] w-[100vw] top-0 left-0 right-0 bottom-0`}></div>
    </>
  )
}

export default MainNavigation;
