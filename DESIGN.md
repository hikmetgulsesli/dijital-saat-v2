# Design System: Chronos Minimalism

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Monolith"**

This design system transcends the "utility app" category to become a piece of digital horology. By leaning into the "Obsidian Monolith" concept, we treat the UI not as a collection of buttons and labels, but as a singular, high-tech instrument carved from dark glass. 

We break the "template" look by rejecting the standard 12-column grid in favor of **intentional asymmetry**. Primary time elements are anchored with massive weight, while secondary data (alarms, world clock) floats in the periphery with breathing room that suggests a premium, editorial layout. The interface doesn't just "show" time; it "frames" it.

## 2. Colors & Tonal Depth
The palette is rooted in the depth of `slate-950`, but its soul is found in the interplay of light and transparency.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders are strictly prohibited for sectioning or containment. 
*   **Separation via Tone:** Use `surface_container_low` vs. `surface` to define regions.
*   **Separation via Space:** Use the typography scale and generous whitespace to imply boundaries.

### Surface Hierarchy & Nesting
Instead of flat boxes, we use "Tonal Nesting" to create a sense of physical engineering:
*   **Base Layer:** `surface` (#0c1324) – The infinite void.
*   **Secondary Zones:** `surface_container_low` (#151b2d) – For background sections.
*   **Interactive Elements:** `surface_container_high` (#23293c) – For elements that require user focus.

### The "Glass & Gradient" Rule
To achieve a "high-tech" feel, use **Glassmorphism** for floating overlays (like settings or time-pickers). 
*   **Recipe:** `surface_variant` at 40% opacity + `backdrop-blur (20px)`.
*   **Signature Textures:** Main time displays or CTA buttons should utilize a subtle linear gradient: `primary` (#2fd9f4) to `on_primary_container` (#008496) at a 135-degree angle. This adds a "lithium-ion" glow that flat colors lack.

## 3. Typography
The typography is the "hero" of this system. We use a high-contrast scale to ensure the time is unmistakable while auxiliary info feels sophisticated.

*   **Display (Space Grotesk):** Used for the primary digital readout. Bold, wide apertures, and a technical "monospaced" feel even in proportional weights. `display-lg` (3.5rem) is the anchor of the app.
*   **Headline (Space Grotesk):** Used for section headers like "Alarmlar" or "Dünya Saati." 
*   **Title/Body (Inter):** Used for functional UI text. `Inter` provides high legibility at smaller sizes, balancing the aggressive nature of Space Grotesk.
*   **Identity via Scale:** By pairing a `display-lg` time readout with a `label-sm` secondary timezone, we create an editorial "Big & Small" aesthetic that feels intentional and high-end.

## 4. Elevation & Depth
In this system, elevation is a property of light, not physics.

*   **The Layering Principle:** Place a `surface_container_highest` card atop a `surface_dim` background to create a "soft lift."
*   **Ambient Shadows:** For floating elements (e.g., an active stopwatch), use a shadow with a 40px blur, 0% spread, and an opacity of 6% using the `primary` color (#2fd9f4) instead of black. This creates a "glow" effect rather than a "shadow."
*   **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use the `outline_variant` token at **15% opacity**. It should be felt, not seen.

## 5. Components

### Primary Buttons (Ana Butonlar)
*   **Style:** No borders. Fill with the Signature Gradient (`primary` to `on_primary_container`).
*   **Shape:** `rounded-xl` (0.75rem) for a modern, approachable tech feel.
*   **State:** On hover, increase `surface_tint` brightness; on press, scale to 98%.

### Time Chips (Zaman Çipleri)
*   **Context:** For selecting snooze durations or quick-alarm presets.
*   **Style:** `surface_container_highest` background with `on_surface_variant` text.
*   **Active State:** Text switches to `primary`, background gains a 10% `primary` tint.

### List Items (Liste Öğeleri)
*   **Rule:** Forbid divider lines. 
*   **Layout:** Each list item (e.g., an Alarm entry) sits on a slightly different tonal background than the main surface, or is separated by exactly `24px` of vertical whitespace.

### Input Fields (Giriş Alanları)
*   **Style:** Bottom-border only using the `Ghost Border` rule. Focus state animates the border to 100% `primary` opacity. 
*   **Typography:** All user input uses `Space Grotesk` to maintain the technical theme.

### Glass Tooltips
*   **Style:** `surface_container_lowest` at 80% opacity with a heavy `backdrop-blur`. This ensures the time display remains visible (though blurred) beneath the tooltip.

## 6. Do's and Don'ts

### Do:
*   **Use Turkish Localization:** Ensure "ÖÖ" (AM) and "ÖS" (PM) are styled in `label-md` to not distract from the main digits.
*   **Embrace Negative Space:** Let the `slate-950` background breathe. A minimalist clock is defined by the space *around* the time.
*   **Animate Transitions:** Use "Slow-In, Fast-Out" easing for digit changes to mimic high-end liquid crystal displays.

### Don't:
*   **Don't use pure white (#FFFFFF):** Always use `slate-200` (`on_surface_variant`) for text to prevent eye strain in dark environments.
*   **Don't use standard shadows:** Avoid the "fuzzy black" look. If it needs to pop, use tonal shifts or primary-tinted glows.
*   **Don't crowd the edges:** Maintain a minimum of `24px` padding from the screen edge for all primary elements.