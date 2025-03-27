import ReactSideNav from "./../../components/ReactSideNav";

export default function Loops() {
    return (
        <>
            <main>
                <ReactSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Pętle</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Pętle w React.js najczęściej są wykorzystywane w celu renderowania listy elementów zapisanych w zmiennych komponentu.</p>
                            <p>
                                Istnieją różne typy pętli w React.js, lecz najpopularniejszą jest metoda <code>{".map()"}</code> użyta na tablicy elementów np. <code>{"itemList.map()"}</code>.
                            </p>
                            <pre className="code-block">
                                <header>jsx</header>
                                {`export default function App() {
    const [items, setItems] = useState([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
    ]);

    return <>
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </>
}
`}
                            </pre>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
