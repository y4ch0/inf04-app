import HTMLSideNav from "../../components/HTMLSideNav";
import { Link } from "react-router";

export default function ProgrammerMagic() {
    return (
        <>
            <main>
                <HTMLSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Sztuczki dla programisty</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Aby ułatwić sobie życie, oraz drogę do zdania egzaminu można bazować na prostych schematach układu strony.</p>
                            <p>Analizując arkusze egzaminacyjne na przestrzeni lat można zauważyć powtarzalność: układy stron są praktycznie takie same, tylko ze zmienioną zawartością.</p>
                            <p>
                                Plusem jest to, że CKE w arkuszach egzaminacyjnych prowadzi zdającego za rączkę, dyktując dosłownie cały układ strony oraz style CSS, jakie należy zastosować. Problem się pojawia kiedy zdający nie do końca rozumie
                                polskich określeń na anglojęzyczne znaczniki oraz selektory w HTML i CSS.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Układ strony w HTML</h3>
                            <p>Żywy przykład z egzaminu:</p>
                            <blockquote>
                                <cite>Podział strony na bloki: na górze baner, poniżej bloki: lewy, środkowy i prawy oraz na dole blok stopki. [...]</cite>
                                <p>
                                    <small>Z egzaminu INF.03-02-23.06-SG</small>
                                </p>
                            </blockquote>
                            <p>W tym momencie można już zaprojektować sobie układ strony w HTML:</p>
                            <ul>
                                <li>
                                    <cite>na górze baner</cite> - blok <code>header</code>
                                </li>
                                <li>
                                    <cite>poniżej bloki: lewy, środkowy i prawy</cite> - blok <code>main</code> wraz z trzema blokami <code>article</code> z odpowiednimi ID/klasami
                                </li>
                                <li>
                                    <cite>na dole blok stopki</cite> - blok <code>footer</code>
                                </li>
                            </ul>
                            <p>Wizualizacja w kodzie HTML:</p>
                            <pre>
                                {`<!-- Blok baneru strony -->
<header></header>
<!-- Bloki główne strony -->
<main>
    <article id="left"></article>
    <article id="middle"></article>
    <article id="right"></article>
</main>
<!-- Stopka strony -->
<footer></footer>`}
                            </pre>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Stylowanie elementów w CSS</h3>
                            <small>
                                <i>Na podstawie tego samego arkusza - INF.03-02-23.06-SG</i>
                            </small>
                            <p>Polecenia egzaminacyjne i rozwiązania:</p>
                            <div className="card" style={{ marginBottom: "30px" }}>
                                <p>
                                    <cite>Domyślne formatowanie wszystkich selektorów: krój czcionki Georgia i wyrównanie tekstu do środka</cite>{" "}
                                    <Link to="/html/sztuczki-programisty#note-1" className="button outlined small">
                                        Notatka
                                    </Link>
                                </p>
                                <pre>{`* {
    font-family: "Georgia";
    text-align: center;
}`}</pre>
                            </div>
                            <div className="card" style={{ marginBottom: "30px" }}>
                                <cite>Dla banera i stopki: kolor tła #4BA3C7, biały kolor czcionki, wysokość 80 px, rozmiar czcionki 120%</cite>
                                <pre>{`header, footer {
    background-color: #4BA3C7;
    color: white;
    height: 80px;
    font-size: 120%;
}`}</pre>
                            </div>
                            <div className="card" style={{ marginBottom: "30px" }}>
                                <cite>Dla panelu lewego i prawego: kolor tła #EFEFEF wysokość 400 px, szerokość 25%</cite>
                                <pre>{`#left, #right {
    background-color: #EFEFEF;
    height: 400px;
    width: 25%;
}`}</pre>
                            </div>
                            <div className="card" style={{ marginBottom: "30px" }}>
                                <cite>Dla panelu środkowego: kolor tła #90CAF9, wysokość 400 px, szerokość 50%</cite>
                                <pre>{`#middle {
    background-color: #90CAF9;
    height: 400px;
    width: 50%;
}`}</pre>
                            </div>
                            <div className="card" style={{ marginBottom: "30px" }}>
                                <cite>Dla selektora tabeli: margines zewnętrzny lewy 10 px, szerokość 90%, obramowanie linią ciągłą o szerokości 1 px i kolorze #90CAF9</cite>
                                <pre>{`table {
    margin-left: 10px;
    width: 90%;
    border: 1px solid #90CAF9;
}`}</pre>
                            </div>
                            <div className="card" style={{ marginBottom: "30px" }}>
                                <cite>Dla selektora komórek tabeli: marginesy wewnętrzne 5 px, obramowanie komórek tabeli linią ciągłą o szerokości 1 px i kolorze #90CAF9</cite>
                                <pre>{`td, th {
    padding: 5px;
    border: 1px solid #90CAF9;
}`}</pre>
                            </div>
                            <div className="card" style={{ marginBottom: "30px" }}>
                                <cite>Po wskazaniu kursorem myszy dowolnego wiersza tabeli zostaje zmieniony kolor tekstu w tym wierszu na #90CAF9</cite>
                                <pre>{`table tr:hover {
    color: #90CAF9;
}`}</pre>
                            </div>
                            <div className="card">
                                <cite>Dla selektora pola edycyjnego: margines zewnętrzny górny i dolny 15 px</cite>
                                <pre>{`input {
    margin-top: 15px;
    margin-bottom: 15px;
}`}</pre>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" id="note-1">
                            <p>
                                Warto zwrócić uwagę na pewien zapis, jaki CKE stosuje w arkuszach egzaminacyjnych. Wiele osób myli polecenie <cite>Domyślne formatowanie wszystkich selektorów [...]</cite> i zapisuje kod CSS jako:
                            </p>
                            <p>
                                <pre>{`body {
    ...
}`}</pre>
                            </p>
                            <p>
                                Jest to zapis <b>błędny</b>. Prawda - zastosuje się do wszystkiego co widzimy, lecz nie spełnia to wymagań polecenia i dokumentacji technicznej CSS. Zapisanie takiego stylowania w znaczniku <code>body</code> zapisze te
                                właściwości dla widocznych dla użytkownika elementów, a nie dla wszystkich selektorów w całym dokumencie HTML.
                            </p>
                            <p>
                                Użycie selektora CSS <code>{`* {...}`}</code> spełni wymogi zadania egzaminacyjnego, ponieważ zastosuje to stylowanie dla dosłownie <u>wszystkich elementów w dokumencie HTML</u>. Z perspektywy programisty logicznym
                                rozwiązaniem byłoby zrobienie tego przez selektor <code>body</code>, lecz polecenie CKE wyraźnie wskazuje na to, czego trzeba użyć i warto mieć to na uwadze.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
