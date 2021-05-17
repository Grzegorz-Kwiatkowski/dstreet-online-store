import React from 'react'

import './Newsletter.scss';


function Newsletter(props) {

    const { isClicked, name, email, permissions, handleChange, handleSubmit, selectAll } = props;

    return (
        <div className={isClicked ? "newsletter active" : "newsletter"}>

            <section className="newsletter__discount">
                <span className="newsletter__discount--small">Zapisz się do</span><br />
                <span className="newsletter__discount--big">Newslettera</span><br />
                <span className="newsletter__discount--medium">i odbierz
            <span className="newsletter__discount--biggest">20
                <small className="newsletter__discount--smaller">zł</small>
                    </span>
                </span>
            </section>

            <section className="newsletter__contact-form">
                <p className="newsletter__text">
                    Interesujesz się modą? Śledzisz światowe trendy?<br />
                    Z newsletterem Dstreet zawsze będziesz na bieżąco w tym co modne, a dodatkowo<br />
                    dowiesz się o najnowszych promocjach, rabatach, wyprzedażach i zniżkach!
            </p>

                <form onSubmit={handleSubmit} className="newsletter__form" >

                    <div className="newsletter__input-wrapper">
                        <label htmlFor="email">.</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Twój adres email" />

                        <label htmlFor="name">.</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Twóje imię" />

                    </div>

                    <button type="submit" className="newsletter__submit-button">
                        Zapisz się
                    </button>

                    <small className="newsletter__small-text">
                        *Kupon rabatowy jest jednorazowego użytku i ważny przy zakupie za łączną kwotę min. 200zł.
                        Kupon rabatowy nie może być wykorzystany przy zakupie kart upominkowych oraz łączony z innymi rabatami.
                    </small>

                    <button onClick={selectAll} className="newsletter__select-button">
                        Zaznacz wszystko
                    </button>

                    {permissions.map(permission => (
                        <section key={permission.id} className="newsletter__checkbox-wrapper">
                            <label htmlFor={"permission_" + permission.id}>.</label>
                            <input
                                type="checkbox"
                                name="permission"
                                id={"permission_" + permission.id}
                                value={permission.id}
                                checked={permission.checked}
                                onChange={handleChange}
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
                </form>

            </section>
        </div>
    )
}

export default Newsletter
