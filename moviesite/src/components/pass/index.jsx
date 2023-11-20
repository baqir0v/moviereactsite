import React from 'react';
import "./pass.scss";

function Pass() {
    return (
        <section className="section_TICKETS">
            <div className="tickets_container">
                <h6 className="qodef-m-title">
                    TICKETS 
                </h6>
                <div className="row">
                    <div className="col_ONE_DAY">
                        <div className="col_left">
                            <h5>ONE DAY</h5>
                            <p className="type">Type: Regular ticket</p>
                            <p className="price">Price: $10</p>
                            <p className="lorem">
                                *Lorem ipsum dolores sit amet, dlores sit.
                            </p>
                        </div>
                        <div className="col_right">
                            <span></span>
                            <a href="">Buy </a>
                        </div>
                    </div>
                    <div className="col_VIP_PASS">
                        <div className="col_left">
                            <h5>VIP PASS</h5>
                            <p className="type">Type: Regular ticket</p>
                            <p className="price">Price: $10</p>
                            <p className="lorem">
                                *Lorem ipsum dolores sit amet, dlores sit.
                            </p>
                        </div>
                        <div className="col_right">
                            <span></span>
                            <a href="">Buy </a>
                        </div>
                    </div>
                    <div className="col_7_DAYS_PACK">
                        <div className="col_left">
                            <h5>7 DAYS PACK</h5>
                            <p className="type">Type: Regular ticket</p>
                            <p className="price">Price: $10</p>
                            <p className="lorem">
                                *Lorem ipsum dolores sit amet, dlores sit.
                            </p>
                        </div>
                        <div className="col_right">
                            <span></span>
                            <a href="">Buy </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pass;
