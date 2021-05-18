import React from 'react'

import './SocialIcons.scss'

import twitter from '../../../img/footer/twitter.png';
import facebook from '../../../img/footer/facebook.png';
import app_store from '../../../img/footer/app-store.png';
import google_play from '../../../img/footer/google-play.png';


function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://twitter.com/dstreetpl"
                className="social-icons__link"
            >
                <img src={twitter} />
            </a>
            <a href="https://www.facebook.com/dstreetpl/"
                className="social-icons__link"
            >
                <img src={facebook} />
            </a>
            <a href="https://apps.apple.com/pl/app/dstreet-pl/id1029823503"
                className="social-icons__link"
            >
                <img src={app_store} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.idosell.dstreet"
                className="social-icons__link"
            >
                <img src={google_play} />
            </a>
        </div>
    )
}

export default SocialIcons
