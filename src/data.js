import logo_dpd from './img/header/infoPanel/logo-dpd.jpg'
import logo_inpost_kurier from './img/header/infoPanel/logo-inpost-kur.jpg'
import logo_inpost_paczkomat from './img/header/infoPanel/logo-inpost-p.jpg'
import logo_pocztex_kurier from './img/header/infoPanel/logo-pp-k.jpg'
import logo_pocztex_punkt from './img/header/infoPanel/logo-pp-p.jpg'

const delivery_options = [
    {
        id: 1,
        name: "Kurier dpd",
        prepayment: 150,
        cash_on_delivery: '-',
        image: logo_dpd
    },
    {
        id: 2,
        name: "Kurier InPost",
        prepayment: 150,
        cash_on_delivery: '-',
        image: logo_inpost_kurier
    },
    {
        id: 3,
        name: "Paczkomaty InPost",
        prepayment: 150,
        cash_on_delivery: '-',
        image: logo_inpost_paczkomat
    },
    {
        id: 4,
        name: "Kurier Poczty Polskiej",
        prepayment: 150,
        cash_on_delivery: '-',
        image: logo_pocztex_kurier
    },
    {
        id: 5,
        name: "Poczta Polska odbiór w punkcie",
        prepayment: 150,
        cash_on_delivery: '-',
        image: logo_pocztex_punkt
    }
];

export { delivery_options }