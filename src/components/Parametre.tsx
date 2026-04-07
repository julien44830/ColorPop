import { useState } from "react";
import Spinner from "./Spinner";

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

    return (
        <section className="parametre">
            {spinnerOn && <Spinner />}
            <h3>Parametre</h3>
            <ul className={`ul-parametre ${spinnerOn ? "filter" : ""}`}>
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
                            onClick={handleClick}
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
