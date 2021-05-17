import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './InfoPanel.scss'

import Help from './help/Help'
import Newsletter from './newsletter/Newsletter'
import Delivery from './delivery/Delivery'
import Complaints from './complaints/Complaints'



class InfoPanel extends Component {
    constructor() {
        super();
        this.state = {
            helpClicked: false,
            newsletterClicked: false,
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


    handleHelpClick = e => {
        e.preventDefault();
        this.setState({
            helpClicked: !this.state.helpClicked
        });
    }

    handleNewsletterClick = e => {
        e.preventDefault();
        this.setState({
            newsletterClicked: !this.state.newsletterClicked
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

        const { helpClicked, newsletterClicked, email, name, permissions } = this.state;

        return (
            <div className="info-panel">
                <nav className="info-panel__nav">

                    <section className="info-panel__section">
                        <Link to="/" className="info-panel__link info-panel__link--border"
                            onClick={(e) => this.handleHelpClick(e)}>
                            Pomoc
                        </Link>
                        <Link to="/" className="info-panel__link info-panel__link--border"
                            onClick={(e) => this.handleNewsletterClick(e)}>
                            Newsletter
                        </Link>
                        <Link to="/" className="info-panel__link info-panel__link--disabled">
                            Infolinia 00 000 00 00
                        </Link>
                    </section>

                    <section className="info-panel__section">
                        <Link to="/" className="info-panel__link">Przesyłka gratis</Link>
                    </section>

                    <section className="info-panel__section">
                        <Link to="/" className="info-panel__link">14-dniowe prawo zwrotu</Link>
                    </section>

                </nav>


                <Help
                    isClicked={helpClicked}
                />
                <Newsletter
                    isClicked={newsletterClicked}
                    name={name}
                    email={email}
                    permissions={permissions}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    selectAll={this.selectAll}
                />




            </div >
        );
    }
}


export default InfoPanel

