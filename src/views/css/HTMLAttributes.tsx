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
                            <p>Zależnie od tego jaki element jest aktualnie stylowany można zastosować różne właściwości stylowania.</p>
                            <p>
                                Przykładem tutaj jest zmiany stylu <code>pointer-events: ...</code> wyłącznie na elementach, z którymi mogą podjąć interakcje użytkownicy.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
