# Danny's Stag - Interactive Mobile Web App

A mobile-first progressive web app designed for Danny's stag party, featuring interactive tasks, team-based challenges, and real-time countdown functionality.

## Overview

This app provides an engaging experience for stag party participants through:
- **5 Interactive Tasks** with full-screen video backgrounds
- **Team-based Competition** with customizable task orders
- **Real-time Countdown** that transitions to task-specific timers
- **Mobile-optimized Interface** with touch gestures and haptic feedback

## Features

### Core Features
- **Mobile-First Design**: Optimized for smartphones with desktop redirect
- **Video Backgrounds**: Full-screen video experiences for each task
- **Swipe Navigation**: Intuitive touch gestures to navigate between tasks
- **Team Selection**: 4 teams with unique task sequences
- **Persistent State**: Team selection saved in URL for easy sharing
- **Dark Theme**: Integrated dark mode map and UI elements

### Tasks Include
1. **Barista's Paradise** - Coffee shop challenge
2. **Whole In One** - Golf course adventure
3. **Do A Runner** - Distance challenge
4. **Dance Battle** - Show your moves
5. **Beg Borrow Steal** - Scavenger hunt

### Technical Features
- **Countdown Timer**: Shows time until event, then task-specific countdowns
- **Interactive Map**: Dark-themed map showing meeting point coordinates
- **Glassmorphism UI**: Modern frosted glass effects
- **Responsive Animations**: GSAP-powered smooth transitions
- **PWA Ready**: Can be installed as a mobile app

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3
- **Animations**: [GSAP](https://greensock.com/) with ScrollTrigger
- **Maps**: [Leaflet](https://leafletjs.com/) with OpenStreetMap
- **TypeScript**: Full type safety
- **Hosting**: Vercel deployment ready

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/danny-stag.git
    cd danny-stag
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**
    ```bash
    cp .env.example .env
    ```
    Edit `.env` and add:
    ```
    COUNTDOWN_TARGET_DATE=2024-12-25T18:00:00
    ```

4. **Run development server**
    ```bash
    npm run dev
    ```

5. **Build for production**
    ```bash
    npm run build
    ```

## Usage

### For Participants
1. Visit the site on your mobile device
2. Select your team color in the info panel
3. Swipe through tasks in your team's order
4. Complete challenges within the 25-minute time limit
5. Use the map to find the meeting point

### Team Orders
- **Purple Team**: 1 → 2 → 3 → 4 → 5 (default)
- **Red Team**: 3 → 1 → 4 → 2 → 5
- **Blue Team**: 2 → 4 → 1 → 5 → 3
- **Green Team**: 5 → 3 → 2 → 1 → 4

### URL Parameters
- `?team=red` - Pre-select a team
- Share URLs to maintain team selection

## Project Structure

```
danny-stag/
├── src/
│   ├── components/
│   │   ├── CountdownTimer.astro    # Timer component
│   │   ├── InfoPanel.astro         # Team selection & info
│   │   └── TaskCard.astro          # Individual task cards
│   ├── layouts/
│   │   └── BaseLayout.astro        # Base HTML structure
│   ├── pages/
│   │   ├── index.astro             # Main app page
│   │   └── desktop-notice.astro   # Desktop redirect page
│   └── styles/
│       └── global.css              # Global styles
├── public/                         # Static assets
├── .env.example                    # Environment template
├── astro.config.mjs               # Astro configuration
├── tailwind.config.cjs            # Tailwind configuration
└── package.json                   # Dependencies
```

## Customization

### Changing Tasks
Edit the `tasks` array in `src/pages/index.astro`:
```javascript
const tasks = [
  {
     number: 1,
     title: "Your Task Title",
     description: "Task description",
     action: "What to do",
     videoUrl: 'https://your-video-url.mp4'
  },
  // ... more tasks
];
```

### Modifying Team Orders
Update the `teamTaskOrders` object in `src/components/InfoPanel.astro`:
```javascript
const teamTaskOrders = {
  purple: [1, 2, 3, 4, 5],
  red: [3, 1, 4, 2, 5],
  // ... customize order
};
```

### Styling
- Colors defined in `tailwind.config.js`
- Glassmorphism effects in component styles
- Dark theme customization in CSS

## Meeting Point

The app includes an integrated map showing:
- **Location**: 55.2058° N, 6.6563° W
- **Description**: West Coast of Scotland
- **Features**: Dark theme, zoom controls, Google Maps integration

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## Troubleshooting

### Mobile Detection Not Working
- Check viewport meta tags in BaseLayout
- Verify JavaScript is enabled
- Test on actual mobile device

### Videos Not Playing
- Ensure video URLs are accessible
- Check video format compatibility (MP4/MOV)
- Verify autoplay policies on device

### Map Not Loading
- Check Leaflet CSS is imported
- Verify map container has height
- Check browser console for errors

## License

This project is private and proprietary. All rights reserved.

## Contributing

This is a private project for Danny's stag party. For issues or suggestions, please contact the organizers.

---

Built with love for Danny's Stag Party July 2025