export default function Parametre() {
    return (
        <section className="parametre">
            <h3>Parametre</h3>
            <ul className="ul-parametre">
                <li className="li-parametre">
                    <div className="checkbox-wrapper-2">
                        <p>Paramètre de cookies</p>
                        <select
                            name=""
                            id=""
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
                        />
                    </div>{" "}
                </li>
                <li className="li-parametre">
                    <div className="checkbox-wrapper-2">
                        <p className="alerte">Suppression du compte</p>

                        <button className="alerte">action irréversible</button>
                    </div>{" "}
                </li>
            </ul>
        </section>
    );
}
