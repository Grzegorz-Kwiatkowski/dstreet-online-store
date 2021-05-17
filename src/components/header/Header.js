import React from 'react'

import './Header.scss'

import InfoPanel from './InfoPanel/InfoPanel'
import MainPanel from './MainPanel/MainPanel'
import Navigation from './Navigation/Navigation'

function Header() {
    return (
        <header className="header">
            <InfoPanel />
            <MainPanel />
            <Navigation />
        </header>
    )
}

export default Header
