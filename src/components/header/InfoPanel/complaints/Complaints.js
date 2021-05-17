import React, { useState } from 'react'
import { MdPictureAsPdf } from 'react-icons/md'

import complaint_form from '../../../../documents/complaint_form.pdf';
import refund_form from '../../../../documents/refund_form.pdf';

import './Complaints.scss';

function Complaints() {

    const [isRefundsOpen, setIsRefundsOpen] = useState(false);
    const [isComplaintsOpen, setIsComplaintsOpen] = useState(false);

    return (
        <div className="complaints">

            <h2>Zwroty i reklamacje</h2>

            <section className="complaints__info">
                <h4>Drogi Kliencie</h4>
                <p>
                    Jeśli zamówiony produkt źle na Tobie leży, zmieniłeś zdanie, lub z jakiegoś
                    innego powodu chcesz go zwrócić - odeślij go do nas z dowodem zakupu, oraz
                    wypełnionym formularzem. Jeśli nie masz możliwości wydruku możesz dołączyć
                    odręcznie wypisany formularz podając w nim:
                </p>

                <ul>
                    <li>Swój login ze sklepu i numer zamówienia.</li>
                    <li>Imię, nazwisko oraz nr telefonu kontaktowego.</li>
                    <li>Pełny adres do wysyłki zwrotnej.</li>
                    <li>Model, rozmiar oraz kolor odsyłanego towaru.</li>
                </ul>

                <table>
                    <caption>Dane do wysyłki</caption>
                    <tbody>
                        <tr>
                            <th>Odbiorca : </th>
                            <td> "dstreet-store"   </td>
                        </tr>
                        <tr>
                            <th>Adres : </th>
                            <td>ul. Bolesława Chrobrego 5, 77-355 Wieluń</td>
                        </tr>
                    </tbody>
                </table>

                <section className="complaints__links">

                    <section className="complaints__refunds">

                        <button onClick={() => setIsRefundsOpen(!isRefundsOpen)}>Zwrot</button>

                        <section className={isRefundsOpen ? "complaints__content open " : "complaints__content"}>
                            <p>
                                Usługobiorca/Klient będący jednocześnie konsumentem, który zawarł umowę
                                na odległość, może od niej odstąpić bez podania przyczyn, składając
                                stosowne oświadczenie na piśmie w terminie czternastu dni. Do zachowania
                                tego terminu wystarczy wysłanie oświadczenia przed jego upływem. Oświadczenie
                                można wysyłać w szczególności za pośrednictwem poczty elektronicznej na
                                adres.
                            </p>

                            <ol>
                                <li>
                                    W razie odstąpienia od umowy, umowa jest uważana za niezawartą,
                                    a konsument jest zwolniony z wszelkich zobowiązań. To, co strony
                                    świadczyły, ulega zwrotowi w stanie niezmienionym, chyba że zmiana
                                    była konieczna w granicach zwykłego zarządu. Zwrot powinien nastąpić
                                    nie później niż w terminie czternastu dni. Jeżeli konsument dokonał
                                    jakichkolwiek przedpłat, należą się od nich odsetki ustawowe od daty
                                    dokonania przedpłaty.
                                </li>
                                <li>
                                    Usługodawca/Sprzedawca dokona zwrotu na wskazany przez
                                    konsumenta numer rachunku bankowego. Informujemy, że nie
                                    przyjmujemy paczek za pobraniem.
                                </li>
                                <li>
                                    Termin czternastodniowy, w którym konsument może odstąpić od umowy,
                                    liczy się w przypadku Umowy Sprzedaży od dnia wydania Produktu,
                                    a gdy umowa dotyczy świadczenia Usługi
                                </li>
                            </ol>

                            <section className="complaints__pdf-file">
                                <p>Pobierz formularz zwrotu:</p>
                                <a href={refund_form} rel="noreferrer" target="_blank">
                                    <MdPictureAsPdf className="icon" />
                                </a>
                            </section>
                        </section>


                    </section>

                    <section className="complaints__complaints">

                        <button onClick={() => setIsComplaintsOpen(!isComplaintsOpen)}>Reklamacja</button>

                        <div className={isComplaintsOpen ? "complaints__content open" : "complaints__content"}>
                            <ol>
                                <li>
                                    Podstawa i zakres odpowiedzialności Sprzedawcy wobec Klienta będącego osobą
                                    fizyczną, który nabywa Produkt w celu niezwiązanym z działalnością zawodową
                                    lub gospodarczą, z tytułu niezgodności Produktu z Umową Sprzedaży są określone
                                    w szczególności ustawą o szczególnych warunkach sprzedaży konsumenckiej oraz
                                    o zmianie Kodeksu cywilnego z dnia 27 lipca 2002 r. (Dz. U. Nr 141, poz. 1176
                                    ze zm.)
                                </li>
                                <li>
                                    Sprzedawca ustosunkuje się do żądania Klienta nie później niż
                                    w terminie 14 dni. Odpowiedź w sprawie reklamacji jest wysyłana
                                    na podany przez Klienta adres, chyba że Klient poda inny sposób.
                                </li>
                                <li>
                                    W przypadku Produktów objętych również gwarancją Sprzedawca informuje,
                                    iż gwarancja na sprzedany towar konsumpcyjny nie wyłącza, nie ogranicza
                                    ani nie zawiesza uprawnień kupującego wynikających z niezgodności towaru
                                    z umową.
                                </li>
                            </ol>

                            <section className="complaints__pdf-file">
                                <p>Pobierz formularz zwrotu:</p>
                                <a href={complaint_form} rel="noreferrer" target="_blank">
                                    <MdPictureAsPdf className="icon" />
                                </a>
                            </section>

                        </div>

                    </section>

                </section>

            </section>
        </div >
    )
}



export default Complaints
