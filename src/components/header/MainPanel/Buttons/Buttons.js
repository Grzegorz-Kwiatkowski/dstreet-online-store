import React from 'react'

import './Buttons.scss'

import { BsPerson } from 'react-icons/bs'
import { RiHeartLine } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'



function Buttons() {
    return (
        <div className="buttons">
            <section className="buttons__button">
                <BsPerson className="buttons__icon" />
                <p className="buttons__text">
                    Zaloguj
                </p>
            </section>

            <section className="buttons__button">
                <RiHeartLine className="buttons__icon" />
                <p className="buttons__text">
                    Ulubione
                </p>
            </section>

            <section className="buttons__button">
                <AiOutlineShoppingCart className="buttons__icon" />
                <p className="buttons__text">
                    Koszyk
                </p>
            </section>
        </div>
    )
}

export default Buttons
