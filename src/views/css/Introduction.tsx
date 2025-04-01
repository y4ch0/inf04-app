import { Link } from "react-router";
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
                            <pre className="code-block">
                                <header>css</header>
                                {`selektor { 
    ...styl elementu HTML... 
}`}
                            </pre>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                W CSS aby móc modyfikować stylowanie danego elementu należy wpierw wskazać <b>selektor</b>, np. nazwa elementu HTML, nazwa klasy CSS, lub nazwa identyfikatora elementu.
                            </p>
                            <h3>Kiedy użyć czego?</h3>
                            <p>
                                Szczegółowo to zagadnienie jest opisane w zbiorze <Link to="/css/klasy-identyfikatory">Klasy, a identyfikatory</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
