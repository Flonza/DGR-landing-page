import './NavBar.scss';
import React, { useState, useEffect } from 'react';
import useDetectScroll from '@smakss/react-scroll-direction';

export function NavBar() {
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const { scrollDir } = useDetectScroll();

    useEffect(() => {
        if (scrollDir === 'down') {
            setIsScrollingDown(false);
        } else if (scrollDir === 'up') {
            setIsScrollingDown(true); 
        }
    }, [scrollDir]);

    const classVal = isScrollingDown ? 'devuelta' : 'escondido';

    const [currentHash, setCurrentHash] = useState(window.location.hash);

    useEffect(() => {
      const handleHashChange = () => {
        setCurrentHash(window.location.hash);
      };
  
      window.addEventListener("hashchange", handleHashChange);
  
      return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <>
            <nav className={`min-h-10 nav-menu sticky-menu ${classVal}` }>
                {/* ICONO  */}


                <div className="menuToggle md:hidden block w-full relative z-10">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bar bar--top"></div>
                        <div className="bar bar--middle"></div>
                        <div className="bar bar--bottom"></div>
                    </label>


                    <ul className="menu md:hidden block absolute w-full bg-gray-100 list-none p-4 rounded-lg shadow-lg transform -translate-x-full transition-transform duration-300">
                        <li><a href="#aboutUs" className="block py-2">Quienes somos</a></li>
                        <li><a href="#ourServices" className="block py-2">Nuestros servicios</a></li>
                        <li><a href="#ourJobs" className="block py-2">Trabajos realizados</a></li>
                        <li>
                            <img src='/Company/Logo.webp' alt="Logo" className="w-36 h-auto" />
                        </li>
                    </ul>
                </div>



                <div className="md:flex items-center h-20 justify-around w-full hidden">
                    <div>
                        <img src='/Company/Logo.webp' alt="Logo" className="w-36 h-auto" />
                    </div>
                    <div>
                        <ul className="flex gap-6">
                            <li>
                                <a
                                    href="#aboutUs"
                                    className={currentHash === "#aboutUs" ? "text-white" : ""}
                                >
                                    Quienes somos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#ourServices"
                                    className={currentHash === "#ourServices" ? "text-white" : ""}
                                >
                                    Nuestros servicios
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#ourJobs"
                                    className={currentHash === "#ourJobs" ? "text-white" : ""}
                                >
                                    Trabajos realizados
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}