import HTMLSideNav from "../../components/HTMLSideNav";
import { Link } from "react-router";
export default function StructureDesign() {
    return (
        <>
            <main>
                <HTMLSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Projektowanie struktur</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                Na egzaminie nie musisz sam projektować układu strony - jest on podany na tacy. Kluczowe jest zrozumienie co autor polecenia egzaminacyjnego miał ma myśli. CKE często lekko modyfikuje określenia opisujące elementy
                                strony, aby wprowadzić Cię w zakłopotanie (jednocześnie sprawdzając twoją praktyczną wiedze).
                            </p>
                            <h3>Polecenia cechujące strone</h3>
                            <p>W tej sekcji jest opisanych kilka przykładów poleceń z sekcji "Cechy witryny", aby przetłumaczyć nieco bardziej oficjalny język na taki, który zrozumiesz.</p>
                            <div className="card" style={{ marginBottom: "1rem" }}>
                                <p>
                                    <b>Zapisany w języku HTML5</b>
                                </p>
                                <p>
                                    Określenie stosowane na strony napisane zgodnie ze strukturą opisaną w sekcji <Link to="/html/wprowadzenie/struktura">Struktura (HTML 5)</Link>
                                </p>
                            </div>
                            <div className="card" style={{ marginBottom: "1rem" }}>
                                <p>
                                    <b>Ustawiony język zawartości strony na polski</b>
                                </p>
                                <p>
                                    W elemencie <code>{"<html>"}</code> dopisz <code>{'lang="pl-PL"'}</code>. Wizualizacja:
                                </p>
                                <p>
                                    <pre>
                                        {`<!DOCTYPE html>
<html `}
                                        <mark style={{ fontFamily: "monospace" }}>{'lang="pl-PL"'}</mark>
                                        {`>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
    </body>
</html>`}
                                    </pre>
                                </p>
                            </div>
                            <div className="card" style={{ marginBottom: "1rem" }}>
                                <p>
                                    <b>Jawnie zastosowany właściwy standard kodowania polskich znaków</b>
                                </p>
                                <p>
                                    Dodaj do znacznika <code>head</code>:
                                </p>
                                <p>
                                    <code>{'<meta charset="UTF-8" />'}</code>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
