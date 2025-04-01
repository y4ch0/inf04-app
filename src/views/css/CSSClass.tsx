import CSSSideNav from "../../components/CSSSideNav";

export default function CSSClass() {
    return (
        <>
            <main>
                <CSSSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Klasy, a identyfikatory CSS</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Klasa CSS to atrybut HTML, który pozwala na przypisanie stylu do elementu HTML, który powtarza się wielokrotnie na pojedynczej stronie.</p>
                            <p>Wartość atrybutu klasy CSS to zbiór klas CSS, które są oddzielone spacjami, a w wieloskładnikowe nazwach (zawierające kilka wyrazów) każde słowo oddziela się myślnikiem (minusem).</p>
                            <pre className="code-block">
                                <header>html</header>
                                {`<p class="paragraph text-bold paragraph-heading ">Lorem ipsum dolor sit amet.</p>`}
                            </pre>
                            <p>Wartością atrybutu klasy CSS może być dowolny ciąg znaków, który nie zawiera spacji.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Różnice pomiędzy selektorami, klasami, a identyfikatorami</h3>
                            <div className="card" style={{ marginBottom: "20px" }}>
                                <h4>
                                    <abbr title={`Alternatywnie można się spotkać z określeniem "selektora"`}>Nazwa elementu HTML</abbr>
                                </h4>
                                <p>
                                    Kiedy chcemy zmieniać styl wszystkich elementów HTML o wskazanej nazwie/selektorze np.{" "}
                                    <code>
                                        {"p { ... }"}, {"input { ... }"}, {"header { ... }"}
                                    </code>
                                </p>
                            </div>
                            <div className="card" style={{ marginBottom: "20px" }}>
                                <h4>Nazwa klasy CSS</h4>
                                <p>Kiedy chcemy zmieniać styl elementów HTML, które mają w zbiorze klas CSS tą wskazaną, np.:</p>
                                <pre className="code-block">
                                    <header>html</header>
                                    {`<p class="paragraph-heading">Lorem ipsum dolor sit amet.</p>
<p class="paragraph-heading">Lorem ipsum dolor sit amet.</p>
<p class="paragraph-heading">Lorem ipsum dolor sit amet.</p>`}
                                </pre>
                                <p>Wówczas stylowanie takiego elementu wyglądałoby następująco:</p>
                                <pre className="code-block">
                                    <header>css</header>
                                    {`.paragraph-heading {
    font-weight: bold;
    font-size: 1.2rem;
    font-family: serif;
}`}
                                </pre>
                            </div>
                            <div className="card">
                                <h4>Nazwa identyfikatora elementu</h4>
                                <p>Kiedy chcemy zmienić styl elementu HTML, który jest oznaczony podanym "ID".</p>
                                <pre className="code-block">
                                    <header>html</header>
                                    {`<p id="user-count-header">User count:</p>`}
                                </pre>
                                <p>Wówczas stylowanie takiego elementu wyglądałoby następująco:</p>
                                <pre className="code-block">
                                    <header>css</header>
                                    {`#user-count-header {
    font-weight: bold;
    font-size: 1.2rem;
    font-family: sans-serif;
    text-align: center;
}`}
                                </pre>{" "}
                                <p>
                                    <b>Ważne:</b> Według dokumentacji technicznej zaleca się, aby używanie atrybutu <code>id=...</code> ograniczało się do wskazania <u>pojedynczego, niepowtarzalnego</u> elementu na danej pojedynczej stronie HTML.
                                    Zatem tak jak w przypadku klas CSS wskazujemy tam elementy, które występują kilka razy w jednym pliku HTML, tak w przypadku atrybutu <code>id=...</code> robimy to tylko raz.
                                </p>
                                <p>
                                    <a href="https://www.w3schools.com/html/html_id.asp" target="_blank" className="button primary small">
                                        Źródło »
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
