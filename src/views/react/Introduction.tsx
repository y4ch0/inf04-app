import ReactSideNav from "./../../components/ReactSideNav";

export default function Intro() {
    return (
        <>
            <main>
                <ReactSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="row">
                            <div className="col">
                                <h1>Wprowadzenie</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>React jest wykorzystywany do tworzenia interfejsów aplikacji internetowych, oraz przy użyciu wersji React Native również do tworzenia aplikacji mobilnych.</p>
                            <p>
                                Według specyfikacji technicznej <b>React to biblioteka JavaScript</b>, a nie tak jak wiele osób błędnie myśli - framework.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4>Różnice między biblioteką, a frameworkiem</h4>
                            <p>React jest określany jako biblioteka, a nie framework, przede wszystkim dlatego, że skupia się wyłącznie na warstwie widoku (UI) i nie narzuca całościowej struktury aplikacji.</p>
                            <p>
                                Dostarcza narzędzia do budowania i aktualizowania interfejsu użytkownika, ale nie oferuje wbudowanych rozwiązań dla routingu, zarządzania stanem czy obsługi zapytań HTTP. Programista sam decyduje, które zewnętrzne
                                narzędzia (np. React Router, Redux) wykorzystać, aby uzupełnić aplikację o te funkcje.
                            </p>
                            <p>
                                W bibliotece to Ty kontrolujesz przepływ aplikacji - sam decydujesz, kiedy wywołać funkcje Reacta (np. renderowanie komponentu). W przypadku frameworków to framework wywołuje Twój kod, narzucając określony sposób
                                budowania aplikacji.
                            </p>
                            <p>Reasumując React jest biblioteką, ponieważ jego główne zadanie polega na efektywnym renderowaniu interfejsów użytkownika, pozostawiając inne aspekty budowy aplikacji do decyzji i implementacji przez programistę.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
