import { Link } from "react-router";
import Header from "./components/Header";

export default function App() {
    const chapters = [
        {
            label: "HTML",
            icon: (
                <>
                    <i className="bi bi-filetype-html"></i>
                </>
            ),
            iconStyling: {
                fontSize: "2.25rem",
                width: "3.5rem",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.65rem",
                color: "rgba(214, 51, 132, 1)",
                backgroundColor: "rgba(214, 51, 132, 0.1)",
            },
            description: "Język znaczników do tworzenia struktury dokumentów internetowych",
            path: "/html/wprowadzenie",
            children: [
                {
                    label: "Wprowadzenie",
                    path: "/html/wprowadzenie",
                },
                {
                    label: "Struktura",
                    path: "/html/wprowadzenie/struktura",
                },
                {
                    label: "Znaczniki",
                    path: "/html/wprowadzenie/znaczniki",
                },
                {
                    label: "Projektowanie struktur",
                    path: "/html/projektowanie-struktur",
                },
                {
                    label: "Przykładowe elementy",
                    path: "/html/projektowanie-struktur/przyklady",
                },
                {
                    label: "Sztuczki dla programisty",
                    path: "/html/sztuczki-programisty",
                },
            ],
        },
        {
            label: "CSS",
            path: "/css/wprowadzenie",
            icon: (
                <>
                    <i className="bi bi-filetype-css"></i>
                </>
            ),
            iconStyling: {
                fontSize: "2.25rem",
                width: "3.5rem",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.65rem",
                color: "rgba(102, 51, 153, 1)",
                backgroundColor: "rgba(102, 51, 153, 0.1)",
            },
            description: "Arkusze stylów do opisywania wyglądu dokumentu HTML",
            children: [
                {
                    label: "Wprowadzenie",
                    path: "/css/wprowadzenie",
                },
                {
                    label: "Klasy, a identyfikatory",
                    path: "/css/klasy-identyfikatory",
                },
                {
                    label: "Właściwości elementów HTML",
                    path: "/css/wlasciwosci-elementow-html",
                },
                {
                    label: "Egzaminacyjne określenia właściwości CSS",
                    path: "/css/egzamin-wlasciwosci",
                },
            ],
        },
        {
            label: "JavaScript",
            path: "/js/wprowadzenie",
            icon: (
                <>
                    <i className="bi bi-filetype-js"></i>
                </>
            ),
            iconStyling: {
                fontSize: "2.25rem",
                width: "3.5rem",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.65rem",
                color: "rgba(219, 199, 72, 1)",
                backgroundColor: "rgba(219, 199, 72, 0.1)",
            },
            description: "Język skryptowy do tworzenia dynamicznych stron internetowych",
            children: [
                {
                    label: "Wprowadzenie",
                    path: "/js/wprowadzenie",
                },
                {
                    label: "Zmienne",
                    path: "/js/zmienne",
                },
                {
                    label: "Interakcja z elementami HTML",
                    path: "/js/interakcja-html",
                },
                {
                    label: "Selektory wyboru elementów HTML",
                    path: "/js/selektory-html",
                },
            ],
        },
        {
            label: "React",
            path: "/react/wprowadzenie",
            icon: (
                <>
                    <i className="bi bi-filetype-jsx"></i>
                </>
            ),
            iconStyling: {
                fontSize: "2.25rem",
                width: "3.5rem",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.65rem",
                color: "rgba(97, 218, 251, 1)",
                backgroundColor: "rgba(97, 218, 251, 0.1)",
            },
            description: "Biblioteka JavaScript do tworzenia interfejsów użytkownika",
            children: [
                {
                    label: "Wprowadzenie",
                    path: "/react/wprowadzenie",
                },
                {
                    label: "Tworzenie aplikacji",
                    path: "/react/tworzenie-aplikacji",
                },
                {
                    label: "Komponenty",
                    path: "/react/komponenty",
                },
                {
                    label: "Logika w komponentach",
                    path: "/react/komponenty-logika",
                },
                {
                    label: "Pętle",
                    path: "/react/petle",
                },
                {
                    label: "Formularze (pobieranie danych od użytkownika)",
                    path: "/react/formularze",
                },
            ],
        },
        {
            label: "Bootstrap",
            path: "/bootstrap/wprowadzenie",
            icon: (
                <>
                    <i className="bi bi-bootstrap-fill"></i>
                </>
            ),
            iconStyling: {
                fontSize: "2.25rem",
                width: "3.5rem",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.65rem",
                color: "rgba(131, 18, 250, 1)",
                backgroundColor: "rgba(131, 18, 250, 0.1)",
            },
            description: "Framework CSS do tworzenia responsywnych stron internetowych",
            children: [
                {
                    label: "Wprowadzenie",
                    path: "/bootstrap/wprowadzenie",
                },
                {
                    label: "Układ strony",
                    path: "/bootstrap/uklad-strony",
                },
                {
                    label: "Komponenty",
                    path: "/bootstrap/komponenty",
                },
                {
                    label: "Klasy stylowania",
                    path: "/bootstrap/klasy",
                },
            ],
        },
    ];
    return (
        <>
            <main>
                <div className="wrapper">
                    <div className="row"></div>
                    <div className="row">
                        <div className="col card no-border no-padding centered">
                            <h1 id={"website-heading"} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                Przygotuj się na <Header />
                            </h1>
                            <p>
                                Strona zawiera podstawowe informacje określone w wymaganiach egzaminacyjnych dla egzaminu zawodowego z oznaczeniem <b>INF.04</b>, oraz częściowo dla egzaminu <b>INF.03</b> w częściach praktycznych ww. egzaminów.
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <h3>Zakres materiału</h3>
                            <p>Wybierz zakres materiału z poniższego zbioru, lub użyj paska nawigacyjnego.</p>
                            <div className="block-cards">
                                {chapters.map((link, index) => (
                                    <Link key={index} to={link.path} className="card shadow no-border l-radius inline">
                                        <div>
                                            <p style={link.iconStyling}>{link.icon}</p>
                                        </div>
                                        <div>
                                            <h3>{link.label}</h3>
                                            <small>{link.description}</small>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <p>
                                W szczególności bazowano na umiejętnościach określonych w <b>podstawie programowej kształcenia w zawodach szkolnictwa branżowego przyporządkowanych do branży teleinformatycznej (INF)</b>;{" "}
                                <a href="https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20190000991/O/D20190991-08.pdf">Akt prawny (od strony 44)</a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Źródła informacji</h3>
                            <p>Informacje umieszczone na stronie pochodzą ze źródeł:</p>
                            <ul>
                                <li>
                                    <a href="https://www.w3schools.com/">https://www.w3schools.com/</a>
                                </li>
                                <li>
                                    <a href="https://zpe.gov.pl/">https://zpe.gov.pl/</a>
                                </li>
                                <li>
                                    <a href="https://cke.gov.pl/">https://cke.gov.pl/</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Informacje techniczne o stronie</h3>
                            <div className="table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Opis</th>
                                            <th>Wartość</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Wykorzystana technologia front-end</td>
                                            <td>React.js v19 + React Router v7</td>
                                        </tr>
                                        <tr>
                                            <td>Wykorzystana technologia CSS/JS</td>
                                            <td>
                                                Modernify (autor: y4ch0 |{" "}
                                                <a href="https://y4ch0.github.io/Modernify/" target="_blank">
                                                    Github
                                                </a>
                                                )
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Źródła wiedzy</td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <a href="https://www.w3schools.com/" title="Podstawowa wiedza techniczna.">
                                                            https://www.w3schools.com/
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://zpe.gov.pl/" title="Źródła edukacyjne.">
                                                            https://zpe.gov.pl/
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://cke.gov.pl/" title="Wymagane umiejętności od ucznia.">
                                                            https://cke.gov.pl/
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
