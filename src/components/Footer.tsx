export default function Footer() {
    return (
        <>
            <footer>
                <div className="wrapper">
                    <p>© 2025 y4ch0 | INF.03, INF.04 - Materiały przygotowawcze</p>
                    <p>Materiały macierzyste umieszczone na stronie podlegają licencji typu Creative Commons lub w przypadku użycia materiałow zewnętrznych ich oryginalnej licencji.</p>
                    <p>
                        <a property="dct:title" rel="cc:attributionURL" href="https://y4ch0.github.io/inf04-app/#/">
                            INF.03, INF.04 - Materiały przygotowawcze
                        </a>{" "}
                        by{" "}
                        <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/y4ch0">
                            y4ch0
                        </a>{" "}
                        is licensed under{" "}
                        <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{ display: "inline-block" }}>
                            CC BY-SA 4.0
                            <img style={{ height: "22px", marginLeft: "3px", verticalAlign: "text-bottom" }} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="" />
                            <img style={{ height: "22px", marginLeft: "3px", verticalAlign: "text-bottom" }} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="" />
                            <img style={{ height: "22px", marginLeft: "3px", verticalAlign: "text-bottom" }} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt="" />
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
}
