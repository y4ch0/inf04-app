import HTMLSideNav from "../../components/HTMLSideNav";
import Dialog from "../../components/Dialog";
import { useState } from "react";
import { Link } from "react-router";

export default function Introduction() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    return (
        <>
            <main>
                <HTMLSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Wprowadzenie</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Co to HTML?</h2>
                            <p>
                                <b>HTML</b> jest standardowym językiem znaczników dla stron internetowych. Jego angielskie rozwinięcie to: HyperText Markup Language.
                            </p>
                            <p>
                                Wszystkie strony, które odwiedzasz bazują właśnie na tym języku - w mniej, lub bardziej <a onClick={() => setDialogOpen(true)}>zmodyfikowanej formie.</a>
                            </p>
                            <p>
                                Znaczniki HTML instruują przeglądarkę, co ma wyświetlić, w jaki sposób (coś na zasadzie „to jest nagłówek”, „to jest akapit”, „to jest link” itp.), oraz jak je modyfikować w pewnych przypadkach np. wyświetlanie strony
                                na urządzeniach mobilnych.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="summary-box">
                                <h4>Kluczowe informacje</h4>
                                <ul>
                                    <li>
                                        <b>HTML</b> (ang. HyperText Markup Language) jest językiem typu znacznikowego do tworzenia stron internetowych.
                                    </li>
                                    <li>
                                        <b>HTML instruuje przeglądarke</b> jak wyświetlić dany element, w którym miejscu, oraz informuje czytniki stron internetowych dla osób z niepełnosprawnościami jak wyświetlić daną zawartość.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
                <h3>Zmodyfikowana forma</h3>
                <p>Niektóre frameworki JavaScript (takie jak React.js, Angular, Vue.js) wykorzystują tzw. rozszerzenie JSX/TSX:</p>
                <p>
                    <cite>JSX to rozszerzenie składni JavaScriptu, które umożliwia pisanie znaczników podobnych do HTML wewnątrz pliku JavaScript.</cite>
                </p>
                <p>
                    Mówiąc prościej: Rozszerzenia JSX (wykorzystywane m.in. w React.js) umożliwiają "wkradanie" elementów HTML w kod JavaScript, aby wyświetlić jakieś dane w wygodniejszy sposób. Dokładniej te zagadnienie jest opisane w zbiorze{" "}
                    <Link to="/react/komponenty-logika">Logika komponentów</Link>.
                </p>
            </Dialog>
        </>
    );
}
