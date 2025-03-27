import HTMLSideNav from "../../../components/HTMLSideNav";

export default function ExampleOne() {
    return (
        <>
            <main>
                <HTMLSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Przykładowe elementy</h1>
                            <h6>Zadanie egzaminacyjne</h6>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4>Arkusz egzaminacyjny</h4>
                            <div className="card">
                                <iframe src="https://www.praktycznyegzamin.pl/inf03ee09e14/praktyka/file/arkusze/2023/wiosna/inf_03_2023_06_02_SG_kolor.pdf" style={{ height: "600px" }}></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4>Poprawne wykonanie kodu HTML dla arkusza:</h4>
                            <pre>
                                {`<!DOCTYPE html>
<html lang="pl-PL">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Egzamin</title>
</head>

<body>
    <!-- Blok baneru strony -->
    <header>
        <h1>Dzisiejsze promocje naszego sklepu</h1>
    </header>
    <!-- Bloki główne strony -->
    <main>
        <article id="left">
            <h2>Taniej o 30%</h2>
            <!-- Lista wygenerowana skryptem PHP -->
            <ol>
                <li>Gumka do mazania</li>
                <li>Cienkopis</li>
                <li>Pisaki 60 szt.</li>
                <li>Markery 4 szt.</li>
            </ol>
        </article>
        <article id="middle">
            <h2>Sprawdź cenę</h2>
            <form action="index.php" method="post">
                <div>
                    <!-- Opcje listy wpisane na "sztywno" -->
                    <select name="discount_item" id="discount_item">
                        <option value="1">Gumka do mazania</option>
                        <option value="2">Cienkopis</option>
                        <option value="3">Pisaki 60 szt.</option>
                        <option value="4">Markery 4 szt.</option>
                    </select>
                    <button type="submit">SPRAWDŹ</button>
                </div>
            </form>
        </article>
        <article id="right">
            <h2>Kontakt</h2>
            <p>e-mail: <a href="mailto:bok@sklep.pl">bok@sklep.pl</a></p>
            <img src="promocja.png" alt="promocja">
        </article>
    </main>
    <!-- Stopka strony -->
    <footer>
        <h4>Autor strony: Numer zdającego</h4>
    </footer>
</body>

</html>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
