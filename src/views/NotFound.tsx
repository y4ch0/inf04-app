import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <main>
                <div className="wrapper">
                    <div className="row">
                        <div className="col card no-border no-padding centered">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/91d52475-1788-4638-a5aa-d1eefcde9419/dgh8wbo-9e88be27-fe1a-41e4-aee3-3678c472a74e.png" height={40} />
                            <h1>Kurza twarz!</h1>
                            <h2>Nie znalazłem strony, której szukasz.</h2>
                            <p>Sprawdź, czy jesteś pewien, że link zawiera poprawną pisownie, lub nie chcesz uzyskać dostępu do strony, która już nie istnieje.</p>
                            <p>Jest jeszcze opcja, że strona nadal jest w budowie, a strona, którą próbujesz zobaczyć jest jeszcze nie ukończona. Popracuje nad tym, słowo!</p>
                            <p>
                                <Link to="/" className="button primary small">
                                    Powrót do strony głównej »
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
