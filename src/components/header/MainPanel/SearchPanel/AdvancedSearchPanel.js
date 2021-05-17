import React, { Component } from 'react'

import './AdvancedSearchPanel.scss'


export default class AdvancedSearchPanel extends Component {

    constructor() {
        super();

        this.state = {
            checkboxes: [
                { id: 1, label: "Przecena", name: "discount", checked: false },
                { id: 2, label: "Nowości", name: "news", checked: false },
                { id: 3, label: "Bestseller", name: "bestseller", checked: false }
            ],
            selectOptions: [
                { id: 1, name: "price", value: "Cena" },
                { id: 2, name: "date-added", value: "Data dodania" },
                { id: 3, name: "name", value: "Nazwa" }
            ],
            name: '',
            price_start: 0,
            price_end: 0,
            sort_option: '',
            sort_radio: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {

        if (e.target.type === "checkbox") {
            const checkboxes = this.state.checkboxes;
            checkboxes.forEach(field => {
                if (field.id === parseInt(e.target.value)) {
                    field.checked = !field.checked;
                }
            })
            this.setState({ checkboxes })
        } else {
            this.setState({ [e.target.name]: [e.target.value] })
        }
    }



    render() {

        const { checkboxes, selectOptions, sort_option } = this.state;

        return (
            <div className="advanced-search-panel">

                <h3 className="advanced-search-panel__header">Wyszukiwarka zaawansowana</h3>
                <p className="advanced-search-panel__info">
                    Aby wyszukać interesujący Cię produkt, wybierz kryteria wyszukiwania.
                    Wyszukiwarka zawęża kryteria do istniejących produktów.
                </p>

                <form onSubmit={this.handleSubmit} className="advanced-search-panel__form">

                    <section className="advanced-search-panel__field">

                        <p className="advanced-search-panel__field-title">Szukaj</p>
                        <section className="advanced-search-panel__input-wrapper">
                            <label htmlFor="product-name">.</label>
                            <input type="text" id="product-name" name="name" onChange={this.handleChange} />
                        </section>

                    </section>

                    <section className="advanced-search-panel__field">

                        <p className="advanced-search-panel__field-title">Cena</p>
                        <section className="advanced-search-panel__inputs-wrapper">

                            <section className="advanced-search-panel__input-wrapper">
                                <label htmlFor="price-start">od</label>
                                <input type="text" id="price-start" name="price_start" onChange={this.handleChange} />
                            </section>

                            <section className="advanced-search-panel__input-wrapper">
                                <label htmlFor="price-end">do</label>
                                <input type="text" id="price-end" name="price_end" onChange={this.handleChange} />
                                <span className="advanced-search-panel__input-wrapper-currency">zł</span>
                            </section>

                        </section>

                    </section>



                    <section className="advanced-search-panel__field">

                        <p className="advanced-search-panel__field-title">Szukaj w</p>
                        <section className="advanced-search-panel__input-wrapper">

                            <section className="advanced-search-panel__checkboxes-wrapper">
                                {checkboxes.map(field => (
                                    <section key={field.id} className="advanced-search-panel__checkbox-wrapper">
                                        <input type="checkbox" id={field.name} name={field.name} value={field.id} onChange={this.handleChange} />
                                        <label htmlFor={field.name}>{field.label}</label>
                                    </section>
                                ))}
                            </section>

                        </section>

                    </section>


                    <section className="advanced-search-panel__field">

                        <p className="advanced-search-panel__field-title">Sortuj po</p>
                        <section className="advanced-search-panel__input-wrapper">

                            <label htmlFor="sort">.</label>
                            <select id="sort" name="sort_option" value={sort_option} onChange={this.handleChange}>
                                {selectOptions.map(field => (
                                    <option key={field.id} value={field.name}>{field.value}</option>
                                ))}
                            </select>

                        </section>

                    </section>


                    <section className="advanced-search-panel__field">

                        <p className="advanced-search-panel__field-title"></p>
                        <section className="advanced-search-panel__radio-wrapper">
                            <input type="radio" name="sort_radio" id="sort_up" value="up" onChange={this.handleChange} />
                            <label htmlFor="sort_up">Rosnąco</label>
                            <input type="radio" name="sort_radio" id="sort_down" value="down" onChange={this.handleChange} />
                            <label htmlFor="sort_down">Malejąco</label>
                        </section>

                    </section>

                    <section className="advanced-search-panel__button-wrapper">
                        <button type="submit">Szukaj</button>
                    </section>

                </form>
            </div>
        )
    }
}
