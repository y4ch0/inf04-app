import ReactSideNav from "./../../components/ReactSideNav";
import Dialog from "../../components/Dialog";
import { useState } from "react";

export default function Intro() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    return (
        <>
            <main>
                <ReactSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="row">
                            <div className="col">
                                <h1>Tworzenie aplikacji</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                W tym momencie dostępne jest kilka metod tworzenia projektu w React.js, między innymi z użyciem komendy <code>npx create-react-app</code>, choć jest to metoda tworzenia projektu w dość ścisłym układzie. W przypadku
                                chęci rozwijania projektu i dodawania nowych <a onClick={() => setDialogOpen(true)}>zależności</a> do aplikacji zaleca się użycie serwera klienta <b>Vite</b> (w znacznej większości chętniej i częściej używany).
                            </p>
                            <p>
                                W przypadku egzaminu najlepszym sposobem jest tworzenie aplikacji w React'cie przy pomocy serwera klienta <b>Vite</b> używając komendy <code>npm create vite@latest</code>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Etapy tworzenia aplikacji w React.js przez Vite</h3>
                            <div className="process-list">
                                <ol className="process-list">
                                    <li className="step-item">
                                        <h4>Zainstaluj Node.js</h4>
                                        <p>
                                            Pobierz pakiet instalacyjny <a href="https://nodejs.org/en">Node.js</a> w najnowszej wersji i zainstaluj go na komputerze.
                                        </p>
                                        <p>
                                            <small>
                                                <b>Uwaga:</b> do poprawnego działania <u>po ukończonej instalacji</u> będzie wymagane ponowne uruchomienie komputera w celu umożliwienia wykorzystywania komend pakietu Node.js
                                            </small>
                                        </p>
                                    </li>
                                    <li className="step-item">
                                        <h4>Uruchom edytor kodu</h4>
                                        <p>Uruchom wybrany przez siebie edytor kodu z wbudowanym terminalem.</p>
                                        <p>
                                            <b>Proponowane edytory:</b>
                                        </p>
                                        <ul>
                                            <li>
                                                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                                            </li>
                                            <li>
                                                <a href="https://www.jetbrains.com/webstorm/">WebStorm</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="step-item">
                                        <h4>Uruchom terminal</h4>
                                        <p>W terminalu edytora kodu uruchom polecenie:</p>
                                        <p>
                                            <code>npm create vite@latest</code>
                                        </p>
                                    </li>
                                    <li className="step-item">
                                        <h4>Wybierz konfigurację projektu</h4>
                                        <p>Po uruchomieniu komendy rozpocznie się proces tworzenia aplikacji, zostaną wówczas zadane pytania odnośnie:</p>
                                        <ul>
                                            <li>Nazwy projektu (bez spacji, dozwolone są inne znaki jak kropka, podkreślenie, czy minus)</li>
                                            <li>
                                                Szablonu projektu (wybór dokonuje się strzałkami na klawiaturze). W tym przypadku interesuje nas szablon <b>React</b>
                                            </li>
                                            <li>Języka programowania (zależnie od preferencji - TypeScript, lub JavaScript. W warunkach egzaminacyjnych JavaScript w zupełności wystarczy)</li>
                                        </ul>
                                    </li>
                                    <li className="step-item">
                                        <h4>Zainstaluj wymagane moduły</h4>
                                        <p>Po poprawnym utworzeniu projektu w terminalu zostaną wypisane instrukcje co należy zrobić, aby aplikacja zaczęła działać.</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
                <h3>Zależności w React.js</h3>
                <p>
                    Zależności (dependencies) - Dodatkowy moduł funkcjonalności zainstalowany w późniejszym etapie tworzenia aplikacji. Są one tworzone przez użytkowników i udostępniane na stronie{" "}
                    <a href="https://www.npmjs.com/">https://www.npmjs.com/</a>
                </p>
            </Dialog>
        </>
    );
}
