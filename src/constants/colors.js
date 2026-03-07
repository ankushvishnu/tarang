// ─────────────────────────────────────────────
//  THEME SWITCHER
//  Change ACTIVE_THEME to switch the whole site.
//  Options: "royal" | "modern" | "mystic"
// ─────────────────────────────────────────────
export const ACTIVE_THEME = "mystic"; // ← "royal" | "modern" | "mystic"

const THEMES = {
  royal: {
    pageBg:          "#F9F7F2",
    sectionAlt:      "#F3EFE6",
    cardBg:          "rgba(255,252,245,0.88)",
    cardBorder:      "rgba(197,148,52,0.25)",
    cardBorderHover: "rgba(197,148,52,0.5)",
    headerBg:        "#1A1A1B",
    headerTop:       "#111111",
    footerBg:        "#1A1A1B",
    text:            "#1A1A1B",
    textMid:         "#3a3128",
    textLight:       "#6b5c44",
    textInverse:     "#F9F7F2",
    textMuted:       "rgba(249,247,242,0.55)",
    accent:          "#C59434",
    accentLight:     "rgba(197,148,52,0.15)",
    accentBorder:    "rgba(197,148,52,0.3)",
    accentHover:     "#d4a843",
    marqueesBg:      "#1A1A1B",
    marqueesText:    "rgba(249,247,242,0.80)",
    btnPrimary:      "linear-gradient(135deg, #C59434, #d4a843)",
    btnPrimaryText:  "#1A1A1B",
    btnOutline:      "#C59434",
    orb:             "rgba(197,148,52,0.10)",
    noteColor:       "#C59434",
    noteOpacity:     0.10,
    searchBg:        "rgba(255,252,245,0.12)",
    divider:         "#E8E0D0",
  },

  modern: {
    pageBg:          "#FFFFFF",
    sectionAlt:      "#F5F5F5",
    cardBg:          "rgba(255,255,255,0.92)",
    cardBorder:      "rgba(75,0,130,0.18)",
    cardBorderHover: "rgba(75,0,130,0.4)",
    headerBg:        "#1A1A2E",
    headerTop:       "#12122A",
    footerBg:        "#1A1A2E",
    text:            "#1A1A1B",
    textMid:         "#2a2a3a",
    textLight:       "#555577",
    textInverse:     "#FFFFFF",
    textMuted:       "rgba(255,255,255,0.55)",
    accent:          "#FF8C00",
    accentLight:     "rgba(255,140,0,0.12)",
    accentBorder:    "rgba(255,140,0,0.3)",
    accentHover:     "#ff9d1a",
    marqueesBg:      "#1A1A2E",
    marqueesText:    "rgba(255,255,255,0.80)",
    btnPrimary:      "linear-gradient(135deg, #FF8C00, #ff9d1a)",
    btnPrimaryText:  "#FFFFFF",
    btnOutline:      "#4B0082",
    orb:             "rgba(75,0,130,0.08)",
    noteColor:       "#4B0082",
    noteOpacity:     0.08,
    searchBg:        "rgba(255,255,255,0.10)",
    divider:         "#E0E0E0",
  },

  mystic: {
    // Deep Aubergine base — feels like premium velvet instrument case
    pageBg:          "#F5F0FF",       // Very light lavender page bg
    sectionAlt:      "#EDE6FA",       // Slightly deeper lavender for alt sections
    cardBg:          "rgba(255,255,255,0.82)",
    cardBorder:      "rgba(212,175,55,0.30)",   // Antique Gold borders
    cardBorderHover: "rgba(212,175,55,0.60)",

    headerBg:        "#2E1A47",       // Deep Aubergine
    headerTop:       "#1E1030",       // Deeper for top bar
    footerBg:        "#2E1A47",

    text:            "#1E1030",       // Near-black purple for body text
    textMid:         "#3d2460",
    textLight:       "#7a5fa0",
    textInverse:     "#E6E6FA",       // Lavender Mist
    textMuted:       "rgba(230,230,250,0.55)",

    accent:          "#FF9933",       // Vibrant Saffron — CTA action color
    accentLight:     "rgba(255,153,51,0.14)",
    accentBorder:    "rgba(255,153,51,0.35)",
    accentHover:     "#ffaa44",

    gold:            "#D4AF37",       // Antique Gold — borders, icons, badges
    goldLight:       "rgba(212,175,55,0.15)",
    goldBorder:      "rgba(212,175,55,0.35)",

    lavender:        "#E6E6FA",       // Lavender Mist — secondary text / dividers

    marqueesBg:      "#2E1A47",
    marqueesText:    "rgba(230,230,250,0.85)",

    btnPrimary:      "linear-gradient(135deg, #FF9933, #ffaa44)",
    btnPrimaryText:  "#1E1030",
    btnOutline:      "#FF9933",

    orb:             "rgba(212,175,55,0.12)",
    noteColor:       "#D4AF37",
    noteOpacity:     0.10,
    searchBg:        "rgba(230,230,250,0.10)",
    divider:         "rgba(212,175,55,0.25)",
  },
};

const COLORS = THEMES[ACTIVE_THEME];

// Backward-compat aliases
COLORS.lavenderLight = COLORS.sectionAlt;
COLORS.lavenderMid   = COLORS.accent;
COLORS.lavenderSoft  = COLORS.sectionAlt;
COLORS.lavenderDeep  = COLORS.accent;
COLORS.lavenderMuted = COLORS.accentHover;
COLORS.dark          = COLORS.headerBg;
COLORS.darkMid       = ACTIVE_THEME === "royal" ? "#2a2218"
                     : ACTIVE_THEME === "modern" ? "#12122A"
                     : "#1E1030";

export default COLORS;
