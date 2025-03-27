import { Link, useLocation } from "react-router";

export default function HTMLSideNav() {
    const location = useLocation();
    const links = [
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
    ];
    const isCurrent = (path: string) => location.pathname === path;
    return (
        <>
            <nav className="side-nav">
                <ul className="nav">
                    {links.map((link, index) => (
                        <li key={index} className={isCurrent(link.path) ? "current" : ""}>
                            <Link to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
