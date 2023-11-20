import React from 'react'
import "./main.scss"
import { useState } from 'react'

function Main() {
    const [firstimg, setFirstImg] = useState("https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img1.jpg")
    const [secondimg, setSecondImg] = useState("https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img2.jpg")
    const [thirdimg, setThirdImg] = useState("https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img3.jpg")
    const [fourthimg, setForthImg] = useState("https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/home-1-port-list-2.jpg")
    const [currentImg, setCurrentImg] = useState(firstimg)
    const [firsttext, setfirsttext] = useState("Back To Nature")
    const [secondtext, setsecondtext] = useState("Into The Cosmos")
    const [thirdtext, setthirdtext] = useState("Wait By The Train")
    const [forthtext, setforthtext] = useState("History Of Color")
    const [currenttext, setcurrenttext] = useState(firsttext)

    const handleimgChange = (newImg,newtext) => {
        setCurrentImg(newImg);
        setcurrenttext(newtext)
    }

    return (
        <main id='main'>
            <section id='sliderimages' style={{ backgroundImage: `url(${currentImg})` }}>
                <div className="sliderbox">
                    <div className="sliderleft">
                        <div className='sliderlefttext'>
                            <h3>Select Production Presents</h3>
                            <h1>{currenttext}</h1>
                            <p>Written and Driected by Tanaka/Ireland 2012</p>
                        </div>
                        <div className='awards'>
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
                        </div>
                    </div>
                    <div className="sliderright">
                        <div className='sliderrighttext'>
                            <h1>Film Festival 2022 <br /> Starts April</h1>
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png" alt="" />
                            <p>Rome / 3 Location / Seven Days</p>
                        </div>
                        <div className='chaningbuttons'>
                            <button onClick={() => handleimgChange(firstimg,firsttext)}></button>
                            <button onClick={() => handleimgChange(secondimg,secondtext)}></button>
                            <button onClick={() => handleimgChange(thirdimg,thirdtext)}></button>
                            <button onClick={() => handleimgChange(fourthimg,forthtext)}></button>
                        </div>
                        <div className='rightbottom'>
                            <button className='playbutton'>Play</button>
                            <button>Get Tickets</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main