import React from 'react'
import "./footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faVimeoV, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footerbox">
                <div className="footetop">
                    <div className="topleft">
                        <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png" alt="" />
                    </div>
                    <div className="topright">
                        <ul>
                            <li><a href="">WHAT WE DO</a></li>
                            <li><a href="">ABOUT US</a></li>
                            <li><a href="">HELP AND FAQ</a></li>
                        </ul>
                        <ul>
                            <li><a href="">WHAT WE DO</a></li>
                            <li><a href="">ABOUT US</a></li>
                            <li><a href="">HELP AND FAQ</a></li>
                        </ul>
                        <ul>
                            <li><a href="">WHAT WE DO</a></li>
                            <li><a href="">ABOUT US</a></li>
                            <li><a href="">HELP AND FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className='line'></div>
                <div className="footerbottom">
                    <div className="bottomleft">
                        <div className="footericons">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
                            <FontAwesomeIcon icon={faYoutube} style={{ color: 'white' }} />
                            <FontAwesomeIcon icon={faVimeoV} style={{ color: 'white' }} />
                            <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
                        </div>
                        <div className="allrightsreserved">
                            <p>© 2022 <a href="https://qodeinteractive.com/?_gl=1%2Atj9msj%2A_gcl_au%2AMjEwNDM5OTE3Ni4xNzAwMzgzNzU1&_ga=2.201541138.2067877352.1700383755-856714723.1700383755">QODE INTERACTIVE</a>, ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                    <div className="bottomright">
                        <div className="location">
                            <a>1316 Via del Parione <br /> Florence CA 90291, Italy </a>
                        </div>
                        <div className="input">
                            <input type="text" />
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer