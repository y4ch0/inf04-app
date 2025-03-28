import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Navbar() {
    const [navbarDisplay, setNavbarDisplay] = useState("flex");

    const changeNavbarVisibility = () => {
        setNavbarDisplay(navbarDisplay === "none" ? "flex" : "none");
    };
    const width = window.innerWidth;
    useEffect(() => {
        if (width <= 768) {
            setNavbarDisplay("none");
        }
    }, [width]);
    const navbarLinks = [
        {
            label: "HTML",
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
                    label: "Formularze",
                    path: "/react/formularze",
                },
            ],
        },
        {
            label: "Bootstrap",
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
        {
            label: "Egzamin",
            children: [
                {
                    label: "Rozwiązania egzaminów",
                    path: "/egzamin/rozwiazania",
                },
            ],
        },
    ];
    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <Link to="/" className="website-logo">
                            <img src="https://cdn.jsdelivr.net/gh/y4ch0/Modernify/logo.svg" alt="" />
                        </Link>
                    </div>
                    <ul id="nav-menu" className="nav" style={{ display: navbarDisplay }}>
                        <button className="nav-collapse" onClick={changeNavbarVisibility}>
                            &times;
                        </button>
                        {navbarLinks.map((item) => (
                            <li key={item.label}>
                                <div className="dropdown">
                                    <a href="#" className="toggler">
                                        {item.label}
                                    </a>
                                    <ul>
                                        {item.children.map((subitem) => (
                                            <li key={subitem.label}>
                                                <Link to={subitem.path}>{subitem.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="nav-collapse" onClick={changeNavbarVisibility}>
                        &equiv;
                    </button>
                </div>
            </nav>
        </>
    );
}
