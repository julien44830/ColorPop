// theme.ts (ou dans ton App.tsx)

// types.ts

// 🧠 structure d'un thème de couleur
export type Theme = {
  id: string;
  name: string;
  palette: string[];   // 5 couleurs (hex)
  accent: string;      // couleur principale du thème
  accentSoft: string;  // accent transparent pour les cartes
  bg: string;          // fond de page
  text: string;        // couleur de texte principale
};

// 🧠 applique le thème sur le :root via des variables CSS
// theme.ts
// 🧠 applique le thème via des variables CSS globales
export function applyTheme(theme: Theme) {
  const root = document.documentElement;

  // commentaire en français : on met à jour les variables CSS du thème
  root.style.setProperty("--color-accent", theme.accent);
  root.style.setProperty("--color-accent-soft", theme.accentSoft);
  root.style.setProperty("--color-bg", theme.bg);
  root.style.setProperty("--color-text", theme.text);
}

