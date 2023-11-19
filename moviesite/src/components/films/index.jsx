import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CinemaCard from '../cards/filmcars';
import "./films.scss"
import useFetchData from '../hooks/fetch';

const Films = () => {
    const { data, isLoading, error } = useFetchData("cinema");
    
  return (
    <section id='cinema'>
        <div className="cinema-main">
            <h1>POPULAR MOVIES</h1>
            <div className="cinema-main-container">
                {
                    isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        data && data.map((cinema) => (
                            <CinemaCard key={cinema.id} cinema={cinema} />
                        ))
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Films