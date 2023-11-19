import React from 'react'
import "./video.scss"


const Video = () => {
  return (
    <section id='video'>
        <div className="video-main">
            <h6>AUDIENCE CHOICE</h6>
            <div className="video-main-container">
                <div className="video-left">
                    <video src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/home4-video.mp4" controls loop autoplay></video>
                </div>
                <div className="video-right">
                  <h3>DOCUMENTARY</h3>
                  <h1>LIFE ON THE ISLAND</h1>
                  <p>documentary film by Mirela Bagaric / Croatia 2021</p>
                  <div className="medal-container">
                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon1.png" alt="Best Director" />
                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon2.png" alt="Best Actress" />
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Video