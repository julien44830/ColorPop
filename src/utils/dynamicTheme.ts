// dynamicTheme.ts

import type { Theme } from "./../types/types";
import { hexToHsl, hslToHex } from "./colorUtils";

// génère un thème complet à partir d'une couleur hex saisie
export function buildThemeFromBaseHex(baseHex: string): Theme {
  const { h, s, l } = hexToHsl(baseHex);

  // commentaire en français : couleur complémentaire (hue + 180°)
  const compH = (h + 180) % 360;

  // déclinaisons autour de la couleur de base
  const lighter = hslToHex(h, s * 0.7, Math.min(l + 0.18, 0.98));
  const darker = hslToHex(h, s, Math.max(l - 0.18, 0.05));
  const complement = hslToHex(compH, s, l);
  const complementSoft = hslToHex(compH, s * 0.5, Math.min(l + 0.25, 0.98));

  const palette = [baseHex, lighter, darker, complement, complementSoft];

  // commentaire en français : on utilise la couleur claire comme fond
  const bg = complement;
  // commentaire en français : texte foncé pour garder du contraste
  const text = "#111111";

  return {
    id: "dynamic",
    name: "Depuis l'input",
    palette,
    accent: baseHex,
    accentSoft: "rgba(0, 0, 0, 0.06)", // tu peux raffiner si tu veux
    bg,
    text,
  };
}

