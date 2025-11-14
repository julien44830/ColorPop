// colorUtils.ts

// ⚠️ tous les commentaires sont en français

// normalise un hex du type #abc vers #aabbcc
function normalizeHex(hex: string): string {
  let h = hex.trim().toLowerCase();
  if (!h.startsWith("#")) h = "#" + h;
  if (h.length === 4) {
    const r = h[1];
    const g = h[2];
    const b = h[3];
    h = `#${r}${r}${g}${g}${b}${b}`;
  }
  return h;
}

// convertit un hex en objet HSL
export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const hNorm = normalizeHex(hex);
  const r = parseInt(hNorm.slice(1, 3), 16) / 255;
  const g = parseInt(hNorm.slice(3, 5), 16) / 255;
  const b = parseInt(hNorm.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }

  return { h, s, l };
}

function hueToRgb(p: number, q: number, t: number) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

// convertit un HSL vers hex
export function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s = Math.min(Math.max(s, 0), 1);
  l = Math.min(Math.max(l, 0), 1);

  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l; // gris
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const hh = h / 360;
    r = hueToRgb(p, q, hh + 1 / 3);
    g = hueToRgb(p, q, hh);
    b = hueToRgb(p, q, hh - 1 / 3);
  }

  const toHex = (x: number) => {
    const v = Math.round(x * 255);
    const s2 = v.toString(16).padStart(2, "0");
    return s2;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}


// retourne #000000 ou #ffffff selon la luminosité
export function getContrastColor(hex: string): string {
  const h = normalizeHex(hex);
  const r = parseInt(h.slice(1, 3), 16);
  const g = parseInt(h.slice(3, 5), 16);
  const b = parseInt(h.slice(5, 7), 16);

  // formule de luminosité "perçue" (YIQ)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  //si c'est clair on met du texte noir, sinon texte blanc
  return yiq >= 128 ? "#000000" : "#ffffff";
}