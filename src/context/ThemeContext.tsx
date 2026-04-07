// ThemeContext.tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ThemeColors = {
    accent: string; // ex: "oklch(60% 0.18 250)"
    bg: string;
    text: string;
};

type ThemeContextValue = {
    theme: ThemeColors;
    setThemeFromPalette: (palette: ThemeColors) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeColors>({
        accent: "oklch(60% 0.18 250)",
        bg: "oklch(98% 0.02 250)",
        text: "oklch(20% 0.03 250)",
    });

    // 🧠 met aussi à jour les variables CSS globales
    const setThemeFromPalette = (palette: ThemeColors) => {
        setTheme(palette);
        const root = document.documentElement;
        // on applique le nouveau thème au :root
        root.style.setProperty("--color-accent", palette.accent);
        root.style.setProperty("--color-bg", palette.bg);
        root.style.setProperty("--color-text", palette.text);
    };

    return (
        <ThemeContext.Provider value={{ theme, setThemeFromPalette }}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme doit être utilisé dans ThemeProvider");
    return ctx;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useTheme };
