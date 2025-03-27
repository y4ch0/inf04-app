import { Link, useLocation } from "react-router";

export default function HTMLSideNav() {
    const location = useLocation();
    const links = [
        {
            label: "Wprowadzenie",
            path: "/html/wprowadzenie",
            children: [
                {
                    label: "Struktura (HTML 5)",
                    path: "/html/wprowadzenie/struktura",
                },
                {
                    label: "Znaczniki",
                    path: "/html/wprowadzenie/znaczniki",
                },
            ],
        },
        {
            label: "Projektowanie struktur",
            path: "/html/projektowanie-struktur",
            children: [
                {
                    label: "Przykładowe elementy",
                    path: "/html/projektowanie-struktur/przyklady",
                },
            ],
        },
        {
            label: "Sztuczki dla programisty",
            path: "/html/sztuczki-programisty",
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

                            {link.children && link.children.length > 0 && (
                                <ul>
                                    {link.children.map((child, childIndex) => (
                                        <li key={childIndex} className={isCurrent(child.path) ? "current" : ""}>
                                            <Link to={child.path}>{child.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
