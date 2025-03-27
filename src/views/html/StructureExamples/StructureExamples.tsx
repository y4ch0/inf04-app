import HTMLSideNav from "../../../components/HTMLSideNav";
import { Link } from "react-router";
export default function StructureExamples() {
    const tests = [
        {
            label: "Czerwiec 2023 (1)",
            testSignature: "INF.03-2023-06.01-SG",
        },
        {
            label: "Czerwiec 2023 (2)",
            testSignature: "INF.03-2023-06.02-SG",
        },
    ];
    return (
        <>
            <main>
                <HTMLSideNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <h1>Przykładowe elementy</h1>
                            <h6>Egzaminy</h6>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                Na poniższych podstronach prezentowane będą <u>wyłącznie poprawne rozwiązania dotyczące układu strony HTML</u>.
                            </p>
                            <div className="block-cards small">
                                {tests.map((item) => (
                                    <Link to={"/html/projektowanie-struktur/przyklady/" + item.testSignature} className="card shadow l-radius no-border" key={item.label}>
                                        <h4>{item.label}</h4>
                                        <h6>{item.testSignature}</h6>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
