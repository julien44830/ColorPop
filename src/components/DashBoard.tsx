import { useState } from "react";

export default function DashBoard() {
    const [buttonNameState, setButtonNameState] = useState("evenement");
    console.log("%c⧭", "color: #00a3cc", buttonNameState);

    return (
        <section className="dashboard">
            <h1>visualisation test</h1>
            <div className="dashboard-article-wrapper">
                <article className="dashboard-article-list">
                    <h2>tableau de board</h2>
                    <ul>
                        <li>
                            <img
                                src="logo/calendrier.png"
                                alt=""
                            />{" "}
                            <button
                                onClick={() => setButtonNameState("evenement")}
                            >
                                Evenements
                            </button>{" "}
                        </li>
                        <li>
                            <img
                                src="logo/analyse-des-donnees.png"
                                alt=""
                            />{" "}
                            <button
                                onClick={() => setButtonNameState("analyse")}
                            >
                                Analises
                            </button>{" "}
                        </li>
                        <li>
                            <img
                                src="logo/parametres.png"
                                alt=""
                            />{" "}
                            <button
                                onClick={() => setButtonNameState("parametre")}
                            >
                                Paramètres
                            </button>{" "}
                        </li>
                        <li>
                            <img
                                src="logo/question-signe-en-cercles.png"
                                alt=""
                            />{" "}
                            <button onClick={() => setButtonNameState("aide")}>
                                Aide
                            </button>{" "}
                        </li>
                    </ul>
                </article>
                <div>
                    <article className="dashboard-article">
                        <h2>{buttonNameState}</h2>
                    </article>
                </div>
            </div>
        </section>
    );
}
