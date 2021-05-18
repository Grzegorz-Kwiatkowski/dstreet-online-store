import React from 'react'

import './Footer.scss'

import SocialIcons from './SocialIcons/SocialIcons'
import Links from './Links/Links'
import Newsletter from './Newsletter/Newsletter'


function Footer() {
    return (
        <div className="footer">
            <Newsletter />
            <Links />
            <SocialIcons />
        </div>
    )
}

export default Footer
