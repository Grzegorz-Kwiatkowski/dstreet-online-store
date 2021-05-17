import React from 'react'

import './Header.scss'

import InfoPanel from './InfoPanel/InfoPanel'
import MainPanel from './MainPanel/MainPanel'
import Navigation from './Navigation/Navigation'
import MyCarousel from './MyCarousel/MyCarousel'


function Header() {
    return (
        <header className="header">
            <InfoPanel />
            <MainPanel />
            <Navigation />
            <MyCarousel />
        </header>
    )
}

export default Header
