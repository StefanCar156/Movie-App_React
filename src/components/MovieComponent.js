import React from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { IoIosCloseCircle } from 'react-icons/io'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useGlobalContext } from './context'


const MovieComponent = () => {
    const { isMovieComponentOpen, handleCloseMovieComponent, movieProps } = useGlobalContext()
    const { propsTitle, propsYear, propsRating, propsImg, propsGenre, propsDuration, propsPlot } = movieProps
    let ratingPercentage = propsRating * 10
    let ratingPercentageRounded = `${Math.round(ratingPercentage / 10) * 10}%`

    return (
        <div className={`movie-component ${isMovieComponentOpen && `movie-component-open`}`}>
            <button className="close-movie-component-btn" onClick={handleCloseMovieComponent}><IoIosCloseCircle /></button>
            <div className="movie-content">
                <img src={propsImg} alt="" className="movie-img"/>
                <div className="movie-info">
                    <h1 className="movie-title">{propsTitle}</h1>
                    <ul className="movie-details">
                        <li className="movie-genre">{propsGenre}</li>
                        <li className="movie-year"><FaCalendarAlt /> {propsYear}</li>
                        <li className="movie-duration"><FaClock /> {propsDuration} min</li>
                        <li className="movie-rating">
                            <div className="stars-outer">
                                <div className="stars-inner" style={{width: ratingPercentageRounded}}></div>
                            </div>
                            <span>{propsRating}</span>
                        </li>
                    </ul>
                    <h2>Plot</h2>
                    <p className="movie-plot">{propsPlot}</p>
                </div>
            </div>
        </div>
    )
}
export default MovieComponent
