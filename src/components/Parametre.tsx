import { useState } from "react";
import Spinner from "./Spinner";
import Modale from "./Modale";

export default function Parametre() {
    const [spinnerOn, setSpinnerOn] = useState(false);
    console.log("%c⧭", "color: #ff0000", spinnerOn);

    const spinner = () => {
        setSpinnerOn(true);
        setTimeout(() => {
            setSpinnerOn(false);
        }, 1000);
    };

    const handleClick = () => {
        spinner();
    };

    const [modaleOne, setModaleOne] = useState(false);

    return (
        <section className="parametre">
            {spinnerOn && <Spinner />}
            {modaleOne && (
                <Modale
                    setModaleOne={setModaleOne}
                    modaleOne={modaleOne}
                    handleClick={handleClick}
                />
            )}
            <h3>Parametre</h3>
            <ul
                className={`ul-parametre ${spinnerOn || modaleOne ? "filter" : ""}`}
            >
                <li className="li-parametre">
                    <div className="checkbox-wrapper-2">
                        <p>Paramètre de cookies</p>
                        <select
                            name=""
                            id=""
                            onChange={handleClick}
                        >
                            <option value="">tout les cookies</option>
                            <option value="">
                                cookies strictement nécessaires
                            </option>
                            <option value="">cookies de performance</option>
                            <option value="">tout refuser</option>
                        </select>
                    </div>{" "}
                </li>
                <li className="li-parametre">
                    <div className="checkbox-wrapper-2">
                        <p>Activer la localisation </p>

                        <input
                            type="checkbox"
                            className="sc-gJwTLC ikxBAC"
                            onChange={handleClick}
                        />
                    </div>{" "}
                </li>
                <li className="li-parametre">
                    <div className="checkbox-wrapper-2">
                        <p>
                            Suprimer les donnée collecter à la fermeture du site
                        </p>

                        <input
                            type="checkbox"
                            className="sc-gJwTLC ikxBAC"
                            onChange={handleClick}
                        />
                    </div>{" "}
                </li>
                <li className="li-parametre">
                    <div className="checkbox-wrapper-2">
                        <p className="alerte">Suppression du compte</p>

                        <button
                            onClick={() => setModaleOne(!modaleOne)}
                            className="alerte alerte-btn"
                        >
                            action irréversible
                        </button>
                    </div>{" "}
                </li>
            </ul>
        </section>
    );
}
