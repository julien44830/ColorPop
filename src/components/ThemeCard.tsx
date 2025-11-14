// ThemeCard.tsx

import type { Theme } from "../types/types";
import { getContrastColor } from "../utils/colorUtils";
import { useState } from "react";

type ThemeCardProps = {
    theme: Theme;
    onSelect: () => void;
};

export function ThemeCard({ theme, onSelect }: ThemeCardProps) {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const style = {
        "--card-bg": theme.bg,
        "--card-border": theme.accent,
        "--card-shadow": "rgba(0,0,0,0.12)",
    } as React.CSSProperties;

    // ⬇️ copie dans le presse-papier
    const copyColor = async (hex: string) => {
        try {
            await navigator.clipboard.writeText(hex);
            setCopiedColor(hex);

            // efface l’indication après 1 seconde
            setTimeout(() => setCopiedColor(null), 1000);
        } catch (err) {
            console.error("Impossible de copier :", err);
        }
    };

    return (
        <div
            className="theme-card"
            style={style}
        >
            <div className="theme-card-title">{theme.name}</div>

            <div className="theme-card-swatches">
                {theme.palette.map((color: string) => (
                    <span
                        key={color}
                        className="swatch"
                        style={{
                            backgroundColor: color,
                            color: getContrastColor(color),
                            cursor: "pointer",
                            position: "relative",
                        }}
                        onClick={() => copyColor(color)}
                        title="Clique pour copier"
                    >
                        <p>{color}</p>

                        {/* petit feedback “Copié !” */}
                        {copiedColor === color && (
                            <span className="copied-badge">Copié !</span>
                        )}
                    </span>
                ))}
            </div>

            <button onClick={onSelect}>Tester</button>
        </div>
    );
}
