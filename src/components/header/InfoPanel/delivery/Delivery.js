import './Delivery.scss';
import React from 'react'


import { delivery_options } from '../../../../data';


function Delivery() {

    return (
        <div className="delivery">

            <h2>Warunki Darmowej Dostawy</h2>

            <table rules="all">
                <caption>Darmowa dostawa obowiązuje od kwoty zakupów:</caption>
                <thead>
                    <tr>
                        <th>Forma Dostawy</th>
                        <th>Forma Płatności: Przedpłata</th>
                        <th>Forma Płatności : Pobranie</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        delivery_options.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.image} alt={item.name} />
                                </td>
                                <td> {item.prepayment}</td>
                                <td>{item.cash_on_delivery}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <ol>
                <li>
                    W przypadku wybrania formy płatności <span>'przedpłata'</span>, darmową dostawą objęte
                    są zamówienia dostarczane wskazany adres <span>kurierem DPD</span>, <span>kurierem InPost</span> lub
                    <span>kurierem Pocztex</span>, bądź do wskazanego <span>Punktu Odbioru Poczty Polskiej</span> lub
                    Paczkomatu InPost o minimalnej wartości <span>150,00 zł</span>.
                </li>
                <li>
                    W przypadku wybrania formy płatności <span>'przy odbiorze'</span>, darmową dostawą nie są
                    objęte żadne zamówienia.
                </li>
            </ol>
        </div>
    )
}

export default Delivery
