import { useState } from "react";
import Evenement from "./Evenement";
import Analyse from "./Analyse";
import Parametre from "./Parametre";
import Aide from "./Aide";

export default function DashBoard() {
    const [buttonNameState, setButtonNameState] = useState("evenement");

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
                        {buttonNameState === "evenement" && <Evenement />}
                        {buttonNameState === "analyse" && <Analyse />}
                        {buttonNameState === "parametre" && <Parametre />}
                        {buttonNameState === "aide" && <Aide />}
                    </article>
                </div>
            </div>
        </section>
    );
}
