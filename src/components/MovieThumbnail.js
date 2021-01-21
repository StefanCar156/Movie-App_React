import React from 'react'
import { useGlobalContext } from './context'
const MovieThumbnail = ({props}) => {
    const { title, year, rating, img } = props
    const { handleOpenMovieComponent } = useGlobalContext()
    let ratingPercentage = rating * 10
    let ratingPercentageRounded = `${Math.round(ratingPercentage / 10) * 10}%`
    return (
        <div className="movie-thumbnail" onClick={(e) => handleOpenMovieComponent(e)} >
            <img src={img} alt={title} className="thumbnail-img"/>
            <div className="thumbnail-overlay">
                <h2 className="thumbnail-title">{title}</h2>
                <h4 className="thumbnail-year">({year})</h4>
                <h4 className="thumbnail-rating"><div className="stars-outer">
                                <div className="stars-inner" style={{width: ratingPercentageRounded}}></div>
                            </div></h4>
            </div>
        </div>
    )
}

export default MovieThumbnail