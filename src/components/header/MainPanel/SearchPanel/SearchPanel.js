import React from 'react'

import './SearchPanel.scss'

import { AiOutlineSearch } from 'react-icons/ai'


function SearchPanel() {
    return (
        <div className="search-panel">
            <section className="search-panel__container">
                <input
                    type="text"
                    id="search-input"
                    name="search-input"
                    className="search-panel__input"
                />
                <label htmlFor="search-input" className="search-panel__label">.</label>
                <AiOutlineSearch className="search-panel__icon" />
            </section>

        </div>
    )
}

export default SearchPanel
