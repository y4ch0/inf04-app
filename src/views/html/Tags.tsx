import HTMLSideNav from "../../components/HTMLSideNav";
import Dialog from "../../components/Dialog";
import { useState } from "react";

export default function Structure() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    return (
        <>
            <main>
                <HTMLSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Znaczniki</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                Jak wcześniej zostało wspomniane kod HTML bazuje na znacznikach. Ważne jest, aby używać ich zgodnie z opisem w dokumentacji technicznej HTML, czyli np. nie używać
                                znaczników <code>&lt;p&gt;</code> do tworzenia tabeli.
                            </p>
                            <p>Spis najważniejszych znaczników w HTML (w kolejności ważności znacznika):</p>
                            <div className="table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Znacznik</th>
                                            <th>Opis</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>h1-h6</td>
                                            <td>Nagłówki na stronie - oddzielają poszczególne sekcje strony, aby wskazać, co w danym momencie jest opisywane.</td>
                                        </tr>
                                        <tr>
                                            <td>p</td>
                                            <td>Paragraf, czyli inaczej blok tekstu.</td>
                                        </tr>
                                        <tr>
                                            <td>span</td>
                                            <td>Zaznaczenie fragmentu tekstu. Pomocne przy stylowaniu konkretnego fragmentu tekstu w bloku tekstu przy pomocy CSS.</td>
                                        </tr>
                                        <tr>
                                            <td>nav</td>
                                            <td>Znacznik wykorzystywany do utworzenia paska nawigacyjnego strony.</td>
                                        </tr>
                                        <tr>
                                            <td>main</td>
                                            <td>Znacznik wykorzystywany do wskazania zawartości głównej strony.</td>
                                        </tr>
                                        <tr>
                                            <td>aside</td>
                                            <td>
                                                Znacznik używany do wyświetlenia bloku zawartości powiązanej z głównym tekstem, np. zawierający notatki, lub uwagi odnośnie aktualnie poruszonego
                                                tematu.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>article</td>
                                            <td>Wydzielenie pojedynczego wiersza treści w układzie strony.</td>
                                        </tr>
                                        <tr>
                                            <td>section</td>
                                            <td>Wydzielenie kolumny w wierszu układu strony.</td>
                                        </tr>
                                        <tr>
                                            <td>footer</td>
                                            <td>Stopka strony - w niej wskazuje się autora strony, prawa autorskie, czy odnośniki do poszczególnych elementów strony.</td>
                                        </tr>
                                        <tr>
                                            <td>div</td>
                                            <td>
                                                Zamiennik znaczników <code>nav, main, aside, article, section, footer</code>.{" "}
                                                <span className="details-mark" title="Więcej informacji." onClick={() => setDialogOpen(true)}>
                                                    i
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Zgodnie z wymaganiami egzaminacyjnymi uczeń:</p>
                            <blockquote>{"1) posługuje się hipertekstowymi językami znaczników (HTML − HyperText Markup Language)"}</blockquote>
                            <p>Oraz:</p>
                            <blockquote>
                                {
                                    "1) korzysta ze standardów dokumentów hipertekstowych; 2) stosuje znaczniki języka HTML; 3) definiuje strukturę dokumentu hipertekstowego korzystając ze znaczników sekcji; 4) definiuje hierarchię treści stosując znaczniki nagłówków i paragrafu; 5) definiuje elementy strony internetowej: listy, tabele, obrazy, odnośniki, kontrolki"
                                }
                            </blockquote>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="summary-box">
                                <h4>Kluczowe informacje</h4>
                                <ul>
                                    <li>
                                        <b>HTML 5 posiada kilka ważnych znaczników:</b> <code>h1-h6, p, span, nav, main, aside, article, section, footer, oraz div</code>.
                                    </li>
                                    <li>
                                        <b>Każdy ze znaczników</b> musi być używany zgodnie z jego opisem w dokumentacji technicznej, aby zagwarantować poprawne działanie strony.
                                    </li>
                                    <li>
                                        <b>Znacznik "div" może zastąpić inne</b>, lecz wymogiem jest, aby na egzaminie stosować <u>wszystkie</u> znaczniki sekcji oraz hierarchi strony.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
                <h3>Div - podział strony</h3>
                <p>
                    Rzadko kiedy spotyka się, aby bardziej zaawansowane strony używały konsekwentnie wszystkich znaczników podstawowego układu strony w HTML (częściej wykorzystuje się same znaczniki{" "}
                    <code>nav, main, footer, div</code>). Często deweloperzy programujący takie strony wykorzystują do stylowania i odpowiedniego zachowania selektorów CSS, o których mowa w innym
                    segmencie.
                </p>
            </Dialog>
        </>
    );
}
