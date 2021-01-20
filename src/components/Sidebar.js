import React from 'react'
import moviesData from '../moviesData'
import { useGlobalContext } from './context'
import { IoClose } from 'react-icons/io5'

const Sidebar = () => {
    const { isSidebarOpen, handleChangeGenre } = useGlobalContext()
    let allGenres = []
    let uniqueGenres = []
    moviesData.map((movie) => {
        allGenres.push(movie.genre)
        uniqueGenres = [...new Set(allGenres)]
    })
    return (
        <aside className={`sidebar ${isSidebarOpen && `sidebar-open`}`}>
            <ul className="genres-list">
                {
                    uniqueGenres.sort().map((genre, i) => {
                        return <li key={i} className="genre-item" onClick={(e) => handleChangeGenre(e)}>{genre}</li>
                    })
                }
            </ul>
            <button className="clear-genre-btn" onClick={(e) => handleChangeGenre(e)}><IoClose /> Clear Filters</button>
        </aside>
    )
}
export default Sidebar