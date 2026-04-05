# Adiós Ansiedad - Página de Venta Directa

## Design Guidelines

### Design References
- **Calm.com**: Serene, calming gradients, trust-building
- **Headspace.com**: Clean, warm, approachable
- **Style**: Dark Mode Premium + Warm Gradients + Emotional & Empathetic

### Color Palette
- Primary Background: #0F0B1E (Deep Indigo/Dark)
- Secondary Background: #1A1333 (Dark Purple)
- Card Background: #241D3D (Muted Purple)
- Accent Primary: #7C3AED (Vivid Purple - CTAs)
- Accent Secondary: #F59E0B (Warm Amber - highlights, badges)
- Accent Gradient: linear-gradient(135deg, #7C3AED, #EC4899) (Purple to Pink)
- Success/Trust: #10B981 (Emerald Green)
- Text Primary: #FFFFFF
- Text Secondary: #C4B5D4 (Light Lavender)
- Danger/Pain: #EF4444 (Red for pain points)

### Typography
- Headings: Inter, font-weight 700-800
- Body: Inter, font-weight 400
- Accent/Quotes: italic style for emotional phrases

### Key Component Styles
- **CTA Buttons**: Gradient purple-to-pink, white text, rounded-full, large padding, pulse animation on hover
- **Cards**: Dark purple bg with subtle border, rounded-2xl, hover lift effect
- **Pain Points**: Red accent icons, emotional copy
- **Bonuses**: Amber/gold accent, checkmark icons
- **Testimonials**: Card style with avatar, quote marks, star ratings

### Layout & Spacing
- Full-width sections with alternating backgrounds
- Max-width container for content (max-w-5xl)
- Section padding: 80-100px vertical
- Mobile-first responsive design

### Images to Generate
1. **hero-calm-mind.jpg** - Abstract serene visualization of a calm mind, soft purple and blue gradients, ethereal light particles, peaceful atmosphere (Style: artistic, dreamy)
2. **pdf-mockup-anxiety.jpg** - Professional ebook/PDF mockup on a dark background, modern design, showing a wellness guide cover with calming colors (Style: 3d, product mockup)
3. **person-relief-peace.jpg** - Person sitting peacefully with eyes closed, soft warm lighting, feeling of relief and tranquility, natural setting (Style: photorealistic, warm tones)
4. **emergency-kit-bonus.jpg** - Flat lay of wellness items like journal, cards, candle, tea on dark surface, organized and aesthetic, calming color palette (Style: photorealistic, overhead shot)

---

## Development Tasks

### Files to Create (max 8):
1. **src/pages/Index.tsx** - Main landing page assembling all sections
2. **src/components/HeroSection.tsx** - Hero with headline, CTA, trust badges
3. **src/components/PainSection.tsx** - Pain points + failed solutions
4. **src/components/ProductSection.tsx** - Product presentation + differentiators
5. **src/components/BonusSection.tsx** - Bonuses with perceived value
6. **src/components/TestimonialSection.tsx** - Testimonials + social proof
7. **src/components/FAQSection.tsx** - FAQ accordion
8. **src/components/FooterCTA.tsx** - Final CTA + footer

### Implementation Notes
- Single page landing (no routing needed beyond Index)
- Smooth scroll navigation
- Animations on scroll using CSS transitions
- Mobile responsive throughout
- All copy in Spanish based on market study
- Price: $5.99 USD prominently displayed
- Multiple CTA buttons throughout the page