import React, { Component } from 'react'

import './Newsletter.scss';


class Newsletter extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false,
            email: '',
            name: '',
            permissions: [
                {
                    id: 1,
                    checked: false,
                    disabled: false,
                    content: "Wyrażam zgodę na przekazywanie przez sklep internetowy dstreet.pl, Newslettera na podany adres e-mail lub numer telefonu za pośrednictwem moich urządzeń telekomunikacyjnych, w szczególności takich jak laptop, telefon, smartfon zgodnie z art. 172 ust. 1 ustawy z dnia 16 lipca 2004 r. Prawo telekomunikacyjne;",
                },
                {
                    id: 2,
                    checked: false,
                    disabled: false,
                    content: "Wyrażam zgodę na otrzymywanie od sklep dstreet.pl, informacji handlowych zgodnie z art. 10 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.",
                },
                {
                    id: 3,
                    checked: false,
                    disabled: true,
                    content: "Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania na podany adres e-mail Newslettera sklepu internetowego dstreet.pl*",
                },
                {
                    id: 4,
                    checked: false,
                    disabled: true,
                    content: "Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania na podany numer telefonu Newslettera SMS sklepu internetowego dstreet.pl*"

                }
            ],
        }
    }

    handleNewsletterClick = e => {
        e.preventDefault();
        this.setState({
            isActive: true
        });
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    selectAll = () => {
        let checkboxPermissions = this.state.permissions;
        checkboxPermissions.forEach(permission => {
            permission.checked = true;
        });
        this.setState({ permissions: checkboxPermissions });
    }

    handleChange = e => {

        if (e.target.type === "checkbox") {

            let checkboxPermissions = this.state.permissions;

            checkboxPermissions.forEach(permission => {
                if (permission.id === parseInt(e.target.value)) {
                    permission.checked = e.target.checked;
                }
            });

            if ((!checkboxPermissions[0].checked && !checkboxPermissions[1].checked) ||
                (!checkboxPermissions[0].checked || !checkboxPermissions[1].checked)) {
                checkboxPermissions[2].disabled = true;
                checkboxPermissions[3].disabled = true;
                checkboxPermissions[2].checked = false;
                checkboxPermissions[3].checked = false;
            } else {
                checkboxPermissions[2].disabled = false;
                checkboxPermissions[3].disabled = false;
            }
            this.setState({ permissions: checkboxPermissions });

        } else {
            this.setState({ [e.target.name]: [e.target.value] });
        }
    }


    render() {

        const { name, email, permissions, isClicked } = this.state;

        return (
            <div className="newsletter active">

                <form onSubmit={this.handleSubmit} className="newsletter__form" >

                    <section className="newsletter__form-wrapper">

                        <h5 className="newsletter__form-wrapper-header">Newsletter</h5>

                        <label htmlFor="email">.</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={this.handleChange}
                            placeholder="Twój adres email"
                            onClick={this.handleNewsletterClick} />

                        <label htmlFor="name">.</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={this.handleChange}
                            placeholder="Twóje imię"
                            onClick={this.handleNewsletterClick} />

                        <button type="submit" className="newsletter__submit-button">
                            Zapisz się
                            </button>

                    </section>


                    <div className={this.state.isActive ? "newsletter__hidden-content active" : "newsletter__hidden-content "}>

                        <button onClick={this.selectAll} className="newsletter__select-all-btn">
                            Zaznacz wszystko
                            </button>

                        <small className="newsletter__small-text">
                            *Kupon rabatowy jest jednorazowego użytku i ważny przy zakupie za łączną kwotę min. 200zł.<br />
                            Kupon rabatowy nie może być wykorzystany przy zakupie kart upominkowych oraz łączony z innymi rabatami.
                            </small>


                        {permissions.map(permission => (
                            <section key={permission.id} className="newsletter__checkbox-wrapper">
                                <label htmlFor={"permission_" + permission.id}>.</label>
                                <input
                                    type="checkbox"
                                    name="permission"
                                    id={"permission_" + permission.id}
                                    value={permission.id}
                                    checked={permission.checked}
                                    onChange={this.handleChange}
                                    disabled={permission.disabled}
                                />


                                <p className={permission.disabled ? "newsletter__checkbox-content disabled" : "newsletter__checkbox-content"}>
                                    {permission.content}
                                </p>
                            </section>
                        ))}

                        <section className="newsletter__laws">
                            <p>
                                Informujemy, że Administratorem Państwa danych osobowych jest
                                D-TEX sp. z o.o. z siedzibą w Wieluniu (98-300) przy ul. Jana
                                Długosza 5. Administrator przetwarza dane osobowe zgodnie z
                                Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z
                                dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                                związku z przetwarzaniem danych osobowych i w sprawie swobodnego
                                przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
                                rozporządzenie o ochronie danych, RODO). Mają Państwo prawo do
                                wglądu do swoich danych osobowych, w tym uzyskania ich kopii, prawo
                                do sprostowania, przenoszenia, żądania usunięcia lub ograniczenia ich
                                przetwarzania, a także prawo do wniesienia sprze`ciwu wobec
                                przetwarzania danych przez Współadministratorów i prawo do
                                wniesienia skargi organu nadzorczego - Prezesa Urzędu Ochrony Danych
                                Osobowych.
                        </p>
                        </section>
                    </div>
                </form>
            </div>
        )
    }


}

export default Newsletter
