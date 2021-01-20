import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { useGlobalContext } from './context'

const Navbar = () => {
    const { setIsSidebarOpen, isSidebarOpen, handleSearchValue, searchValue } = useGlobalContext()
    return (
        <nav>
            <div className="nav-container">
                <button className="sidebar-toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}><BiMenuAltLeft /></button>
                <input type="text" className="search-input" placeholder="Search..." onChange={(e) => handleSearchValue(e)} value={searchValue} />
            </div>
        </nav>
    )
}

export default Navbar