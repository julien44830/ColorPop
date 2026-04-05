import DashBoard from "./DashBoard";

export function Panel({ displayPanel }: { displayPanel: boolean }) {
    return (
        <div
            className={`test-panel-wrapper ${displayPanel ? "test-panel-wrapper-open" : ""}`}
        >
            <div className="test-panel">
                <DashBoard />
            </div>
        </div>
    );
}
