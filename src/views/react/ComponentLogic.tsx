import ReactSideNav from "./../../components/ReactSideNav";

export default function ComponentLogic() {
    return (
        <>
            <main>
                <ReactSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Logika w komponentach</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                W React.js kluczowym aspektem tworzenia aplikacji jest zrozumienie, jak w komponentach umieszczać logikę odpowiadającą za zarządzanie stanem i reagowanie na interakcje użytkownika. W praktyce oznacza to, że komponenty
                                nie tylko renderują interfejs, ale także zawierają kod, który decyduje o ich zachowaniu.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4>Struktura komponentów i oddzielenie logiki</h4>
                            <p>
                                Typowym podejściem jest rozdzielenie komponentu na część prezentacyjną (odpowiadającą wyłącznie za renderowanie interfejsu) i kontenerową (zarządzającą logiką i stanem). Przykładowo, w komponencie kontenerowym możesz
                                pobierać dane z API, przetwarzać je, a następnie przekazywać do komponentu prezentacyjnego przez propsy. Taki podział ułatwia zarówno ponowne użycie kodu, jak i testowanie – logikę można testować niezależnie od sposobu
                                wyświetlania danych.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4>Przykłady wykorzystania hooków</h4>
                            <p>Od wersji 16.8 Reacta, hooki stały się głównym sposobem zarządzania stanem i efektami ubocznymi w komponentach funkcyjnych.</p>
                            <ul>
                                <li>
                                    <p>
                                        <b>useState</b> pozwala na definiowanie zmiennych stanu. Przykładowo, możesz stworzyć licznik, który zwiększa się po kliknięciu przycisku:
                                    </p>
                                    <pre className="code-block">
                                        <header>jsx</header>
                                        {`export default function Button() {
    const [count, setCount] = useState(0);
    
    return <button onClick={setCount(count + 1)}>Liczba kliknięć: {count}</button>
}`}
                                    </pre>
                                    <p>
                                        Została tutaj zainicjalizowana stała, która zawiera dwa parametry: <code>count</code> oraz <code>setCount</code>. Parametr <code>count</code> odpowiada za przechowywanie przypisanej wartości, a{" "}
                                        <code>setCount</code> do jej zmiany.
                                    </p>
                                    <p>
                                        W przypadku chęci zmiany przypisanej wartości należy użyć sformułowania <code>setCount({"<wartosc>"})</code>, a nie (tak jak w przypadku klasycznego JavaScriptu) <code>count = {"<wartosc>"}</code>.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <b>useEffect</b> umożliwia wykonywanie efektów ubocznych, np. pobieranie danych po pierwszym renderze. Dzięki temu możesz, np. wywołać zapytanie do API i zaktualizować stan, gdy odpowiedź zostanie odebrana:
                                    </p>
                                    <pre className="code-block">
                                        <header>jsx</header>
                                        {`useEffect(() => {
  fetchData().then(data => setData(data));
}, []);`}
                                    </pre>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4>Logika warunkowa i optymalizacja renderowania</h4>
                            <p>
                                Logika w komponentach obejmuje także warunkowe renderowanie elementów. Używając instrukcji warunkowych lub operatorów logicznych, możesz dynamicznie decydować, które fragmenty interfejsu mają być wyświetlone, w
                                zależności od stanu aplikacji. Przykładowo, jeśli dana zmienna stanu <code>isLoggedIn</code> jest prawdziwa, możesz wyświetlić panel użytkownika, a w przeciwnym razie - formularz logowania.
                            </p>
                            <p>
                                Optymalizacja renderowania to kolejny techniczny aspekt, na który warto zwrócić uwagę. Mechanizmy takie jak <b>memoizacja</b> (np. z użyciem <code>React.memo</code> czy hooka <code>useMemo</code>) pozwalają unikać
                                niepotrzebnych renderów komponentów, co jest istotne przy budowaniu bardziej złożonych aplikacji. Dzięki temu, przy każdym cyklu renderowania, React porównuje poprzednie i aktualne wartości propsów lub stanu,
                                decydując, czy rzeczywiście trzeba przerysować dany komponent.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
