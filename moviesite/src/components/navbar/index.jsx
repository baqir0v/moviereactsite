import React, { useState } from 'react';
import "./navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faVimeoV, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    const [isNavbarOpen, setisNavbarOpen] = useState(true)
    const [isSideBarOpen, setisSideBarOpen] = useState(false)
    const [accordionIndex, setAccordionIndex] = useState(null);

    function handleNavbar() {
        setisNavbarOpen(!isNavbarOpen)
    }

    function handleSideBar(index) {
        setisSideBarOpen(!isSideBarOpen)
        setAccordionIndex(index);
    }

    return (
        <header>
            <nav id='navbar'>
                <div className='navbox'>
                    <div id='navbaropen' onClick={handleNavbar}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                    </div>
                    <div className='navimg'>
                        <img id='colimg' src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-width-20px.png" alt="" />
                        <img id='rowimg' src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-main-light-height14px.png" alt="" />
                    </div>
                    <div className='socialicons'>
                        <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
                        <FontAwesomeIcon icon={faYoutube} style={{ color: 'white' }} />
                        <FontAwesomeIcon icon={faVimeoV} style={{ color: 'white' }} />
                        <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
                    </div>
                </div>
            </nav>
            <nav className={`${isNavbarOpen ? "dnone" : "sidebar"}`}>

                <div className="sidebox">
                    <ul>
                        <li onClick={() => handleSideBar(1)}>Home
                            <ul className={`${accordionIndex === 1 && isSideBarOpen ? "uls" : "dnone"}`}>
                                <li>Main Home</li>
                                <li>Film Festival</li>
                                <li>Horizontal Scroll Showcase</li>
                                <li>Vertical Split Showcase</li>
                            </ul>
                        </li>
                        <li onClick={() => handleSideBar(2)}>Pages
                            <ul className={`${accordionIndex === 2 && isSideBarOpen ? "uls" : "dnone"}`}>
                                <li>About Us</li>
                                <li>Our Team</li>
                                <li>Contact Us</li>
                            </ul>
                        </li>
                        <li onClick={() => handleSideBar(3)}>Portfolio
                            <ul className={`${accordionIndex === 3 && isSideBarOpen ? "uls" : "dnone"}`}>
                                <li>Fullscreen Slider</li>
                                <li>Fullscreen Slider</li>
                                <li>Slider</li>
                            </ul>
                        </li>
                        <li onClick={() => handleSideBar(4)}>Blog
                            <ul className={`${accordionIndex === 4 && isSideBarOpen ? "uls" : "dnone"}`}>
                                <li>Right Sidebar List</li>
                                <li>Without Sidebar List</li>
                            </ul>
                        </li>
                        <li onClick={() => handleSideBar(5)}>Shop
                            <ul className={`${accordionIndex === 5 && isSideBarOpen ? "uls" : "dnone"}`}>
                                <li>Product List</li>
                                <li>Product Single</li>
                            </ul>
                        </li>
                        <li>Landing</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
