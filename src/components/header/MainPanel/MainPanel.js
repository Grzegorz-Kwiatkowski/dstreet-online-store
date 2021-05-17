import React from 'react'

import './MainPanel.scss'

import logo from '../../../img/header/main_panel/logo_2_big.png'

import Buttons from './Buttons/Buttons'
import SearchPanel from './SearchPanel/SearchPanel'


function MainPanel() {
    return (
        <div className="main-panel">

            <section className="main-panel__logo">
                <img loading="lazy" src={logo} alt="logo" width="168px" height="56px" />
            </section>

            <section className="main-panel__search-input">
                <SearchPanel />
            </section>

            <section className="main-panel__buttons">
                <Buttons />
            </section>
        </div>
    )
}

export default MainPanel
