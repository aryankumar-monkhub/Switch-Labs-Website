# Implementation Plan - Switch Labs Website

This document outlines the strategy and development roadmap for the Switch Labs website, focusing on a "Heavy-Duty Tech" aesthetic and high-performance interactive components.

## Project Documentation
- [Implementation Plan](/implementation_plan.md)
- [Visual & Image Strategy](/image_strategy.md)

## 1. Technical Stack & Setup
- **Framework:** React with Vite for a fast, modular development experience.
- **Styling:** Vanilla CSS with a structured Design System (CSS Variables).
- **Icons:** Lucide React or custom SVGs for the "Heavy-Duty" look.
- **Animations:** Framer Motion for scroll-triggered fades and smooth transitions.
- **Lead Capture:** Formspree or a custom API route for email integration.

## 2. Design System (Visual Style)
- **Palette:**
  - Primary: `Gunmetal Charcoal (#1A1C1E)`
  - Accent: `Electric Teal (#00F2FF)` (with glow effects)
  - Neutral: `Matte White (#F5F5F5)`, `Light Grey (#A0A0A0)`
- **Typography:** Montserrat/Inter (Headings: Extra Bold, Body: Regular/Medium).
- **Aesthetics:** Glassmorphism for cards, subtle noise textures, and industrial-grade borders.

## 3. Core Features & Components

### A. "Live Impact" Carbon Calculator
- **Inputs:**
  - Fleet Size Slider (1–100)
  - Monthly Distance Slider (1,000–15,000 KM)
  - Energy Source Toggle (Grid vs. Renewable)
- **Logic:**
  - Carbon Saved calculation.
  - Cost Reduction (approx. 30-40% savings).
- **UX:** Animated "counting" numbers.

### B. Interactive Corridor Map
- **Visual:** Custom India SVG with pulsing pins at operational nodes.
- **Routes:** Sirohi ↔ Kalol, Ankaleshwar ↔ Jhagadia, etc.
- **Mobile:** Pins list view for touch-friendliness.

## 4. Content Architecture
1. **Header:** Nav + "Get a Quote" (Teal Glow).
2. **Hero:** "Electrifying the Backbone of Indian Industry."
3. **Impact:** Carbon Calculator tool.
4. **Operations:** Corridor Map section.
5. **Stack:** Transformation Stack pillars.
6. **Social Proof & Investors:** Testimonials and trust banners.
7. **Footer:** Form + Links.

## 5. SEO & Performance
- **Image Optimization:** WebP format.
- **Keywords:** "Heavy Duty EV India", "Electric Trucking Logistics", etc.
- **Lighthouse Goals:** 95+ score.
