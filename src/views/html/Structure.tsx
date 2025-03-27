import HTMLSideNav from "../../components/HTMLSideNav";
import Dialog from "../../components/Dialog";
import { useState } from "react";
import { Link } from "react-router";

export default function Structure() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    return (
        <>
            <main>
                <HTMLSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Struktura (HTML 5)</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>To nie jest tak (w pewnym sensie), że stronę możemy napisać tak, jak my chcemy. W języku HTML zostały wyznaczone pewne reguły co jest używane do czego.</p>
                            <p>Kluczową zasadą podczas tworzenia bazowego dokumentu HTML jest jego struktura, która "wzorcowo" wygląda następująco:</p>
                            <p>
                                <pre>
                                    {`<!DOCTYPE html>
<html>
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
                            <p>To co tutaj widzimy, to bazowa struktura dokumentu HTML, która zawiera:</p>
                            <ul>
                                <li>
                                    <abbr title="Wskazuje on przeglądarce jak ma interpretować ten plik.">
                                        Znacznik <code>{`<!DOCTYPE html>`}</code>
                                    </abbr>
                                </li>
                                <li>
                                    <abbr title="'Kontener' dla znaczników HTML, aby utworzyć strone, przygotować ją i wyświetlić.">
                                        Znacznik <code>{`<html></html>`}</code>
                                    </abbr>
                                </li>
                                <li>
                                    <abbr title="W tym znaczniku są opisane zmienne konfigurujące strone HTML np. podpięcie plików arkuszy stylowania CSS, czy skryptów JavaScript.">
                                        Znacznik <code>{`<head></head>`}</code>
                                    </abbr>
                                </li>
                                <li>
                                    <abbr title="W tym znaczniku umieszczamy zawartość strony, czyli znaczniki nawigacji, nagłówków, paragrafów, czy tabeli.">
                                        Znacznik <code>{`<body></body>`}</code>
                                    </abbr>
                                </li>
                            </ul>
                            <p>
                                <b>Ważne:</b> Bazowa struktura pliku HTML nie może zostać opisana w inny sposób - jest to jedyna metoda zapisu bazowego pliku HTML, która zostanie poprawnie odczytana
                                przez przeglądarke.
                            </p>
                            <p>
                                Tworząc podstawowy dokument HTML nie można zapomnieć o kilku dodatkowych elementach w sekcji <code>{"<head></head>"}</code>:
                            </p>
                            <ul>
                                <li>
                                    <code>{'<meta charset="UTF-8" />'}</code> informuje przeglądarke o kodowaniu znaków na stronie. Najbardziej uniwersalnym jest UTF-8, gdyż obsługuje on praktycznie
                                    wszystkie znaki większości języków świata.
                                </li>
                                <li>
                                    <code>{'<meta name="viewport" content="width=device-width, initial-scale=1.0" />'}</code> zapewnia poprawne zachowanie responsywnej strony internetowej.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="summary-box">
                                <h4>Kluczowe informacje</h4>
                                <ul>
                                    <li>
                                        <b>Tworząc plik strony internetowej</b> należy to robić zgodnie z bazową strukturą dokumentu HTML 5.
                                    </li>
                                    <li>
                                        <b>Bazowa struktura dokumentu HTML</b> składa się z 4 elementów: znacznika {"<!DOCTYPE html>"}, znacznika {"<html></html>"},znacznika {"<head></head>"}, oraz
                                        znacznika {"<body></body>"}.
                                    </li>
                                    <li>
                                        <b>Podążaj za ustalonymi regułami</b> podczas tworzenia dokumentu HTML. Jeżeli plik zostanie źle utworzony może to spowodować nieprawidłowości w przyszłym
                                        działaniu strony.
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
                    Mówiąc prościej: Rozszerzenia JSX (wykorzystywane m.in. w React.js) umożliwiają "wkradanie" elementów HTML w kod JavaScript, aby wyświetlić jakieś dane w wygodniejszy sposób.
                    Dokładniej te zagadnienie jest opisane w zbiorze <Link to="/react/komponenty-logika">Logika komponentów</Link>.
                </p>
            </Dialog>
        </>
    );
}
