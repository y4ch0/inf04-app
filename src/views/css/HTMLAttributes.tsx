import CSSSideNav from "../../components/CSSSideNav";

export default function HTMLAttributes() {
    return (
        <>
            <main>
                <CSSSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Właściwości elementów HTML</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Właściwości elementów HTML to atrybuty, które są przypisane do elementów HTML.</p>
                            <p>Właściwości elementów HTML są przypisane do elementu HTML w postaci pary klucz-wartość.</p>
                            <pre className="code-block">
                                <header>html</header>
                                {`<p class="paragraph" id="paragraph1">Lorem ipsum dolor sit amet.</p>`}
                            </pre>
                            <p>Wartością atrybutu klasy CSS może być dowolny ciąg znaków, który nie zawiera spacji.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
