import logo from '../images/logo.png';
import React, { useEffect, useState } from 'react';

function Header() {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 822 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

    return (
        <div className="">
            <div className="hidden header xl:h-[51px] l:h-[51px] md:h-[65px] w-full bg-header items-center justify-center px-4">
        <p className="text-white l:text-[14px] xl:text-[14px] md:text-[12px] text-montesserat items-center text-center">
          Residential and Commercial Glass installation for the Twin Cities, St Paul, Minneapolis, and surrounding suburbs Anoka, Ramsey, and Hennepin Counties.
        </p>
      </div>
    <div className="h-[263px] second w-full bg-lightBlue justify-center">
      <div className="h-full w-full striped-background flex flex-row flex2 items-center logo2-div">
        <div className="flex w-full items-center justify-center">
          <img
            src={logo}
            className="h-[14VW] w-auto ml-[40px] logo2"
            alt="Logo"
          />
          </div>
      <div className="flex flex-col items-center text-center justify-center contactNow">
        <p className="text-estimate text-2xl text-center items-center">FREE ESTIMATES</p>
        <button className="h-[60px] w-[200px] md:h-[75px] md:w-[240px] rounded-[3px] mt-4 md:mt-[15px] bg-bottom hover:bg-bh cursor-pointer">
          <a href="https://trustworthyglass.com/contact/" className="flex flex-col">
            <p className="text-white text-lg md:text-[21px]">CONTACT US NOW</p>
            <p className="text-white mt-[-3px] text-base md:text-[18px]">651-633-6290</p>
          </a>
        </button>
        <p className="text-gray-500 w-[400px] text-sm md:text-[16px] mt-4 md:mt-[20px]">4640 Chatsworth St. N, Shoreview, MN 55126</p>
      </div>
    </div>
  </div>
  <div className="med-large payNow w-full bg-bottom border-b border-black flex flex-row items-start text-start justify-start">
  <button className="h-[38px] min-w-[90px] payButton ml-[10%] mr-auto justify-center items-center xl:ml-[10%] mt-[22px] outline outline-black outline-[1px] text-[16px] cursor-pointer text-black bg-pay rounded-[3px] hover:bg-bottom hover:text-white">
    <a href="https://trustworthyglass.com/pay-online/">Pay Now</a>
  </button>
  <button className="nav-buttons bg-bottom hover:bg-navHover min-w-[190px] w-[200px] h-[53px] text-[17px] mt-[12px] ml-[10%] text-white cursor-pointer showEn">
    <a href="https://trustworthyglass.com/shower-enclosures/">Shower Enclosures</a>
  </button>
  <button className="nav-buttons bg-bottom hover:bg-navHover min-w-[115px] h-[53px] text-[17px] ml-[2px] mt-[12px] text-white cursor-pointer res">
    <a href="https://trustworthyglass.com/residential/">Residential</a>
  </button>
  <button className="nav-buttons bg-bottom hover:bg-navHover min-w-[126px] h-[53px] text-[17px] ml-[2px] mt-[12px] text-white cursor-pointer Com">
    <a href="https://trustworthyglass.com/commercial/">Commercial</a>
  </button>
  <div className="relative group nav-bar">
    <button
      className="bg-bottom hover:bg-navHover w-[80px] h-[53px] text-[17px] cursor-pointer mt-[11px] text-white nav-buttons Gal"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <a href="https://trustworthyglass.com/gallery/">Gallery</a>
    </button>
    <div
      className={`absolute ${isDropdownOpen ? '' : 'hidden'} bg-bottom shadow-lg w-[215px] left-[50%] bottom-[-217px] transform -translate-x-1/2 z-20`}
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <a href="https://trustworthyglass.com/gallery/residential-glass-gallery/" className="block w-full h-[53px] text-white hover:bg-navHover">
        <div className="flex flex-col">
          <p className="ml-[10px] mt-[4px]">Residential Glass</p>
          <p className="ml-[10px] mt-[-3px]">Gallery</p>
        </div>
      </a>
      <a href="https://trustworthyglass.com/gallery/commercial-gallery/" className="block h-[41px] text-white hover:bg-navHover">
        <p className="ml-[10px] pt-[9px]">Commercial Gallery</p>
      </a>
      <a href="https://trustworthyglass.com/gallery/shower-door-gallery/" className="block w-full h-[41px] text-white hover:bg-navHover">
        <p className="ml-[10px] pt-[9px]">Shower Door Gallery</p>
      </a>
      <a href="https://trustworthyglass.com/gallery/miscellaneous-gallery/" className="block w-full h-[41px] text-white hover:bg-navHover">
        <p className="ml-[10px] pt-[9px]">Miscellaneous Gallery</p>
      </a>
      <a href="https://trustworthyglass.com/gallery/patterned-glass-gallery/" className="block w-full h-[41px] text-white hover:bg-navHover">
        <p className="ml-[10px] pt-[9px]">Patterned Glass Gallery</p>
      </a>
    </div>
  </div>
        <div className="flex flex-row">
          <button className="nav-buttons bg-bottom hover:bg-navHover w-[168px] h-[53px] mt-[11px] text-[17px] ml-[2px] text-white text-center justify-center cursor-pointer venPar">
            <a href="https://trustworthyglass.com/vendors-partners/">Vendors/Partners</a>
          </button>
          <button className="nav-buttons bg-bottom hover:bg-navHover min-w-[210px] h-[53px] text-[17px] mt-[11px] text-white text-center justify-center cursor-pointer techDoc techDoc2">
            <a href="https://trustworthyglass.com/technical-documents/">Technical Documents</a>
          </button>
        </div>
        <div className="menu-icon flex flex-col hover:bg-nav items-center justify-center h-full w-full">
        <svg fill="white" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
             className="cursor-pointer hover:bg-navHover menuIcon"
             onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <title>bars</title>
          <path d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
        </svg>
        {isMenuOpen && (
          <div className=" mt-[24.5vh] w-full menu-open bg-bottom flex flex-col items-center justify-center">
            <button className="bg-bottom hover:bg-navHover w-full mt-[15vh] h-[53px] text-[17px] text-white cursor-pointer">
              <a href="https://trustworthyglass.com/shower-enclosures/">Shower Enclosures</a>
            </button>
            <button className="bg-bottom hover:bg-navHover w-full h-[53px] text-[17px] text-white cursor-pointer">
              <a href="https://trustworthyglass.com/residential/">Residential</a>
            </button>
            <button className="bg-bottom hover:bg-navHover w-full h-[53px] text-[17px] text-white cursor-pointer">
              <a href="https://trustworthyglass.com/commercial/">Commercial</a>
            </button>
            <button className="bg-bottom hover:bg-navHover w-full h-[53px] text-[17px] cursor-pointer text-white">
              <a href="https://trustworthyglass.com/gallery/">Gallery</a>
            </button>
            <button className="bg-bottom hover:bg-navHover w-full h-[53px] text-[17px] cursor-pointer text-white"
            onClick={() => setIsMenuOpen(false)}>
              ^
            </button>
          </div>
        )}
      </div>
      </div>
        </div>
    )
}

export default Header;