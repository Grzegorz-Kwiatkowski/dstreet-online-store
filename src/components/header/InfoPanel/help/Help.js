import React from 'react'
import { Link } from 'react-router-dom'

import { RiPhoneFill } from 'react-icons/ri'
import { BiGridSmall } from 'react-icons/bi'

import './Help.scss';

function Help({ isClicked }) {

    return (

        <div className={isClicked ? "help active" : "help"}>

            <section className="help__contact">
                <h3>Potrzebujesz pomocy?</h3>
                <p>
                    Nasza infolinia jest do Twojej dyspozycji od pon. do pt. w godz. 9:00-15:00
                </p>
                <RiPhoneFill className="help__contact-icon" />
                <a href="tel:+48713333222">42 090 09 09</a>
                <small>Koszt połaczenia według taryfy operatora</small>
            </section>

            <section className="help__contact-info">
                <p>
                    Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach 9:00 - 16:00.
                    <br />
                    Na wiadomości otrzymane w soboty, niedziele oraz święta odpowiadamy najszybciej
                    jak to możliwe.
                </p>
                <p>
                    Biuro Obsługi Klienta:
                    <br />
                    <a href="mailto:sklep@dstreet.pl" className="help__contact-info-email">
                        sklep@dstreetstore.pl
                     </a>
                </p>
                <br />
                <p>
                    Jeśli potrzebujesz szybkiej informacji skorzystaj z poniższych linków:
                </p>
                <br />
                <ul>
                    <li><Link to="/sledzenie-przesylek"><BiGridSmall className="boxIcon" /> Śledzenie przesyłek</Link></li>
                    <li><Link to="/koszty-i-czas-dostawy"><BiGridSmall className="boxIcon" /> Koszty i czas dostawy</Link></li>
                    <li><Link to="/wymiany-zwroty-i-reklamacje"><BiGridSmall className="boxIcon" /> Wymiany, zwroty i reklamacje</Link></li>
                    <li><Link to="/regulamin-sklepu"><BiGridSmall className="boxIcon" /> Regulamin sklepu</Link></li>
                    <li><Link to="/faq"><BiGridSmall className="boxIcon" /> Faq</Link></li>
                    <li><Link to="/polityka-prywatnosci"><BiGridSmall className="boxIcon" /> Polityka prywatności</Link></li>
                </ul>

            </section>

        </div>
    )
}

export default Help
