
# MVP Build Plan: Interactive Developer Desk

## PHASE 1: Project Setup

### 1. Initialize Project
- Start: Create a new Vite React project (or Next.js project)
- End: Project runs with default App

### 2. Install Dependencies
- Start: Add dependencies via npm/yarn
- End: `package.json` includes: react, tailwindcss, framer-motion, classnames

### 3. Configure Tailwind CSS
- Start: Install Tailwind + PostCSS and init config
- End: Can use Tailwind classes in `App.jsx`

### 4. Setup Folder Structure
- Start: Create `src/components`, `src/contexts`, `src/data`, etc.
- End: All key folders created with placeholder files

## PHASE 2: Global Theme Toggle

### 5. Create ThemeContext
- Start: Define `ThemeContext.jsx` in `src/contexts`
- End: Provides light/dark state and toggle function

### 6. Wrap App in ThemeProvider
- Start: Import and wrap `App.jsx`
- End: Can access theme context from any component

### 7. Build ThemeToggle Component
- Start: Create simple button that toggles theme
- End: Clicking button toggles light/dark in UI

## PHASE 3: DeskScene Layout

### 8. Build DeskScene Component
- Start: Create static layout with phone and laptop areas
- End: Renders placeholder devices side-by-side using Tailwind

### 9. Integrate Theme Context in DeskScene
- Start: Add dark/light background logic
- End: Scene visually changes on theme toggle

## PHASE 4: Laptop (Web Projects)

### 10. Create `webProjects.js` Data File
- Start: Add 1–2 sample project objects
- End: File exports valid array of objects

### 11. Create ProjectCard Component
- Start: Build a card showing title, tech, and links
- End: ProjectCard renders with props and hover effects

### 12. Build LaptopDisplay Component
- Start: Map over `webProjects.js` data
- End: Renders list of `ProjectCard` inside a laptop frame

### 13. Add Auto-Cycle Hook
- Start: Build `useAutoCycle()` to rotate project index
- End: Component shows different project every few seconds

## PHASE 5: Phone (Mobile Projects)

### 14. Create `mobileProjects.js` Data File
- Start: Add 1–2 mobile project objects
- End: File exports valid array of objects

### 15. Build PhoneDisplay Component
- Start: Animate mobile screen with Framer Motion
- End: Shows scrollable mobile UI demo or placeholder

### 16. Add Auto-Cycle or Manual Scroll Logic
- Start: Enable project switching or fake scrolling
- End: Animates through mobile projects or simulates swipe

## PHASE 6: Panels + Extra Elements

### 17. Build AboutPanel Component
- Start: Create simple “About Me” card
- End: Clickable or hoverable sticky note with bio

### 18. Build SkillsPanel Component
- Start: Render clickable tech icons
- End: Click shows skill levels or info popup

### 19. Build ContactPanel Component
- Start: Create form with name, message, send button
- End: Logs form data to console (no service yet)

## PHASE 7: Final Polish

### 20. Add Framer Motion Animations
- Start: Animate entrance and transitions
- End: Smooth loading and component switches

### 21. Add Light/Dark Desk Scene Effects
- Start: Change desk elements on theme switch
- End: UI responds with mood change (e.g., desk lamp glow)

### 22. Responsive Styling
- Start: Tweak layout for mobile/tablet/desktop
- End: App renders well on all screen sizes

## PHASE 8: Deploy

### 23. Deploy to Vercel or Netlify
- Start: Push to GitHub, link to Vercel
- End: Live preview with working domain
