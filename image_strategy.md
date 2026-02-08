# Visual & Image Asset Strategy - Switch Labs

This document defines the visual language and specifications for all images, illustrations, and icons used in the Switch Labs website to ensure a cohesive "Heavy-Duty Tech" aesthetic.

## 1. Core Visual Theme: "Precision Power"
The visual style should bridge the gap between **Industrial Robustness** and **Futuristic Clean Tech**. 

- **Key Moods:** Powerful, Reliable, Geometric, Advanced, Sustainable.
- **Atmosphere:** Deep gunmetal environments contrasted with sharp, piercing primary brand blue highlights.

---

## 2. Color System Integration
Every image asset must adhere to the following palette (Updated to match logo):

| Element | Color | Usage in Assets |
| :--- | :--- | :--- |
| **Base** | `#1A1C1E` (Gunmetal) | Backgrounds, shadows, metal textures, chassis. |
| **Accent** | `#4CA3FF` (Primary Blue) | LED lights, energy flows, UI highlights, data points. |
| **Support** | `#155394` / `#307BCA` | Deep blue reflections, secondary light sources. |
| **Neutral** | `#F5F5F5` (Matte White) | Typography, key light sources, clean highlights. |
| **Texture** | Subtle Noise / Grids | Overlays on images to give a "tech" feel. |

---

## 3. Asset Categories & Descriptions

### A. Hero & Lifestyle (Photographic/3D Rendered)
*   **Subject:** Semi-trucks (ET trucks) in powerful stances.
*   **Lighting:** Dramatic rim lighting, blue accent lights on the vehicle edges.
*   **Environment:** Minimalist industrial yards, clean highways at dusk, or futuristic charging hubs.
*   **Style:** Cinematic, sharp focus, high contrast.
*   **Prompt Keyword Base:** "Cinematic heavy-duty electric truck, gunmetal gray, glowing blue LED accents (#4CA3FF), futuristic industrial setting, ultra-detailed 8k, photorealistic, moody lightning."

### B. Technical Illustrations (The Transformation Stack)
*   **Subject:** Exploded views of engines, battery packs, and software interfaces.
*   **Style:** "Blueprint 2.0" — Clean white lines on gunmetal backgrounds, glassmorphism overlays.
*   **Vibe:** Technical, precise, architectural.
*   **Iconography:** Bold, thick-stroke icons (Industrial weight) with `2px` border radius and slight blue glow.

### C. Functional Graphics (Map & Calculator)
*   **Operations Map:** Minimalist India silhouette in dark gray, with "Primary Brand Blue" pulsing nodes and connecting lines.
*   **Calculator Icons:** Simple, legible industrial symbols (Battery, CO2 cloud, Rupee sign).

---

## 4. Prompt Engineering for AI Generation
To maintain consistency when using `generate_image`, use these specific modifiers:

> **Template:** `[Subject Description], dark gunmetal charcoal aesthetic, primary brand blue glowing accents (#4CA3FF), industrial tech style, highly detailed, sharp edges, wide angle, 8k resolution, cinematic lighting --ar 16:9`

### Examples:
1.  **Hero Truck:** `Front profile of a massive electric freight truck, sleek gunmetal finish, glowing blue headlights (#4CA3FF), parked on a modern highway at dawn, volumetric lighting, 8k.`
2.  **Battery Tech:** `Modular electric vehicle battery pack, transparent casing, glowing blue energy cells, technical blueprint style background, ultra-modern tech.`
3.  **Charging Station:** `High-speed EV charging hub for heavy trucks, minimalist industrial design, gunmetal and glass, blue status lights, night scene.`

---

## 5. Iconography Guidelines
*   **Weight:** Bold / Extra Bold (for "Heavy-Duty" feel).
*   **Shape:** Slightly rounded corners (4px max) to balance industrial with modern.
*   **Coloring:** Pure Matte White icons with an optional `Primary Brand Blue` drop shadow or glow on hover.
*   **Library Recommendation:** Lucide React (modified with custom stroke widths).

---

## 6. Implementation Checklist
- [ ] Convert all images to **WebP** for performance.
- [ ] Apply CSS `filter: contrast(1.1) brightness(0.9)` to photography for consistency.
- [ ] Use `svg` for all icons and technical diagrams to ensure scalability.
- [ ] Implement lazy loading for all heavy asset files.
