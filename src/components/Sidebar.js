import React from 'react'
import moviesData from '../moviesData'
import { useGlobalContext } from './context'
import { IoClose } from 'react-icons/io5'
import { HiSortDescending, HiSortAscending } from 'react-icons/hi'

const Sidebar = () => {
    const { isSidebarOpen, handleChangeGenre, handleChangeSorting, isAscending, setIsAscending } = useGlobalContext()
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
            <div className="sort-container">
                <h4>Sort By:</h4>
                <select name="sort-by" id="sort-by" onChange={(e) => handleChangeSorting(e)}>
                    <option value="title">Title</option>
                    <option value="year">Year</option>
                    <option value="rating">Rating</option>
                    <option value="duration">Duration</option>
                </select>
                <button className="sorting-order-btn" onClick={() => setIsAscending(!isAscending)}>{isAscending ? <HiSortDescending /> : <HiSortAscending />}</button>
            </div>
            
        </aside>
    )
}
export default Sidebar