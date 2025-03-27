import CSSSideNav from "../../components/CSSSideNav";

export default function Introduction() {
    return (
        <>
            <main>
                <CSSSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Wprowadzenie</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>CSS (ang. Cascading Style Sheet) to pliki stylów pozwalające na wizualne (oraz zachowawcze) dostosowanie elementów HTML.</p>
                            <p>CSS bazuje na nazwach elementów HTML, nazwach klas CSS, oraz identyfikatorów.</p>
                            <pre>{`selektor { 
    ...styl elementu HTML... 
}`}</pre>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                W CSS aby móc modyfikować stylowanie danego elementu należy wpierw wskazać <b>selektor</b>, np. nazwa elementu HTML, nazwa klasy CSS, lub nazwa identyfikatora elementu.
                            </p>
                            <p>Kiedy użyć czego?</p>
                            <div className="card" style={{ marginBottom: "20px" }}>
                                <h4>Nazwa elementu HTML</h4>
                                <p>
                                    Kiedy chcemy zmieniać styl wszystkich elementów HTML o wskazanej nazwie np.{" "}
                                    <code>
                                        {"p { ... }"}, {"input { ... }"}, {"header { ... }"}
                                    </code>
                                </p>
                            </div>
                            <div className="card" style={{ marginBottom: "20px" }}>
                                <h4>Nazwa klasy CSS</h4>
                                <p>Kiedy chcemy zmieniać styl elementów HTML, które mają w zbiorze klas CSS tą wskazaną, np.:</p>
                                <pre>{`<p class="paragraph-heading">Lorem ipsum dolor sit amet.</p>`}</pre>
                                <pre>{`<p class="paragraph-heading">Lorem ipsum dolor sit amet.</p>`}</pre>
                                <pre>{`<p class="paragraph-heading">Lorem ipsum dolor sit amet.</p>`}</pre>
                                <p>Wówczas stylowanie takiego elementu wyglądałoby następująco:</p>
                                <pre>{`.paragraph-heading {
    font-weight: bold;
    font-size: 1.2rem;
    font-family: serif;
}`}</pre>
                            </div>
                            <div className="card">
                                <h4>Nazwa identyfikatora elementu</h4>
                                <p>Kiedy chcemy zmienić styl elementu HTML, który jest oznaczony podanym "ID".</p>
                                <pre>{`<p id="user-count-header">User count:</p>`}</pre>
                                <p>Wówczas stylowanie takiego elementu wyglądałoby następująco:</p>
                                <pre>{`#user-count-header {
    font-weight: bold;
    font-size: 1.2rem;
    font-family: sans-serif;
    text-align: center;
}`}</pre>{" "}
                                <p>
                                    <b>Ważne:</b> Według dokumentacji technicznej zaleca się, aby używanie atrybutu <code>id=...</code> ograniczało się do wskazania <u>pojedynczego, niepowtarzalnego</u> elementu na danej pojedynczej stronie HTML.
                                    Zatem tak jak w przypadku klas CSS wskazujemy tam elementy, które występują kilka razy w jednym pliku HTML, tak w przypadku atrybutu <code>id=...</code> robimy to tylko raz.
                                </p>
                                <p>
                                    <a href="https://www.w3schools.com/html/html_id.asp" className="button outlined small">
                                        Źródło
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
