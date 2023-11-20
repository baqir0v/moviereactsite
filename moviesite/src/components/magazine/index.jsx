import React from 'react'
import "./magazine.scss"

function Magazine() {
    return (
        <section id='magazine'>
            <div className="magazineleft">
                <div className="magazineleftbox">
                    <div className='texts'>
                    <h6>MAGAZINE</h6>
                    <div className='aas'>
                        <a href="">PRODUCERS</a>
                        <a href="">DECEMBER 10</a>
                    </div>
                    <h3>INTERVIEW WITH <br /> MOVIE PRODUCER <br /> PAUL GANGE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <button>View More</button>
                </div>
            </div>
            <div className="magazineright">
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/blog-list-h4.jpg" alt="" />
            </div>
        </section>
    )
}

export default Magazine