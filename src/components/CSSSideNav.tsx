import { Link, useLocation } from "react-router";

export default function HTMLSideNav() {
    const location = useLocation();
    const links = [
        {
            label: "Wprowadzenie",
            path: "/css/wprowadzenie",
            children: [],
        },
        {
            label: "Klasy, a identyfikatory",
            path: "/css/klasy-identyfikatory",
        },
        {
            label: "Właściwości elementów HTML",
            path: "/css/wlasciwosci-html",
        },
        {
            label: "Egzaminacyjne określenia właściwości CSS",
            path: "/css/egzamin-css",
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
