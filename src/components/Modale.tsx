import "../styles/Modale.css";

interface ModaleProps {
    setModaleOne: React.Dispatch<React.SetStateAction<boolean>>;
    modaleOne: boolean;
    handleClick: () => void;
}

export default function Modale({
    setModaleOne,
    modaleOne,
    handleClick,
}: ModaleProps) {
    return (
        <section className="spinner-wrapper modale-wrapper">
            <p>Vous allez supprimer votre compte</p>{" "}
            <div className="action-modale">
                <button
                    onClick={() => setModaleOne(!modaleOne)}
                    className="close-modale"
                >
                    Annuler
                </button>
                <button
                    className="alerte alerte-btn"
                    onClick={() => {
                        setModaleOne(!modaleOne);
                        handleClick();
                    }}
                >
                    Suppression
                </button>
            </div>
        </section>
    );
}
