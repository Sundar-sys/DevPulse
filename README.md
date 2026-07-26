# DevPulse 🚀
An interactive developer portfolio and live productivity suite built with modern glassmorphism and micro-interactions.


## 🌟 Overview
DevPulse merges a sleek developer portfolio with a live, embedded task-management micro-app. Instead of showcasing static screenshots, DevPulse gives visitors an immediate, hands-on demonstration of UI/UX capabilities right inside the browser.

Built around a futuristic midnight dark mode and glassmorphic UI, the application prioritizes smooth user interaction, physics-based animations, and real-time state persistence.


## ✨ Key Features

## 🌐 Portfolio Engine
- Dynamic Hero Section: Features animated gradient glows, magnetic CTA buttons, and fluid entry animations.

- Glassmorphic UI Design: Modern frosted glass cards, soft glow effects, and subtle typography hierarchy.

- Interactive Work Showcase: Asymmetrical project grids with hover-reveal overlays and smooth scroll reveals.

- Responsive Layout: Pixel-perfect presentation across mobile, tablet, and desktop viewports.

## 📝 Embedded Productivity Suite (TaskPulse)
- Micro-Interactions: Custom task completion states with particle bursts, smooth strikethrough drawing, and entry/exit transitions.

- Progress Analytics: Real-time task completion percentage tracker represented by an animated progress ring.

- Priority Management: Priority tags (High, Medium, Low) with visual indicator badges.

- Persistent Storage: Native localStorage integration ensuring tasks persist across browser reloads.

## 🛠️ Tech Stack
- Frontend: HTML5, CSS3 (Custom Properties & CSS Grid/Flexbox), JavaScript (ES6+)

- Styling & Effects: Glassmorphism UI, CSS Keyframe Animations

- Libraries (Optional): GSAP / Framer Motion (for smooth scroll and micro-interactions)

- Icons: Lucide Icons / Font Awesome

## 📂 Project Structure
Plaintext
```
devpulse/
├── assets/
│   ├── images/          # Project screenshots, avatars, and graphics
│   └── icons/           # Custom SVG icons
├── css/
│   ├── style.css        # Core layout & typography styles
│   ├── glass.css        # Glassmorphism utilities & theme variables
│   └── todo.css         # Task manager specific styling
├── js/
│   ├── app.js           # Portfolio animations & core navigation logic
│   └── todo.js          # Task manager state, localStorage, & interaction handler
├── index.html           # Main application entry point
├── LICENSE              # MIT License
└── README.md            # Project documentation
```

## 🚀 Getting Started
To run DevPulse locally on your machine:

Clone the repository:

```Bash
git clone https://github.com/YOUR_USERNAME/devpulse.git
Navigate into the project directory:
```
```Bash
cd devpulse
Launch the application:
```
Open index.html directly in your browser.

Or use a local development server like Live Server in VS Code for hot reloading:

```Bash
npx live-server
```
## ⚙️ Customization
- Update Personal Info: Open index.html and replace placeholder headlines, bio copy, and social links with your own credentials.

- Color Theme: Tweak primary accent colors and glass blur intensity inside css/glass.css:

CSS
:root {
  --bg-dark: #0f172a;
  --accent-neon: #6366f1;
  --glass-border: rgba(255, 255, 255, 0.1);
}
## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you have ideas for improvement.

## 📜 License
Distributed under the MIT License. See LICENSE for more information.
