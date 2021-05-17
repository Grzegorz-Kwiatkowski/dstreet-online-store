import React from 'react'

import './Navigation.scss'

import Node from './Node'



function Navigation() {

    const nav_headers = [
        {
            id: 1,
            title: "nowości",
            category: "news"
        },
        {
            id: 2,
            title: "odzież męska",
            category: "menswear",
            subcategories: [
                {
                    id: 1,
                    category: "jackets",
                    title: "kurtki",
                    subcategories: [
                        { id: 1, title: "zimowe" },
                        { id: 2, title: "skórzane" },
                        { id: 3, title: "jeansowe" }
                    ]
                },
                {
                    id: 2,
                    category: "blouse",
                    title: "bluzy",
                    subcategories: [
                        { id: 1, title: "rozpinane" },
                        { id: 2, title: "przez głowę" },
                        { id: 3, title: "z kapturem" },
                    ]
                },
                {
                    id: 3,
                    category: "t-shirts",
                    title: "koszulki",
                    subcategories: [
                        { id: 1, title: "t-shirty basic" },
                        { id: 2, title: "longsleeve" },
                        { id: 3, title: "polo" }
                    ]
                },
                {
                    id: 4,
                    category: "shirts",
                    title: "koszule",
                    subcategories: [
                        { id: 1, title: "codzienne" },
                        { id: 2, title: "eleganckie" },
                        { id: 3, title: "jeansowe" }
                    ]
                },
                {
                    id: 5,
                    category: "trousers",
                    title: "spodnie",
                    subcategories: [
                        { id: 1, title: "jeansowe" },
                        { id: 2, title: "dresowe" },
                        { id: 3, title: "bojówki" }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "odzież damska",
            category: "womenswear",
            subcategories: [
                {
                    id: 1,
                    category: "jackets",
                    title: "kurtki",
                    subcategories: [
                        { id: 1, title: "skórzane" },
                        { id: 2, title: "jeansowe" },
                        { id: 3, title: "zimowe" }
                    ]
                },
                {
                    id: 2,
                    category: "blouses",
                    title: "bluzki",
                    subcategories: [
                        { id: 1, title: "we wzory" },
                        { id: 2, title: "gładkie" }
                    ]
                },
                {
                    id: 3,
                    category: "sweaters",
                    title: "swetry",
                    subcategories: [
                        { id: 1, title: "rozpinane" },
                        { id: 2, title: "golfy" }
                    ]
                },
                {
                    id: 4,
                    category: "dresses",
                    title: "sukienki",
                    subcategories: [
                        { id: 1, title: "we wzory" },
                        { id: 2, title: "maxi" },
                        { id: 3, title: "mini" }
                    ]
                },
                {
                    id: 5,
                    category: "trousers",
                    title: "spodnie",
                    subcategories: [
                        { id: 1, title: "jeansowe" },
                        { id: 2, title: "dresowe" },
                        { id: 3, title: "legginsy" }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "końcówki kolekcji",
            category: "end-of-the-collection"
        }
    ];


    let nodes = nav_headers.map(header => (
        <Node key={header.id} node={header} children={header.subcategories} />
    ))

    return (
        <div className="navigation">
            <ul className="navigation__list">
                {nodes}
            </ul>
        </div>
    )
}


export default Navigation
