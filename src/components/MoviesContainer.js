import React from 'react'
import moviesData from '../moviesData'
import { useGlobalContext } from './context'
import MovieThumbnail from './MovieThumbnail'

const MoviesContainer = () => {
    const { isSidebarOpen, selectedGenre, searchValue } = useGlobalContext()

    return (
        <div className={`movies-container ${isSidebarOpen && `sidebar-open`}`}>
            {
                moviesData.map((movie) => {
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