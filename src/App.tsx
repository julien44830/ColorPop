// App.tsx

import { type FormEvent, useEffect, useState } from "react";
import { PRESET_THEMES } from "./presets/presets";
import { applyTheme } from "./utils/applyTheme";
import { ThemeCard } from "./components/ThemeCard";
import type { Theme } from "./types/types";
import { buildThemeFromBaseHex } from "./utils/dynamicTheme";
import { getContrastColor } from "./utils/colorUtils";
import { Background } from "./components/Background";

function App() {
    const [baseHex, setBaseHex] = useState("#df3079");
    const [generatedPalette, setGeneratedPalette] = useState<string[]>(
        PRESET_THEMES[2].palette
    );
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    // thème par défaut au chargement
    useEffect(() => {
        applyTheme(PRESET_THEMES[0]);
    }, []);

    // quand on clique sur "Appliquer"
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const themeFromInput: Theme = buildThemeFromBaseHex(baseHex);

        // on met à jour la palette de la carte
        setGeneratedPalette(themeFromInput.palette);

        // on applique le thème à la page
        applyTheme(themeFromInput);
    };

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
        <>
            <Background />
            <main className="app">
                {/* section : carte qui affiche la palette générée */}
                <div className="palette-card-container ">
                    <div className="palette-card">
                        <form
                            onSubmit={handleSubmit}
                            className="form-color-input "
                        >
                            <div>
                                <label>
                                    {/* input color lié à baseHex */}
                                    Couleur de base :
                                    <input
                                        type="color"
                                        value={baseHex}
                                        onChange={(e) =>
                                            setBaseHex(e.target.value)
                                        }
                                    />
                                </label>

                                <input
                                    type="text"
                                    value={baseHex}
                                    onChange={(e) => setBaseHex(e.target.value)}
                                    placeholder="#df3079"
                                />
                            </div>

                            {/* bouton qui génère la palette et le thème */}
                            <button type="submit">Appliquer</button>
                        </form>

                        <div className="palette-title">Palette générée</div>
                        <div className="palette-swatches theme-card-swatches">
                            {generatedPalette.map((color) => (
                                <span
                                    key={color}
                                    className="swatch"
                                    style={{
                                        backgroundColor: color,
                                        color: getContrastColor(color),
                                    }}
                                    onClick={() => copyColor(color)}
                                    title="Clique pour copier"
                                >
                                    <p>{color}</p>
                                    {/* petit feedback “Copié !” */}
                                    {copiedColor === color && (
                                        <span className="copied-badge">
                                            Copié !
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <section className="theme-card">
                </section> */}

                {/* section : thèmes prédéfinis */}
                <section className="preset-themes">
                    <h1>Thèmes prêts à l'emploi</h1>
                    <div className="preset-flex">
                        {PRESET_THEMES.map((theme: Theme) => (
                            <ThemeCard
                                key={theme.id}
                                theme={theme}
                                onSelect={() => {
                                    // clic sur une carte = appliquer ce thème
                                    applyTheme(theme);
                                    setGeneratedPalette(theme.palette);
                                    setBaseHex(theme.accent);
                                }}
                            />
                        ))}
                    </div>
                </section>

                {/* section : input + bouton */}
            </main>
        </>
    );
}

export default App;
