import ReactSideNav from "./../../components/ReactSideNav";

export default function Components() {
    return (
        <>
            <main>
                <ReactSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="row">
                            <div className="col">
                                <h1>Komponenty</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                React.js tworzy aplikacje przy użyciu tzw. komponentów. <b>Komponent</b> to plik z rozszerzeniem <code>.js</code>, <code>.ts</code>, <code>.jsx</code> lub <code>.tsx</code>, zawierający funkcję, która zwraca kod
                                podobny do HTML, wzbogacony o logikę w JavaScript lub TypeScript.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                Komponenty mają ściśle określoną strukturę i nie można ich traktować jak zwykłych plików HTML. Wynika to z mechanizmu renderowania, który przetwarza zmodyfikowany kod na czysty HTML, gotowy do wyświetlenia w
                                przeglądarce.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                Dodatkowo, w React.js zamiast atrybutu class stosuje się className. Zmiana ta wynika z faktu, że w JavaScript słowo "class" jest zarezerwowane dla definicji klas, co mogłoby powodować konflikty podczas interpretacji
                                kodu.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4>Przykład kodu komponentu w React.js</h4>
                            <div className="card">
                                <pre className="code-block">
                                    <header>jsx</header>
                                    {`export default function App() {
    return <>
        <h1>React.js App Component preview</h1>
        <p>You can edit code of this section to change its content.</p>
    </>
}`}
                                </pre>
                                <i>Alternatywnie może to być zapisane w sposób:</i>
                                <pre className="code-block">
                                    <header>jsx</header>
                                    {`function App() {
    return <>
        <h1>React.js App Component preview</h1>
        <p>You can edit code of this section to change its content.</p>
    </>
}

`}
                                    <mark style={{ fontFamily: "monospace" }}>{"export default App"}</mark>
                                    {" <- zmieniony fragment"}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                Ktoś zada sobie pytanie <cite>Co mogę utworzyć w tych komponentach?</cite>. Odpowiedź brzmi: wszystko. Od paska nawigacyjnego, przez poszczególne bloki zawartości strony, aż po dodatkowe elementy na stronie jak okna
                                dialogowe, kończąc na stopce strony.
                            </p>
                            <p>To w jaki sposób deweloper wykorzysta ten fakt jest tylko i wyłącznie jego decyzją.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
