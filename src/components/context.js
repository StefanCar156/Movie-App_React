import React, { useState, useContext } from 'react'
import moviesData from '../moviesData'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [selectedGenre, setSelectedGenre] = useState(null)
    const [searchValue, setSearchValue] = useState("")
    const [isMovieComponentOpen, setIsMovieComponentOpen] = useState(false)
    const [movieProps, setMovieProps] = useState({})
    const [criteria, setCriteria] = useState("title")
    const [isAscending, setIsAscending] = useState(true)

    const handleChangeGenre = (e) => {
        // Clear Genre Filters
        if (e.target.classList.contains("clear-genre-btn")) {
            setSelectedGenre(null)
            setIsSidebarOpen(false)
            e.target.previousSibling.childNodes.forEach((child) => {
                child.classList.remove("genre-item-active")
            })
            return
        }
        // Change Genre, show active one
        e.target.parentElement.childNodes.forEach((child) => {
            child.classList.remove("genre-item-active")
        })
        e.target.classList.add("genre-item-active")
        setSelectedGenre(e.target.textContent)
        setIsSidebarOpen(false)
    }

    const handleSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    const handleChangeSorting = (e) => {
        let newCriteria = e.target.value
        setCriteria(newCriteria)
    }

    const handleOpenMovieComponent = (e) => {
        setIsMovieComponentOpen(true)
        let newProps = {}
        moviesData.map((movie) => {
            if (movie.title === e.target.children[1].children[0].textContent) {
                const { title, year, rating, img, genre, duration, plot } = movie
                newProps = {
                    propsTitle: title,
                    propsYear: year,
                    propsRating: rating,
                    propsImg: img,
                    propsGenre: genre,
                    propsDuration: duration,
                    propsPlot: plot
                }
            }
        })
        setMovieProps(newProps)
    }
    const handleCloseMovieComponent = () => {
        setIsMovieComponentOpen(false)
    }

    return <AppContext.Provider value={{isSidebarOpen, setIsSidebarOpen, selectedGenre, handleChangeGenre, searchValue, handleSearchValue, handleChangeSorting, criteria, isAscending, setIsAscending, isMovieComponentOpen, handleOpenMovieComponent, handleCloseMovieComponent, movieProps }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }