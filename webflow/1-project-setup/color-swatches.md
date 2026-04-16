# La Finca de Villa — Webflow Color Swatches

Create these swatches in **Webflow Style Manager → Colors**.
Name them exactly as shown — they match the CSS variables in head-custom-code.html.

---

## Dark / Structural

| Swatch Name    | Hex       | Used For |
|----------------|-----------|----------|
| Green Dark     | `#004D35` | Navbar, footer, story/values/social sections |
| Green Mid      | `#006847` | Menu sub-nav background, border accents |
| Green Light    | `#2E8B57` | Icon accents, placeholder icons |

## Action / Accent

| Swatch Name    | Hex       | Used For |
|----------------|-----------|----------|
| Red            | `#CE1126` | Primary buttons, badges, icon accents |
| Red Dark       | `#A80D1E` | Button hover state |
| Gold           | `#C8972A` | Section labels on dark bg, taglines, logo areas |

## Backgrounds

| Swatch Name    | Hex       | Used For |
|----------------|-----------|----------|
| White          | `#FFFFFF` | Main page background, cards |
| BG Tint        | `#F0FAF5` | Alternating section backgrounds |
| BG Border      | `#D4EDDA` | Card borders, dividers, table lines |

## Typography

| Swatch Name    | Hex       | Used For |
|----------------|-----------|----------|
| Text Dark      | `#111111` | Headings (h1–h4) |
| Text Mid       | `#333333` | Body copy, descriptions |
| Text Light     | `#666666` | Captions, metadata, hours notes |

## Social Buttons (hard-coded, not swatches)

| Platform  | Hex       |
|-----------|-----------|
| Instagram | `#E1306C` |
| Facebook  | `#1877F2` |

---

## Typography Settings

Go to **Project Settings → Fonts** and add:

| Font              | Weights to load       | Use |
|-------------------|-----------------------|-----|
| Playfair Display  | 400, 400 Italic, 600, 700 | All headings (H1–H4), menu item names |
| Lato              | 300, 400, 700         | All body text, nav links, buttons |
| Dancing Script    | 600                   | Section labels only (.section-label) |

---

## Shadow Styles (add as Class presets)

| Name       | Value |
|------------|-------|
| Shadow SM  | `0 2px 8px rgba(0,0,0,0.10)` |
| Shadow MD  | `0 4px 20px rgba(0,0,0,0.16)` |
| Shadow LG  | `0 8px 40px rgba(0,0,0,0.22)` |

---

## Border Radius

All cards, images, buttons: **8px**
Badges / tags: **3px**
Social icon circles: **50%**
