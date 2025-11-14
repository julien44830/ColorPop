// Background.tsx
import { useEffect, useRef } from "react";
import { MorphShape } from "./MorphShape";
import "./background.css";

export function Background() {
    // ref vers le conteneur du background
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // fonction qui rejoue l'animation one-shot
        const triggerOnce = () => {
            const el = containerRef.current;
            if (!el) return;

            // on enlève puis on remet la classe pour redémarrer l'animation
            el.classList.remove("bg-animate-once");
            // forcer un reflow pour que le navigateur "voie" la suppression
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            el.offsetWidth;
            el.classList.add("bg-animate-once");

            setTimeout(() => {
                el.classList.remove("bg-animate-once");
            }, 700);
        };

        // 1) animation au chargement
        triggerOnce();

        // 2) animation à chaque changement de thème
        const handler = () => triggerOnce();
        window.addEventListener("theme:changed", handler);

        return () => {
            window.removeEventListener("theme:changed", handler);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-decor"
        >
            <div className="bg-shape bg-circle" />
            <div className="bg-shape bg-rectangle move" />
            <MorphShape />
            <div className="bg-shape bg-triangle floating" />
        </div>
    );
}
