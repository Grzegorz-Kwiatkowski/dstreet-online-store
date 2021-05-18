import React from 'react'

import './Links.scss'


function Links() {

    const links = [
        {
            id: 1,
            header: "Informacje",
            links: [
                { id: 1, name: "O Dstreet", link: "" },
                { id: 2, name: "Blog", link: "" },
                { id: 3, name: "Kontakt", link: "" },
                { id: 4, name: "Regulamin sklepu", link: "" },
                { id: 5, name: "Polityka prywatności", link: "" }
            ]
        },
        {
            id: 2,
            header: "Obsługa klienta",
            links: [
                { id: 1, name: "FAQ", link: "" },
                { id: 2, name: "Zwroty i reklamacje", link: "" },
                { id: 3, name: "Jak dobrać rozmiar ?", link: "" },
                { id: 4, name: "Jak kupować ?", link: "" },
                { id: 5, name: "Zdjęcia i kolory", link: "" }
            ]
        },
        {
            id: 3,
            header: "Dostawa i płatność",
            links: [
                { id: 1, name: "Metody płatności", link: "" },
                { id: 2, name: "koszty i czas dostawy", link: "" },
                { id: 3, name: "śledzenie przesyłek", link: "" },
            ]
        },
        {
            id: 4,
            header: "Moje konto",
            links: [
                { id: 1, name: "Zarejestruj się", link: "" },
                { id: 2, name: "Moje zamówienia", link: "" },
                { id: 3, name: "Koszyk", link: "" },
                { id: 4, name: "Ulubione", link: "" },
                { id: 5, name: "Historia transakcji", link: "" }
            ]
        },
        {
            id: 5,
            header: "Infolinia",
            links: [
                { id: 1, name: "44 234 43 34", link: "" },
            ]
        },
    ];


    return (
        <div className="links">

            {links.map(list => (
                <section className="links__container">
                    <h5 className="links__header">{list.header}</h5>
                    <ul key={list.id} className="links__list">
                        {list.links.map(item => (
                            <li key={item.id} className="links__list-item">{item.name}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    )
}

export default Links
