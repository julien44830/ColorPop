import type { Theme } from "../types/types";

export function applyTheme(theme: Theme) {
    const root = document.documentElement;
    window.dispatchEvent(new Event("theme:changed"));

    // commentaire en français : on met à jour les variables CSS du thème
    root.style.setProperty("--color-accent", theme.accent);
    root.style.setProperty("--color-accent-soft", theme.accentSoft);
    root.style.setProperty("--color-bg", theme.bg);
    root.style.setProperty("--color-text", theme.text);


    // on expose chaque couleur de la palette
    theme.palette.forEach((color, index) => {
        root.style.setProperty(`--theme-color-${index + 1}`, color);
    });

}


