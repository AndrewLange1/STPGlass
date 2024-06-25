import './index.css';
import logo from './images/logo.png';
import React, { useEffect, useState } from 'react';
import image1 from './images/image1 copy.JPG';
import image2 from './images/image2 copy.JPG';
import image3 from './images/image3 copy.JPG';
import image4 from './images/image4 copy.JPG';
import mng from './images/MNG copy.jpg';
import mha from './images/MHA copy.jpg';
import msca from './images/MSCA copy.jpg';
import nga from './images/NGA copy.jpg';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);

function App() {
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
    <div>
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
      <div className={`flex flex-row w-full content-below ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="flex flex-row justify-center h-[687px] w-[42vw] custom-gradient">
          <div className="flex flex-col text-center w-[40vw]">
            <p className="text-white text-[21px] mt-[70px] headquarters">Trustworthy Glass is your MN Glass Headquarters</p>
            <div className="w-full justify-center mx-auto">
              <p className="mt-[130px] text-white headquarters">Trustworthy Glass is family owned and operated since</p>
              <p className="mt-[25px] text-white headquarters">2008. We are proud to be a part of the Shoreview</p>
              <p className="mt-[25px] text-white headquarters">area and surrounding communities. We take</p>
              <p className="mt-[25px] text-white headquarters">pride in our customer service and our</p>
              <p className="mt-[25px] text-white headquarters">installer's attention to detail.</p>
              <p className="mt-[25px] text-white headquarters">Give us a call today!</p>
            </div>
          </div>
        </div>
        <div className="h-[687px] w-[58vw] bg-black">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img src={image1} alt="Image 1" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="Image 2" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="Image 3" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="Image 4" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
        <div className="h-[1050px] w-full">
            <div className="text-center items-center justify-center flex flex-col">
              <p className="text-[35px] mt-[34px] text-header">OUR SERVICES</p>
              <p className="text-[20px] mt-[38px] text-gray-500 font-bold">Trustworthy glass is a family owned and operated full-service glass company.</p>
              <p className="text-[15.6px] mt-[15px] text-gray-500">We provide our services in the twin cities and surrounding suburbs. We supply and install all forms of glass products, including:</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="w-full flex items-center justify-center">
                <img 
                  src={image1} 
                  className="
                    h-[500px] w-[350px] max-h-[70vh] mt-[60px] ml-[20px]
                    md:h-[60vh] md:w-auto md:max-h-[300px] md:mt-[12.5vh] md:ml-[10vw]
                    lg:h-[42vw] lg:w-auto lg:max-h-none
                    xl:h-[600px] xl:w-auto"
                >
                </img>
              </div>
              <div className="flex flex-col w-[1000px] ml-[25px] text-[17px] text-start items-start justify-start svgs">
                <div className="flex flex-row items-start justify-start checkmarks">
                  <svg className="mt-[13vh] ml-[1vw]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500 mt-[13vh]">Frameless shower doors</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500">Residential and commercial Glass</p>
                    <p className="ml-[0.25vw] text-gray-500">replacement and install</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500">Commercial storefronts</p>
                    <p className="ml-[0.25vw] text-gray-500">closers, sweeps, thresholds, panics,</p>
                    <p className="ml-[0.25vw] text-gray-500">locks</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500">Mirrors, mirror walls, framed mirrors,</p>
                    <p className="ml-[0.25vw] text-gray-500">bathroom mirrors</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500">Pattern glass, obscure glass, low iron</p>
                    <p className="ml-[0.25vw] text-gray-500">glass, frosted glass</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500">Shelves, tabletops, cabinet, picture</p>
                    <p className="ml-[0.25vw] text-gray-500">frames</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500">Screens and storm windows</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500">Fireplace glass</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500">Mall storefronts</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500">Showcase Glass</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500">Caulking</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500">Reputty Windows</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <img 
                  src={image1} 
                  className="
                    h-[500px] w-[350px] max-h-[70vh] mt-[60px] ml-[20px]
                    md:h-[60vh] md:w-auto md:max-h-[300px] md:mt-[12.5vh] md:ml-[2vw]
                    lg:h-[42vw] lg:w-auto lg:max-h-none
                    xl:h-[600px] xl:w-auto"
                >
                </img>
              </div>
            </div>
        </div>
        <div className="text-center items-center justify-center">
            <p className="text-gray-500 font-bold text-[2.35vh] bottom-content">We also work with business owners and property managers to repair the following:</p>
        </div>
        <div className="mt-[3vh] flex flex-row text-start items-start justify-start text-gray-500 text-[1.9vh]">
            <div className="ml-[15vw]">
              <ul style={{ listStyleType: 'disc', paddingLeft: '0.5vw' }}>
                <li>Continuous hinges</li>
                <li className="mt-[1vh]">Panics and exit devices</li>
                <li className="mt-[1vh]">Fixing leaks</li>
              </ul>
            </div>
            <div className="ml-[10vw]">
              <ul style={{ listStyleType: 'disc', paddingLeft: '0.5vw' }}>
                <li>Closers and crash chains</li>
                <li className="mt-[1vh]">Thresholds and door sweeps</li>
                <li className="mt-[1vh]">
                  Install safety glass when required by
                  <p>code</p>
                  </li>
              </ul>
            </div>
            <div className="ml-[3vw]">
              <ul style={{ listStyleType: 'disc', paddingLeft: '0.5vw' }}>
                <li>Pivots</li>
                <li className="mt-[1vh]">Emergency service and board ups</li>
              </ul>
            </div>
        </div>
        <div className="mt-[12vh] text-center items-center justify-center flex flex-row">
            <p className="text-header text-[3vh]">MEMBER OF:</p>
        </div>
        <div className="mt-[3vh] items-center justify-center flex flex-row">
          <img src={mng} className="h-[10%] w-[10%] mr-[2vw]"></img>
          <img src={msca} className="mr-[2vw]"></img>
          <img src={nga} className="mr-[2vw]"></img>
          <img src={mha} className="mr-[2vw]"></img>
        </div>
        <div className="h-[5.35vh] w-full mt-[5vh] bg-header text-center justify-center">
          <p className="text-white text-[1.65vh] pt-[1.45vh]">© 2019 Trustworthy Glass. All Rights Reserved.</p>
        </div>
      </div>
  );
}

export default App;

