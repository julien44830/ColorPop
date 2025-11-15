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

    // commentaire en français : style du bouton en fonction du thème
    const buttonStyle: React.CSSProperties = {
        backgroundColor: theme.accent,
        color: getContrastColor(theme.accent),
        border: "none",
        borderRadius: "12px",
        padding: "0.35rem 0.9rem",
        marginTop: "0.9rem",
        cursor: "pointer",
        fontSize: "0.9rem",
        fontWeight: 500,
        boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
        // légère transparence si tu veux garder l'effet "verre"
        // backgroundColor: theme.accent + "cc" // si tu veux bidouiller en hexa
    };

    const copyColor = async (hex: string) => {
        try {
            await navigator.clipboard.writeText(hex);
            setCopiedColor(hex);
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
                        {copiedColor === color && (
                            <span className="copied-badge">Copié !</span>
                        )}
                    </span>
                ))}
            </div>

            {/* commentaire en français : bouton dont le texte s'adapte au thème */}
            <button
                onClick={onSelect}
                style={buttonStyle}
            >
                Tester
            </button>
        </div>
    );
}
