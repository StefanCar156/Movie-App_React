import React from 'react'
import moviesData from '../moviesData'
import { useGlobalContext } from './context'
import MovieThumbnail from './MovieThumbnail'

const MoviesContainer = () => {
    const { isSidebarOpen, selectedGenre, searchValue, criteria, isAscending } = useGlobalContext()
    // Apply Sorting Criteria
    let sortedMovies 
    switch(criteria) {
        case "title" :
            sortedMovies = moviesData.sort((a,b) => (a.title > b.title) ? 1 : -1)
            break;
        case "year" : 
            sortedMovies = moviesData.sort((a,b) => (a.year < b.year) ? 1 : -1)
            break;
        case "rating" : 
            sortedMovies = moviesData.sort((a,b) => (a.rating < b.rating) ? 1 : -1)
            break;
        case "duration" : 
            sortedMovies = moviesData.sort((a,b) => (a.duration < b.duration) ? 1 : -1)
            break;
        default: 
            sortedMovies = moviesData.sort((a,b) => (a.title > b.title) ? 1 : -1)
    }
    if (!isAscending) {
        sortedMovies.reverse()
    }

    return (
        <div className={`movies-container ${isSidebarOpen && `sidebar-open`}`}>
            {
                sortedMovies.map((movie) => {
                    if (!selectedGenre ) {
                        if (searchValue === "") {
                            return <MovieThumbnail key={movie.id} props={movie}/>
                        } 
                        if (movie.title.toLowerCase().includes(searchValue.toLowerCase())) {
                            return <MovieThumbnail key={movie.id} props={movie}/>
                        }
                    } else if (selectedGenre) {
                        if (searchValue === "") {
                            if (selectedGenre === movie.genre) {
                                return <MovieThumbnail key={movie.id} props={movie}/>
                            }
                        } else {
                            if (movie.title.toLowerCase().includes(searchValue.toLowerCase()) && movie.genre === selectedGenre) {
                                return <MovieThumbnail key={movie.id} props={movie}/>
                            }
                        }
                    }
                    
                })
            }
        </div>
    )
}

export default MoviesContainer