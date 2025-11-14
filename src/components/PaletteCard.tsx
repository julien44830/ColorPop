// PaletteCard.tsx
import { useTheme } from "../context/ThemeContext";

type PaletteCardProps = {
    name: string;
    accent: string;
    bg: string;
    text: string;
};

export function PaletteCard({ name, accent, bg, text }: PaletteCardProps) {
    const { setThemeFromPalette } = useTheme();

    // 🎨 quand on clique sur la carte, on applique cette palette au thème global
    const handleClick = () => {
        setThemeFromPalette({ accent, bg, text });
    };

    return (
        <button
            className="palette-card"
            onClick={handleClick}
            style={
                {
                    // on utilise les couleurs de la palette pour prévisualiser
                    "--accent-preview": accent,
                    "--bg-preview": bg,
                    "--text-preview": text,
                } as React.CSSProperties
            }
        >
            <div className="palette-name">{name}</div>
            <div className="swatches">
                <span className="swatch swatch-accent" />
                <span className="swatch swatch-bg" />
                <span className="swatch swatch-text" />
            </div>
        </button>
    );
}
