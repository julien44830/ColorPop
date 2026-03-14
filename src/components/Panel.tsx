export function Panel({ displayPanel }: { displayPanel: boolean }) {
    return (
        <div
            className={`test-panel-wrapper ${displayPanel ? "test-panel-wrapper-open" : ""}`}
        >
            <div className="test-panel">
                <h2>Panel de test</h2>
                <p>
                    Ce panel utilise les variables CSS du thème actif, tu peux
                    tester la lisibilité de ta palette dessus.
                </p>
            </div>
        </div>
    );
}
